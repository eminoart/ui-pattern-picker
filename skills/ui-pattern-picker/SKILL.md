---
name: ui-pattern-picker
description: >-
  Visual UI component and design pattern finder for when you don't know what a UI element is called. Shows 531 frontend UI patterns (loading spinner, skeleton, button, modal, toast, bottom sheet, tabs, side and bottom nav, slider, toggle, stepper, form input, date picker, chart, table, card, onboarding, glassmorphism, micro-interaction, AI chat UI) as live animated preview cards in Korean and English, then gives the industry name and a ready prompt to apply it. Use for UI inspiration, design vocabulary, vague requests like "make it modern", look-alike questions like "toast vs snackbar", or "I don't know the name of this UI". Triggers: "what UI is there", "what is this UI called", "show me loading options", "UI 이름을 모르겠어", "이거 뭐라고 불러", "UI 뭐가 있어", "로딩 보여줘", "팝업 종류", "토스트랑 스낵바 차이", "로딩 화면 뭘로 하지".
---

# UI Pattern Picker

Goal: replace vague words ("modern", "clean", "pretty") with the **exact name of a UI pattern**, so the person can ask an AI or a developer for precisely what they want. It must work for someone who knows none of the terms, and it must appear **fast**.

## Core rule: never draw the cards yourself
The catalog (names, popularity order, Korean and English text, live previews) is prebuilt in one file:
`https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js`

When this skill runs, send only these lines to the inline visual tool (for example a "show widget" or visualizer tool). Do not write card HTML and do not restyle these lines. If the tool requires a one-time setup call first (such as a `read_me`), make it silently, then still send only these lines.

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
- After the widget, add one short line with the web link for the same view, in case the preview does not load: `https://eminoart.github.io/ui-pattern-picker/?v=[target]&lang=[ko|en]`.
- **No inline visual tool** (ChatGPT, Codex, Cursor, a terminal)? Give that web link instead (e.g. `?v=loading&lang=ko`, `?v=overlay.toast&lang=en`) and say in one line that clicking a card's "Use this" button copies its prompt, to paste back into the chat. If the person prefers a local file, write the same widget lines into an `.html` file with `<!DOCTYPE html>` and open it in the browser (`open` / `xdg-open` / `start`).

## Choosing the target
- No argument, "what's there", "what can you do", "everything", "I don't know the terms" → `map`
- A situation only ("what do I show while it loads?", "데이터 불러오는 동안 화면이 비어 있어") → the single best category; if several fit, their group
- A pattern name ("skeleton", "toast") → `category.pattern`, e.g. `loading.skeleton`, `overlay.toast`. Pattern ids live in `catalog.js`; if unsure, pass just the category.
- "A vs B" or "what's the difference" ("토스트랑 스낵바 차이", "popup vs modal") → answer the difference in two or three sentences of text, then show the matching look-alike pair (list below), e.g. `overlaypairs.toastsnack`.

## Ids and the exact names the widget uses
Clicking a tile in the widget sends the person's message for them, using the Korean or English names below, e.g. `오버레이 창 보여줘` / `Show me Overlays`, `알리고 기다리게 하기 보여줘`, `UI 뭐가 있어`. Map those names straight to the id and show the widget again with no extra explanation.

