# UI Pattern Picker

A bilingual (Korean / English) catalog of 439 UI patterns with live mini previews, ordered by how commonly each is used.

```html
<div id="uip"></div>
<script src="https://cdn.jsdelivr.net/gh/eminoart/ui-pattern-picker@main/uip.js"></script>
<script>UIP.show('uip', 'map', 'ko')</script>
```

`target`: `map` · a group id · a category id (`loading`) · `category.item` (`loading.skeleton`)  
`lang`: `ko` | `en`

Edit `catalog.js` (names and order) or `demos.js` (previews), then rebuild:

```sh
cat catalog.js demos.js core.js > uip.js
```
