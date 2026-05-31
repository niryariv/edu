---
name: lesson-builder
description: Use when creating or updating open-source Hebrew interactive lessons for the edu index, including lesson pages, source links, prompt iterations, and GitHub Pages-ready static sites.
---

# Lesson Builder

Use this skill for lessons that belong in the `niryariv/edu` learning index or in sibling GitHub Pages lesson repositories.

## Workflow

1. Read the existing lesson repo or folder before changing anything.
2. Preserve the local style unless the user asks for a redesign.
3. Build the lesson as static HTML/CSS/JS by default.
4. Put the learning experience on the first screen.
5. Use Hebrew student-facing copy unless the user asks otherwise.
6. Include concrete examples, visual explanations, hints, and interactive practice.
7. Keep links to the live lesson, source code, and `edu` index easy to find.
8. Update `/index.html` in `edu` when adding a lesson or changing public links.
9. Add or update a short note in `/prompts/` when the prompt/process changes.
10. Verify locally in a browser before finishing.

## Lesson Quality Bar

- The page teaches one focused topic or a clear sequence of subtopics.
- Text fits on mobile and desktop without overlap or overflow.
- Practice gives immediate feedback and explains mistakes constructively.
- Visuals clarify the concept, not just decorate the page.
- Navigation works without a build step unless the repository already has one.
- The public page exposes where the source code and prompt/skill live.

## Links To Maintain

- Main index: `https://niryariv.github.io/edu/`
- Main source repo: `https://github.com/niryariv/edu`
- Active prompt: `/prompts/lesson-builder.md`
- Active skill: `/skills/lesson-builder/SKILL.md`