| Group id | Korean · English | Categories: id (Korean · English) |
|---|---|---|
| `act` | 누르고 고르기 · Actions & Selection | `button` (버튼 · Button) · `btnstyle` (버튼 트렌드 · Button trends: glass, liquid glass, clay…) · `states` (버튼 상태 · Button states) · `share` (공유 · Share) · `selection` (선택 컨트롤 · Selection controls: switch, checkbox, radio, chips) · `slider` (슬라이더 · Sliders) · `toggle` (토글 스타일 · Toggle styles) · `menu` (드롭다운·메뉴 · Menus & Pickers) · `date` (날짜·시간 선택 · Date & Time) |
| `input` | 입력받기 · Input & Forms | `text` (입력창 · Text input) · `search` (검색 · Search, filters) · `form` (폼 구성 · Forms, sign-up) · `upload` (업로드 · Upload) |
| `feedback` | 알리고 기다리게 하기 · Feedback & Status | `loading` (로딩 · Loading) · `refresh` (새로고침 · Refresh: pull to refresh, new posts, load more) · `overlay` (오버레이 창 · Overlays: popup, modal, toast, bottom sheet) · `notification` (알림 · Notifications, badges) · `completion` (완료 표시 · Completion feedback) · `state` (상태 화면 · Empty & Error states) · `permission` (권한 요청 · Permissions) |
| `nav` | 이동하기 · Navigation | `primary` (메인 내비 · Primary navigation) · `sidenav` (사이드 내비 · Side navigation, drawers) · `bottomnav` (하단 내비 · Bottom navigation) · `tabs` (탭 · Tabs) · `wayfinding` (페이지 이동 · Wayfinding: pagination, back, breadcrumb) · `steps` (진행 단계 · Progress steps, stepper) |
| `display` | 보여주기 · Content Display | `list` (목록 · Lists & Grids) · `card` (카드 · Cards) · `table` (테이블 · Tables) · `media` (미디어 · Media) · `people` (사람·프로필 · People, avatars) |
| `data` | 숫자 보여주기 · Data Visualization | `chart` (차트 · Charts) · `metric` (지표 위젯 · Metric widgets, KPI, gauges) · `map` (지도 · Maps) |
| `layout` | 화면 구성 · Layout & Screens | `page` (페이지 레이아웃 · Page layouts) · `landing` (랜딩 섹션 · Landing sections) · `screens` (앱 필수 화면 · Key screens: login, settings, checkout…) · `onboard` (온보딩 방식 · Onboarding styles, coach mark, product tour) |
| `style` | 느낌·움직임 · Style & Motion | `visual` (비주얼 스타일 · Visual styles: glass, dark, neo-brutalism…) · `modern` (모던한 느낌 요소 · Modern details, "make it modern") · `type` (글자 스타일 · Typography styles) · `textanim` (텍스트 등장 · Text animation) · `scroll` (스크롤 모션 · Scroll motion) · `micro` (마이크로인터랙션 · Micro-interactions) · `transition` (화면 전환 · Screen transitions) |
| `ai` | AI·대화 · AI & Chat | `chat` (채팅 UI · Chat UI) · `aistate` (AI 작업 표시 · AI states) |
| `pairs` | 헷갈리는 짝 · Look-alike pairs | `uipairs` (UI 짝 · UI pairs) · `overlaypairs` (창·알림 짝 · Overlay pairs) · `inputpairs` (입력창 짝 · Input pairs) · `icons` (아이콘 짝 · Icon pairs) |

**Look-alike pairs** (pattern ids, for "A vs B" questions and for `[category] 헷갈리는 짝 보여줘` / `Show look-alike [category] pairs`)
- `uipairs`: `dropdown` dropdown vs select · `buttonlink` button vs link · `cardlist` card vs list · `bars` app bar vs tab bar · `bannerpopup` banner vs popup · `fabicon` FAB vs icon button · `avatarthumb` avatar vs thumbnail · `carousel` carousel vs horizontal scroll · `paging` pagination vs infinite scroll · `floating` floating vs sticky · `accordion` accordion vs "more"
- `overlaypairs`: `popupmodal` popup vs modal · `toastsnack` toast vs snackbar · `alertconfirm` alert vs confirm · `sheetdrawer` bottom sheet vs drawer · `tooltippopover` tooltip vs popover · `badgedot` badge vs dot · `bannerpush` banner vs push · `onboardcoach` onboarding vs coach mark · `dimblur` dim vs blur · `alerttoast` alert vs toast
- `inputpairs`: `placeholder` placeholder vs label · `helper` helper vs error text · `textarea` single vs multi-line · `auto` autocomplete vs suggestions · `otp` password vs code · `clearshow` clear vs show · `counter` counter vs limit · `numpad` number pad vs keyboard · `date` date input vs date picker · `required` required vs optional
- `icons`: `hamburger` hamburger vs kebab · `kebab` kebab vs meatballs · `closeback` close vs back · `heartbookmark` heart vs bookmark · `shareexport` share vs export · `filtersort` filter vs sort · `searchzoom` search vs zoom · `refreshundo` refresh vs undo · `editcompose` edit vs compose

For "[category] look-alike pairs": overlay, notification, permission, onboard → `overlaypairs`; text, search, form, date → `inputpairs`; anything about icons → `icons`; everything else → `uipairs`.

If nothing fits, show the closest category and offer to add the missing pattern. Never invent pattern names.

## After a pick ("UI 패턴 선택: …" / "UI pattern picked: …")
The message looks like `UI 패턴 선택: 토스트 (Toast) — 알리고 기다리게 하기 › 오버레이 창`. Answer in the person's language, in text (no widget), with all three parts:
1. **When to use it, and how it differs**: two or three good situations, one to avoid, and a one-line comparison with its most confusable twin (e.g. Toast fades on its own; Snackbar includes an action like Undo).
2. **A prompt to paste into an AI** (code block): the name plus its English term plus concrete properties (size, position, behaviour, timing, states). Give a short and a detailed version. Include any style the person mentioned (e.g. glassmorphism).
3. **Apply it**: if a design, codebase, page or artifact is in progress in this conversation, offer to apply it there and do so once they agree; otherwise ask in one line which screen to apply it to.

If several picks arrive in a row, treat them as one set: answer each briefly, then give one combined prompt.

## Do not
- Draw or generate card HTML yourself
- Repeat card contents in text
- Explain at length after a navigation click (`… 보여줘` / `Show me …`); just show the next view
- Invent pattern names (if there is no agreed name, say so)
- Present the popularity order as measured statistics (it is a judgment call)
