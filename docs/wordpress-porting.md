# WordPress porting guide (Version 1 and Version 2)

Both designs are built so that every animation and interaction is plain **HTML + CSS + one vanilla-JS file**.
No React-only library (Motion for React, Radix, framer) is used anywhere in the page code, and none are installed.
The same two files drive both versions.

## The portable kit (copy these two files into the theme unchanged)

| File | Purpose |
|---|---|
| `public/motion/motion.css` | Keyframes, reveal states, accordion / menu / tabs / carousel styling, reduced-motion rules. |
| `public/motion/motion.js`  | About 4 KB, no dependencies. Reads `data-*` attributes and watches the DOM for new markup. |

WordPress:
```php
wp_enqueue_style('tanot-motion',  get_theme_file_uri('assets/motion.css'));
wp_enqueue_script('tanot-motion', get_theme_file_uri('assets/motion.js'), [], null, ['strategy' => 'defer']);
```
Version 2 additionally wraps pages in an element with class `v2` (its palette scope; see the end of `src/app/globals.css`).

## Behaviour -> markup contract

| Effect | Markup the theme needs | Driven by |
|---|---|---|
| Scroll reveal | `data-reveal` (optional `style="--m-delay:.1s;--m-y:24px"`) | motion.js adds `.is-in`, CSS animates |
| Staggered cards | parent `data-stagger="0.08"`, children `data-stagger-item` | motion.js sets per-item delay |
| Count-up numbers | `<span data-count="6200" data-count-prefix="" data-count-suffix="+" data-count-decimals="0">` | motion.js |
| Hero entrance | `data-rise` (`data-rise="card"` for the form card), headline words as `<span data-word-wrap><span data-word style="--m-delay:.2s">` | CSS only |
| SVG line drawing / pop-in (V2) | `<path pathLength="1" class="m-draw">`, `class="m-pop"`, `class="m-fade"` + `--m-delay` | CSS only |
| Accordions / FAQ | `<details data-acc data-acc-group="faq">` + `<summary>` | native, smoothed by motion.js |
| Services tabs (V1) | `[data-tabs]` > `[role=tablist]` > `button[role=tab][data-tab]` + `[data-pill]`; panels `[data-panel]` | motion.js (click, arrow keys, sliding highlight) |
| Header on scroll | `<header data-header>` styled with `data-[scrolled]:` / `group-data-[scrolled]:` | motion.js sets `data-scrolled` |
| Sliding nav hover pill (V1) | `ul[data-nav]` > `li[data-nav-item]` + `span[data-pill]` | motion.js |
| Mobile menu | button `data-menu-open`, panel `data-menu="drawer"` (V1) or `"circle"` (V2) with `data-menu-overlay`, `data-menu-panel`, `data-menu-close`, `data-menu-item` | CSS + motion.js (Esc, overlay click, link click) |
| Dropdown nav | pure CSS (`group-hover` / `focus-within`) | CSS only |
| Image carousel | `[data-carousel]` > `[data-carousel-track]` + `[data-carousel-prev]` / `-next` | motion.js |
| Click-to-load video | wrapper `data-video-src`, button `data-video-play` | motion.js |
| Click-to-load Calendly | wrapper `data-embed-src`, button `data-embed-load` | motion.js |
| Reduced motion | automatic (`prefers-reduced-motion`) | CSS + JS |

Everything else (hover lifts, image zoom, arrow slide, button states) is ordinary CSS transitions.

## The one part that is not the same in WordPress

* **Lead form.** The mockup's `LeadForm` is a React component (validation, then opens a mail draft). In WordPress use a form
  plugin (WPForms / Fluent Forms) styled with the same classes. It is a content feature, not an animation.

## Other WordPress notes

* **Fonts:** V1 uses Inter + Plus Jakarta Sans; V2 uses DM Sans + Fraunces (variable, `opsz` + `SOFT` axes). Self-host them.
* **Tokens:** V1 colors are the `@theme` block in `src/app/globals.css`; V2 overrides them in the `.v2 { ... }` block.
* **Content:** posts and case studies are structured JSON in `src/data/`, ready to import as custom post types.
