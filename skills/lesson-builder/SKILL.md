---
name: lesson-builder
description: Use when creating or updating open-source Hebrew interactive lessons for the edu index, including mission-based courses for Omri, lesson pages, source links, prompt iterations, and GitHub Pages-ready static sites.
---

# Lesson Builder

Use this skill for lessons that belong in the `niryariv/edu` learning index or in sibling GitHub Pages lesson repositories.

## Workflow

1. Read the existing lesson repo or folder before changing anything.
2. Preserve the local style unless the user asks for a redesign.
3. Build the lesson as static HTML/CSS/JS by default.
4. Put an authentic learner-facing mission and a reachable first win on the first screen.
5. Use Hebrew student-facing copy unless the user asks otherwise.
6. Include concrete examples, visual explanations, adaptive hints, and interactive practice.
7. Keep links to the live lesson, source code, and `edu` index easy to find.
8. Update `/index.html` in `edu` when adding a lesson or changing public links.
9. Add or update a short note in `/prompts/` when the prompt/process changes.
10. For sibling lesson repositories, maintain `AGENTS.md` with this shared guidance.
11. Make the live lesson content expose links to the main `edu` index, source repo, and active prompt.
12. Verify locally in a browser before finishing.

## Omri Learner Profile

Treat this as a working profile to test and update, not as a fixed learning style or diagnosis.

- Use an authentic goal that matters to him; motivation and persistence rise when the task solves a real problem or unlocks a desired outcome.
- Start from a concrete state he can see, manipulate, or capture. Prefer a screen, object, diagram, game state, or visible result over an abstract introduction.
- Keep the current action small. Present one action at a time when the interface, vocabulary, or concept is new.
- Use literal, unambiguous Hebrew. Pair unfamiliar English or technical terms with the exact object or control they name.
- Expect strong persistence but possible dependence on external confirmation. Turn confirmation requests into prediction, evidence, and explanation prompts.
- Preserve his healthy caution around deletion, passwords, and irreversible actions. Never interpret caution as lack of ability.
- Do not infer mastery from successful execution. Require explanation and transfer to a new case.

## Core Learning Loop

Design every substantial activity around this loop:

1. **Mission:** State a concrete outcome the learner wants to achieve.
2. **Observe:** Ask what is visible, known, working, or failing.
3. **Predict:** Ask what should happen before revealing the next action or result.
4. **Act:** Give one clear action, especially for novices.
5. **Check evidence:** Show or request the observable result; do not rely on “done.”
6. **Explain:** Ask what the result tells us and introduce the formal concept after the experience.
7. **Transfer:** Present a different case that requires the same underlying principle.

Do not let the lesson become a remote control that supplies every decision. The learner should gradually own the hypothesis, choice of test, interpretation, and next step.

## Scaffolding And Cognitive Load

- Keep the immediate instruction visible until the action is complete; avoid transient multi-step directions.
- Limit a novice screen to one primary action and at most one or two new concepts.
- Place instructions beside the relevant visual or control to avoid split attention.
- When a learner asks “what now?”, respond first with the next action, then the minimum explanation needed for that action.
- Distinguish procedural difficulty from conceptual difficulty. Simplify navigation and wording without removing productive thinking.
- Make the current state persistent: **what we know / what we think / what we test next / what happened**.
- Provide hints in a ladder: orienting question → choice between two approaches → partial worked step → explicit instruction.
- Fade support as evidence of competence appears:
  1. Follow one demonstrated step.
  2. Choose between two justified next steps.
  3. Propose the next test or method.
  4. Plan, execute, explain, and verify independently.

## Safety Gates

Classify actions inside practical lessons:

- **Green:** observation, navigation, simulation, or a reversible answer attempt.
- **Amber:** reversible edits; state what will change and how to undo it.
- **Red:** deletion, passwords, permissions, system settings, purchases, publication, or other consequential actions. Require an adult or explicit authorization and provide a safe simulation when possible.

Never design a student activity that depends on exposing a password, bypassing permissions, or editing a live system when a sandboxed equivalent can teach the same concept.

## Feedback And Mastery

- Give immediate feedback about the learner's evidence or reasoning, not only generic praise.
- For an incorrect attempt, preserve agency: identify what the evidence rules out and offer the next smallest useful hint.
- After a successful action, ask one short reflection such as “Why did that work?” or “What changed?”
- Capture learning in a lightweight log: **I expected… / I did… / I observed… / therefore…**. Allow a screenshot or voice response plus one sentence when long writing is not the target.
- Assess mastery with a novel case. Repeating the original sequence measures memory for instructions, not transfer.
- Track growth by the amount of responsibility the learner can take, not only by completed pages.

## Lesson Quality Bar

- The page teaches one focused topic or a clear sequence of subtopics.
- Text fits on mobile and desktop without overlap or overflow.
- Practice gives immediate feedback and explains mistakes constructively.
- Visuals clarify the concept, not just decorate the page.
- The first meaningful success is reachable within roughly 5–10 minutes.
- Each substantial task completes the mission-to-transfer learning loop.
- Support fades after demonstrated competence instead of remaining permanently directive.
- A new case verifies conceptual transfer before the lesson marks mastery.
- Navigation works without a build step unless the repository already has one.
- The public page exposes where the source code and prompt/skill live.
- Sibling lesson repositories carry the shared repo guidance in `AGENTS.md`.

## Links To Maintain

- Main index: `https://niryariv.github.io/edu/`
- Main source repo: `https://github.com/niryariv/edu`
- Active prompt: `/prompts/lesson-builder.md`
- Active skill: `/skills/lesson-builder/SKILL.md`
- Shared repo guidance file: `AGENTS.md` in each sibling lesson repo
