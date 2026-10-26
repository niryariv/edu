# Iteration 010 — Math for Omri, grade 8

## Request

Create Hebrew mathematics lessons for Omri in grade 8, with explanations and exercises, based on https://www.mishbetzet.co.il/?id=180.

## Sources and scope

Read the public student PDFs linked on the source page. The page separates these from a password-protected teacher bank. The new course covers the 15 public topic families in 20 lessons; it is a scaffolded introduction and practice sequence, not an exhaustive replacement for every source question. Exercises and explanations are original. Source PDFs remain on the publisher's website and are linked from every lesson; they are not republished here. See `grade-8/SOURCES.md` for the mapping.

## Instructional design

Applied the local lesson-builder skill and the installed explicit-instruction-sequence-builder skill. Followed the working learner profile: a concrete mission, a reachable initial task, short stages, predictions before actions, worked reasoning, guided practice, independent work, then a new application and a brief explanation.

Assumed 35–45 minutes per lesson, with prerequisites visible and optional splitting into two sessions. Each lesson has a conceptual opening, a worked example, a guided question, three independent questions, a transfer question and an optional challenge. All 140 questions include feedback and worked solutions. There are no locked lessons. Original level A/B labels are preserved as publisher labels, not interpreted as the learner's ability.

## Implementation

Static HTML/CSS/JS in `grade-8/`; no build or network dependencies. Hebrew RTL prose and isolated LTR mathematics; visual explanations, a live linear-function graph, keyboard-accessible controls, local browser progress and current-lesson printing. Progress records completed practice and a written reflection; written reasoning is not automatically graded. Assistance on the transfer task is tracked, including feedback after an incorrect attempt. Existing user edits in other lessons were preserved.

## Validation

Check JavaScript syntax; exercise all routes and answer types in a browser, verify incorrect/empty answers and fractions, assistance tracking, reload persistence, graph updates, mobile overflow, and print visibility. Check original answer keys independently with arithmetic/structural assertions. Screenshots and temporary verification code are kept outside the repository.

Validation completed: 20 lesson routes, all 140 correct-answer paths against a separately reviewed key, 80 mobile stage layouts without horizontal overflow, empty/incorrect/fraction/invalid input handling, assistance tracking, reload persistence, live graph updates and visibility of all four stages in print. No browser runtime errors. Visually inspected desktop, mobile, worked-example and graph screenshots. A final HTTP-preview check verified mobile diagram adjustments and LTR isolation inside Hebrew solution text.
