# Validation — November 2, 2026

- Built and rendered all four reference animations in Blender 5.2.0 LTS on macOS. No assets downloaded, no add-ons required by the scenes.
- Reopened the four saved `.blend` files and verified the frame ranges and 24 fps rate, plus animation data on each main object.
- Checked every frame (48 + 36 + 120 + 72 = 276): all relevant object bounding-box corners remain inside the camera frame and at or above the floor. The pirate check includes Arm, Fist, and Target.
- Checked JavaScript syntax and loaded the tutorial from a local `file:` URL in Chromium.
- Exercised all seven chapters, loaded metadata for all four local MP4 videos, checked the movement demonstration, changed its mode, and confirmed persisted step and mission completion.
- Checked horizontal overflow at 1440px and 390px widths for every chapter. Inspected screenshots at desktop and mobile widths.
- Rendered the print layout for review.
- Confirmed the Dope Sheet Handle Type menu against installed Blender UI source. Other version-specific technical references appear in the tutorial’s sources chapter.

Limits: the written steps were checked against Blender 4.5 documentation; the actual scene build and frame validation used Blender 5.2 on macOS. The guide was not executed on Shahar’s Ubuntu machine. The optional reference `.blend` files require 5.2 or newer; they are not necessary for the build-from-scratch instructions.

## Hebrew edition

- Translated the full learner-facing tutorial, controls, explanations, troubleshooting, version notes, README, and map descriptions into Hebrew. Blender UI labels and reference object names remain English.
- Set the document to Hebrew and right-to-left layout; explicitly isolated Blender menu paths, vectors, numerical expressions, table values, and negative numbers left-to-right.
- Repeated chapter, media, interaction, progress persistence, mobile/desktop overflow, and print-render checks after translation. Inspected Hebrew screenshots and checked that the pirate recipe’s negative values retain LTR direction.
- Original animation data, Blender files, and video assets remain unchanged. The learner’s installed Blender version remains unknown.
