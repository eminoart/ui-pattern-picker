# UI Pattern Picker

**English** · [한국어](README.ko.md)

Ever asked an AI to "make it look modern" and got something generic? Most of the time the problem is the vocabulary: you know what you want when you see it, but not what it is called.

UI Pattern Picker is a catalog of **439 UI patterns**, each with a small **live preview** you can click, type into or watch move. Names come in **Korean and English**, using the terms designers and developers actually use, and every list is ordered by how commonly the pattern is used.

## Quick start

Drop these lines into any HTML page (or an AI chat widget that runs HTML):

```html
<div id="uip"></div>
<script src="https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js"></script>
<script>UIP.show('uip', 'map', 'en')</script>
```

`UIP.show(elementId, target, lang)`

| Argument | Values |
|---|---|
| `target` | `map` (everything) · a group id · a category id · `category.pattern` to highlight one card, e.g. `loading.skeleton` |
| `lang` | `en` (English terms) or `ko` (Korean names with English alongside) |

## How it is organized

Three levels, each shown as a grid of cards, 9 per page:

1. **Groups (10)**: what you want to do, in plain words
2. **Categories (42)**: the real term, such as Loading or Overlays
3. **Patterns (439)**: each with a live preview and a short "when to use" hint

Clicking **Use this** on a card sends a message such as `UI pattern picked: Skeleton — Feedback & Status › Loading` to the host chat (through `sendPrompt`), so an assistant can explain when to use it and write a ready-to-paste prompt. Outside a chat, the message is copied to the clipboard instead.

| Group | Categories |
|---|---|
| `act` Actions & Selection | `button` Button · `states` Button states · `share` Share · `selection` Selection controls · `menu` Menus & Pickers · `date` Date & Time |
| `input` Input & Forms | `text` Text input · `search` Search · `form` Forms · `upload` Upload |
| `feedback` Feedback & Status | `loading` Loading · `overlay` Overlays · `notification` Notifications · `completion` Completion feedback · `state` Empty & Error states · `permission` Permissions |
| `nav` Navigation | `primary` Primary navigation · `tabs` Tabs · `wayfinding` Wayfinding |
| `display` Content Display | `list` Lists & Grids · `card` Cards · `table` Tables · `media` Media · `people` People |
| `data` Data Visualization | `chart` Charts · `metric` Metric widgets · `map` Maps |
| `layout` Layout & Screens | `page` Page layouts · `landing` Landing sections · `screens` Key screens |
| `style` Style & Motion | `visual` Visual styles · `modern` Modern details · `type` Typography styles · `textanim` Text animation · `scroll` Scroll motion · `micro` Micro-interactions · `transition` Screen transitions |
| `ai` AI & Chat | `chat` Chat UI · `aistate` AI states |
| `pairs` Look-alike pairs | `uipairs` UI pairs · `overlaypairs` Overlay pairs · `inputpairs` Input pairs · `icons` Icon pairs |

The order reflects how commonly each pattern appears in widely used apps and design systems. It is a judgment call, not measured data.

## Files

| File | What it holds |
|---|---|
| `catalog.js` | Every name and the order. One pattern is one line segment: `id~Korean~English~Korean hint~English hint` |
| `demos.js`, `demos-1.js` … `demos-5.js` | The live previews, keyed by `category.pattern` |
| `demos-h.js` | Small shared helpers for previews |
| `core.js` | Rendering, paging, styles and interactions |
| `uip.js` | **The built file the CDN serves.** Do not edit by hand |
| `build.sh` | Rebuilds `uip.js` and checks every preview runs |

## Updating

1. Add or reorder names in `catalog.js`. The position in the list is the popularity rank.
2. Add a preview to one of the `demos-*.js` files:
   ```js
   D['loading.skeleton'] = t => `<div class="uip-sk" ...>${t('한국어 문구', 'English text')}</div>`;
   ```
   Use the `--uip-*` colour variables so previews follow light and dark mode. A card with no preview shows "Preview coming soon".
3. Run `./build.sh`, then commit and push.

jsDelivr caches `@main` for up to 12 hours. To see a change immediately, load a specific commit instead: `@<commit-hash>`.

## License

MIT
