---
name: ui-pattern-picker
description: Use when someone wants a UI element but doesn't know what it's called, or gives a vague design request like "make it modern". Shows a ready-made, bilingual (Korean/English) catalog of 439 UI patterns as live preview cards, then helps them name, prompt for and apply the one they pick. Triggers on "what UI is there", "show me loading options", "UI 뭐가 있어", "로딩 보여줘".
---

# UI Pattern Picker

Goal: replace vague words ("modern", "clean", "pretty") with the **exact name of a UI pattern**, so the person can ask an AI or a developer for precisely what they want. It must work for someone who knows none of the terms, and it must appear **fast**.

## Core rule: never draw the cards yourself
The catalog (names, popularity order, Korean and English text, live previews) is prebuilt in one file:
`https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js`

When this skill runs, send only these lines to the inline visual tool (for example a "show widget" or visualizer tool). Do not read design guides, do not write card HTML.

```html
<h2 class="sr-only">[one sentence describing what is shown]</h2>
<div id="uip"></div>
<script src="https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js"></script>
<script>UIP.show('uip','[target]','[ko|en]')</script>
```

- **target**: `map` (everything) · a group id · a category id · `category.pattern` (highlights that card and jumps to its page)
- **language**: match the person. Korean → `ko` (Korean names with English alongside). Anything else → `en` (industry English terms).
- Paging (9 per page), popularity order, "Popular" tags and the "Use this ↗", "Look-alike pairs", "UI map" buttons are all handled by the library.
- Keep your text outside the widget to one or two sentences. Do not repeat the cards in text.
- No inline visual tool available (for example in a terminal)? Write the same lines into an `.html` file with `<!DOCTYPE html>` and tell the person to open it.

## Choosing the target
- No argument, "what's there", "what can you do", "everything", "I don't know the terms" → `map`
- A situation only ("what do I show while it loads?") → the single best category; if several fit, their group
- A pattern name ("skeleton", "toast") → `category.pattern`, e.g. `loading.skeleton`, `overlay.toast`. Pattern ids live in `catalog.js`; if unsure, pass just the category.

**Group ids**: `act` Actions & Selection · `input` Input & Forms · `feedback` Feedback & Status · `nav` Navigation · `display` Content Display · `data` Data Visualization · `layout` Layout & Screens · `style` Style & Motion · `ai` AI & Chat · `pairs` Look-alike pairs

**Category ids** (words to match in brackets)
- act: `button` (buttons) · `states` (button states) · `share` · `selection` (toggle, checkbox, radio, chips) · `menu` (dropdown, menus) · `date` (date, calendar, time)
- input: `text` (text fields) · `search` (search, filters) · `form` (forms, sign-up) · `upload`
- feedback: `loading` · `overlay` (popup, modal, toast, bottom sheet) · `notification` (badges, alerts) · `completion` (done states) · `state` (empty, error) · `permission`
- nav: `primary` (main nav, tab bar, sidebar) · `tabs` · `wayfinding` (pagination, back, breadcrumb)
- display: `list` · `card` · `table` · `media` (photos, video) · `people` (avatars, profiles)
- data: `chart` · `metric` (KPI, gauges) · `map`
- layout: `page` (page layouts) · `landing` (website sections) · `screens` (login, settings, checkout…)
- style: `visual` (glass, dark, neo-brutalism…) · `modern` ("make it modern") · `type` (type styles) · `textanim` (text animation) · `scroll` · `micro` (micro-interactions) · `transition`
- ai: `chat` (chat UI) · `aistate` (AI working states)
- pairs: `uipairs` · `overlaypairs` · `inputpairs` · `icons`

If nothing fits, show the closest category and offer to add the missing pattern. Never invent pattern names.

## After a pick ("UI 패턴 선택: …" / "UI pattern picked: …")
Answer in the person's language, in text (no widget), with all three parts:
1. **When to use it, and how it differs**: two or three good situations, one to avoid, and a one-line comparison with its most confusable twin (e.g. Toast fades on its own; Snackbar includes an action like Undo).
2. **A prompt to paste into an AI** (code block): the name plus its English term plus concrete properties (size, position, behaviour, timing, states). Give a short and a detailed version. Include any style the person mentioned (e.g. glassmorphism).
3. **Apply it**: if a design, codebase or artifact is in progress, offer to apply it there and do so once they agree; otherwise ask in one line which screen to apply it to.

## Do not
- Draw or generate card HTML yourself
- Repeat card contents in text
- Invent pattern names (if there is no agreed name, say so)
- Present the popularity order as measured statistics (it is a judgment call)
