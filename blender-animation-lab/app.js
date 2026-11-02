const content = document.querySelector('#content');
const storageKey = 'shahar-animation-lab-v1';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) {}
if (!saved || typeof saved !== 'object' || Array.isArray(saved)) saved = {};
function storeProgress() { try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (_) {} }
function table(m) {
  return `<div class="table-scroll"><table><caption class="mini" style="text-align:start;margin-bottom:8px">${m.title} · טבלת פריימי מפתח</caption><thead><tr>${m.headers.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${m.rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function missionHTML(m,i) {
  return `<section class="chapter ${m.class}" id="${m.id}"><div class="chapter-heading"><p class="eyebrow">משימה ${m.n} / ${m.inspo}</p><h2>${m.title}</h2><p class="sub">${m.intro}</p><span class="pill">${m.time}</span><span class="pill">${m.skill}</span></div><div class="layout"><div class="steps">${m.steps.map(([title,body],s)=>`<article class="step" data-step="${m.id}-${s}"><h3>${title}</h3>${body}<label class="tick"><input type="checkbox" data-check="${m.id}-${s}"> סיימתי — ניסיתי את זה ב־Blender</label></article>`).join('')}<div class="rescue">${common.rescue}${m.rescue}</div></div><aside class="side"><div class="panel"><h3>ככה נראית התוצאה</h3><video controls playsinline loop preload="none" poster="assets/${m.slug}.png" aria-label="${m.title}: אנימציית הדוגמה המוכנה"><source src="assets/${m.slug}.mp4" type="video/mp4">הדפדפן שלך אינו יכול לנגן את הסרטון. <a href="assets/${m.slug}.mp4">הורדת סרטון הדוגמה</a>.</video><p class="caption">רינדור מתוך Blender · ${m.end/24} שניות · 24 fps · ללא קול<br>הנגן חוזר על הסרטון; הסצנה עצמה לא חייבת להתחבר בלולאה חלקה.</p><a class="download" href="assets/${m.slug}.mp4" download>שמירת סרטון הדוגמה ↓</a></div><div class="panel"><h3>טבלת הפריימים שלך</h3>${table(m)}<p class="mini" style="margin-top:14px">${m.tableNote}</p></div><div class="panel"><h4>זה עובד כש…</h4><p class="recipe">${m.success}</p><details><summary>פתיחת סצנת הדוגמה המוכנה</summary><div><p>קובץ ה־<b>.blend</b> הזה הוא תוספת למי שמשתמש ב־<b>Blender 5.2 ומעלה</b>. אפשר לפתוח עותק כדי לבדוק את פריימי המפתח. ב־4.5 בונים לפי ההוראות, בלי לפתוח את הקובץ.</p><a class="download" href="examples/${m.slug}.blend" download>הורדת ${m.file} ↓</a></div></details></div></aside></div><div class="next-row"><button class="complete" data-complete="${m.id}" aria-pressed="false">✓ יצרתי את הסרט הזה</button><a class="button" href="#${missions[i+1]?.id || 'premiere'}">${missions[i+1]?'למשימה הבאה':'לייצוא הסרט שלי'} ←</a></div></section>`;
}
function render() {
  const hash=location.hash.slice(1);
  const id = ['start','premiere','sources',...missions.map(m=>m.id)].includes(hash) ? hash : 'start';
  const m=missions.find(m=>m.id===id);
  content.innerHTML=id==='start'?startHTML:id==='premiere'?premiereHTML:id==='sources'?sourcesHTML:missionHTML(m,missions.indexOf(m));
  document.querySelectorAll('.tabs a').forEach(a=>a.classList.toggle('active',a.hash==='#'+id));
  document.querySelectorAll('[data-check]').forEach(input=>{
    input.checked=!!saved[input.dataset.check];
    input.closest('.step').classList.toggle('done',input.checked);
    input.addEventListener('change',()=>{saved[input.dataset.check]=input.checked;storeProgress();input.closest('.step').classList.toggle('done',input.checked);});
  });
  document.querySelectorAll('[data-complete]').forEach(button=>{
    const key='complete-'+button.dataset.complete;
    const update=()=>{button.setAttribute('aria-pressed',String(!!saved[key]));button.textContent=saved[key]?'✓ הסרט מוכן!':'✓ יצרתי את הסרט הזה';}; update();
    button.addEventListener('click',()=>{saved[key]=!saved[key];storeProgress();update();updateProgress();});
  });
  fixBidi(content); updateProgress(); initDemo();
  if(hash && hash!=='home') requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'instant'}));
}
// Keep Blender labels, vectors and negative numbers in their original order.
function fixBidi(root) {
  root.querySelectorAll('b,strong,kbd,.values,td,th').forEach(el=>{
    const t=el.textContent;
    if (/[A-Za-z0-9]/.test(t) && !/[\u0590-\u05ff]/.test(t)) {
      el.dir='ltr'; el.classList.add('ltr-value');
    }
  });
  // Isolate English labels and numerical expressions embedded in Hebrew prose.
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) {
    const node=walker.currentNode;
    if (/[\u0590-\u05ff]/.test(node.textContent) && !node.parentElement.closest('script,style,svg,bdi,[dir="ltr"]')) nodes.push(node);
  }
  const pattern=/(?:[A-Za-z][A-Za-z0-9_.]*(?:[ \t]+[A-Za-z][A-Za-z0-9_.]*)*(?:[ \t]*[=→/+][ \t]*(?:[A-Za-z0-9_.°−-]+|\([^\u0590-\u05ff<>]+\)))*)|(?:\([−\-+0-9., °/]+\))|(?:[−-]?\d+(?:\.\d+)?(?:[–/][0-9.]+)?[°%]?)/g;
  for(const node of nodes) {
    const text=node.textContent; let pos=0;const frag=document.createDocumentFragment();let match;
    while((match=pattern.exec(text))) {
      frag.append(document.createTextNode(text.slice(pos,match.index)));
      const span=document.createElement('bdi');span.dir='ltr';span.textContent=match[0];frag.append(span);pos=match.index+match[0].length;
    }
    if(pos){frag.append(document.createTextNode(text.slice(pos)));node.replaceWith(frag);}
  }
}
function updateProgress() { document.querySelector('#progress').textContent=`${missions.filter(m=>saved['complete-'+m.id]).length} / 4 משימות`; }
let animationId=0;
function initDemo() {
  cancelAnimationFrame(animationId);
  const obj=document.querySelector('#demo-object');if(!obj)return;
  let mode='linear', playing=false, started=0;
  const play=document.querySelector('#demo-play'), duration=document.querySelector('#duration');
  const notes={linear:'Linear: מרחקים שווים בזמנים שווים. התרשים ממחיש את הרעיון; הוא אינו הדמיה של Blender.',ease:'מתחיל לאט, מאיץ ואז מאט. עקומות Bézier יכולות ליצור את התחושה הזאת; הצורה המדויקת תלויה בידיות שלהן.',hold:'Constant: שומר על הערך הראשון ואז קופץ לבא. מתאים לתנועה במדרגות או לתחושה של סטופ־מושן.'};
  const position=t=>{const x=mode==='ease'?t*t*(3-2*t):mode==='hold'?(t>=1?1:0):t;obj.setAttribute('transform',`translate(${75+650*x} 75)`);};position(0);
  const stop=()=>{playing=false;cancelAnimationFrame(animationId);play.textContent='▶ ניגון';};
  const tick=now=>{if(!playing)return;const t=Math.min((now-started)/(Number(duration.value)*1000),1);position(t);if(t<1)animationId=requestAnimationFrame(tick);else stop();};
  play.addEventListener('click',()=>{if(playing){stop();return;}playing=true;started=performance.now();play.textContent='Ⅱ עצירה';position(0);animationId=requestAnimationFrame(tick);});
  document.querySelectorAll('.mode').forEach(button=>button.addEventListener('click',()=>{stop();mode=button.dataset.mode;position(0);document.querySelectorAll('.mode').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelector('#demo-note').textContent=notes[mode];}));
  duration.addEventListener('input',()=>{stop();position(0);document.querySelector('#duration-value').textContent=duration.value+' שניות';});
}
window.addEventListener('hashchange',render);
document.querySelector('#print').addEventListener('click',()=>{
  cancelAnimationFrame(animationId);
  content.innerHTML='<h1 class="print-only">מעבדת האנימציה של שחר</h1>'+startHTML+missions.map(missionHTML).join('')+premiereHTML+sourcesHTML;
  fixBidi(content);
  document.querySelectorAll('details').forEach(d=>d.open=true);
  window.print();render();
});
fixBidi(document.body);
render();
