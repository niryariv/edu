"""Build the tutorial's reference scenes. Run with Blender --background --python this_file.
Uses only built-in Blender tools. Files are saved by the Blender version running this script.
"""
import bpy, math, os, json, subprocess, tempfile, shutil
from mathutils import Vector
ROOT=os.path.dirname(os.path.abspath(__file__))
OUT=os.path.join(ROOT,'examples'); ASSETS=os.path.join(ROOT,'assets')
os.makedirs(OUT,exist_ok=True); os.makedirs(ASSETS,exist_ok=True)
PINK=(1,.18,.48,1); GOLD=(1,.65,.08,1); RED=(.9,.035,.08,1); CYAN=(.05,.8,1,1)

def select(obj):
    bpy.ops.object.select_all(action='DESELECT'); obj.select_set(True); bpy.context.view_layer.objects.active=obj

def stage():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    s=bpy.context.scene; s.render.engine='BLENDER_WORKBENCH'
    s.render.resolution_x=960; s.render.resolution_y=540; s.render.resolution_percentage=100
    s.render.fps=24; s.frame_start=1
    s.display.shading.light='STUDIO'; s.display.shading.color_type='OBJECT'
    s.display.shading.show_shadows=True; s.display.shading.show_cavity=True
    s.display.shading.cavity_type='BOTH'; s.display.shading.background_type='WORLD'
    s.world=bpy.data.worlds.new('World'); s.world.color=(.035,.045,.075)
    s.view_settings.view_transform='Standard'
    bpy.ops.mesh.primitive_plane_add(size=200); ground=bpy.context.object; ground.name='Floor'; ground.color=(.055,.075,.13,1)
    bpy.ops.object.camera_add(location=(0,-12,8),rotation=(math.radians(63.435),0,0))
    cam=bpy.context.object; cam.name='Camera'; cam.data.lens=50; s.camera=cam
    for screen in bpy.data.screens:
        for area in screen.areas:
            if area.type=='VIEW_3D':
                area.spaces.active.region_3d.view_perspective='CAMERA'
                area.spaces.active.shading.color_type='OBJECT'
                area.spaces.active.overlay.show_overlays=False
    return s

def cube(name,loc,scale,color):
    bpy.ops.mesh.primitive_cube_add(size=2,location=loc)
    o=bpy.context.object; o.name=name; o.scale=scale; o.color=color; return o

def key(o,f,loc=None,scale=None,rot=None):
    if loc is not None: o.location=loc; o.keyframe_insert(data_path='location',frame=f)
    if scale is not None: o.scale=scale; o.keyframe_insert(data_path='scale',frame=f)
    if rot is not None: o.rotation_euler=[math.radians(x) for x in rot]; o.keyframe_insert(data_path='rotation_euler',frame=f)

def curves(o):
    a=o.animation_data.action
    for layer in a.layers:
        for strip in layer.strips:
            bag=strip.channelbag(o.animation_data.action_slot)
            if bag:
                yield from bag.fcurves

def interpolation(o,mode):
    for c in curves(o):
        for k in c.keyframe_points:
            k.interpolation=mode; k.handle_left_type='AUTO_CLAMPED'; k.handle_right_type='AUTO_CLAMPED'

def finish(s,slug,obj,end,poster):
    s.frame_end=end; s.frame_set(1); select(obj)
    s.render.image_settings.file_format='PNG'; s.render.filepath='//renders/'+slug+'-'
    # Leave ordinary full-size settings in the downloadable scene.
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,slug+'.blend'))
    s.frame_set(poster); s.render.filepath=os.path.join(ASSETS,slug+'.png'); bpy.ops.render.render(write_still=True)
    # Small reference movie is the actual Blender animation, not an illustrative simulation.
    s.render.resolution_percentage=60
    frames=tempfile.mkdtemp(prefix='shahar-frames-')
    s.render.image_settings.file_format='PNG'; s.render.filepath=os.path.join(frames,'frame-')
    bpy.ops.render.render(animation=True)
    ffmpeg=shutil.which('ffmpeg')
    if not ffmpeg: raise RuntimeError('Install FFmpeg to encode the reference movies.')
    subprocess.run([ffmpeg,'-y','-loglevel','error','-framerate','24','-i',os.path.join(frames,'frame-%04d.png'),'-c:v','libx264','-pix_fmt','yuv420p','-movflags','+faststart',os.path.join(ASSETS,slug+'.mp4')],check=True)
    shutil.rmtree(frames)
    print('COMPLETE',slug,flush=True)

s=stage()
bpy.ops.mesh.primitive_torus_add(major_radius=1,minor_radius=.25,major_segments=48,minor_segments=16,location=(0,0,3))
o=bpy.context.object; o.name='Doughnut'; o.color=PINK
for p in o.data.polygons:p.use_smooth=True
for f,z,xy,sz in [(1,3,1,1),(13,.15,1.2,.6),(16,.85,1,1),(25,2,1,1),(37,.15,1.2,.6),(40,.25,1,1),(48,.25,1,1)]:key(o,f,loc=(0,0,z),scale=(xy,xy,sz))
interpolation(o,'BEZIER'); finish(s,'01-doughnut',o,48,25)

s=stage(); arm=cube('Arm',(-3,0,1.8),(1,.22,.22),GOLD)
for v in arm.data.vertices:v.co.x+=1
bpy.ops.mesh.primitive_uv_sphere_add(segments=24,ring_count=12,radius=.45,location=(-1,0,1.8)); fist=bpy.context.object; fist.name='Fist'; fist.color=GOLD
for p in fist.data.polygons:p.use_smooth=True
cube('Target',(3,0,1.8),(.5,.5,.8),CYAN)
for f,x in [(1,1),(9,.6),(12,2.5),(15,2.5),(24,1),(36,1)]:
    key(arm,f,scale=(x,.22,.22)); key(fist,f,loc=(-3+2*x,0,1.8))
interpolation(arm,'LINEAR'); interpolation(fist,'LINEAR'); finish(s,'02-pirate',arm,36,12)

s=stage(); o=cube('Mystery_Cube',(0,0,.5),(1,1,1),RED)
for v in o.data.vertices:v.co*=.5
for f,z,y,r in [(1,.5,0,0),(13,.5,0,0),(49,2.8,-12,-8),(73,2.6,10,8),(97,2.8,-12,-8),(120,2.8,-12,-8)]:key(o,f,loc=(0,0,z),rot=(0,y,r))
interpolation(o,'BEZIER'); finish(s,'03-mystery',o,120,49)

s=stage(); bpy.ops.object.text_add(location=(0,0,2),rotation=(math.pi/2,0,0)); o=bpy.context.object; o.name='Title'; o.data.body='SHAHAR'; o.data.align_x='CENTER'; o.data.size=1; o.data.extrude=.06; o.color=CYAN
for f,x in [(1,.05),(25,1.15),(33,1),(72,1)]:key(o,f,scale=(x,x,x))
interpolation(o,'BEZIER'); finish(s,'04-title',o,72,33)
with open(os.path.join(OUT,'build-info.json'),'w') as f:json.dump({'blender':bpy.app.version_string,'projects':4,'fps':24},f,indent=2)
