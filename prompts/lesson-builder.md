# Lesson Builder Prompt

Use this prompt when creating or updating an open-source Hebrew interactive lesson for the
`edu` family of repositories.

## Goal

Create a student-facing lesson that teaches one focused topic clearly, in Hebrew, with:

- a live page that can be published with GitHub Pages;
- source code that a visitor can find from the `edu` index;
- short explanations, concrete examples, visual support, and interactive practice;
- a clear path for future iteration.

## Working Prompt

Build an interactive Hebrew lesson for a middle-school student on: `[TOPIC]`.

The lesson should:

- open directly into the learning experience, not a marketing page;
- explain the concept through small steps, examples, and visual representations;
- include practice with immediate feedback and hints;
- make the student translate text or situations into the relevant calculation, rule, or idea;
- work well on mobile and desktop;
- be published as static HTML/CSS/JS unless the lesson genuinely needs a framework;
- include visible links back to the `edu` index and to the lesson source repository.
- include a visible link to the active prompt or prompt history so the creation process is discoverable.
- keep `AGENTS.md` in sibling lesson repositories aligned with the shared lesson-builder guidance.

Before finishing:

- verify the page locally in a browser;
- check that text does not overflow on mobile;
- check that interactive controls work;
- update the `edu` index if this is a new lesson or if source/live links changed;
- add a short prompt iteration note under `prompts/`.

## Current Lesson Links

- Percentages live page: `https://niryariv.github.io/edu/percentages/`
- Percentages source: `https://github.com/niryariv/edu/tree/main/percentages`
- Roman Numerals live page: `https://niryariv.github.io/edu_roman_numerals/`
- Roman Numerals source: `https://github.com/niryariv/edu_roman_numerals`
- Newton's Laws live page: `https://niryariv.github.io/edu-physics-game/`
- Newton's Laws source: `https://github.com/niryariv/edu-physics-game`
- Probability live page: `https://niryariv.github.io/edu-probability/`
- Probability source: `https://github.com/niryariv/edu-probability`
- Chemistry live page: `https://niryariv.github.io/chemistry_site/`
- Chemistry source: `https://github.com/niryariv/chemistry_site`
- Shahar Math live page: `https://niryariv.github.io/shahar_math/`
- Shahar Math source: `https://github.com/niryariv/shahar_math`

## Iteration Notes

- `prompts/iteration-001.md`: first geometry site request and lesson navigation.
- `prompts/iteration-002.md`: add actual images to explain shapes and concepts.
