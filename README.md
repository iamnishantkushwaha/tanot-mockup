# Tanot Solutions: website mockup

Design mockups for [tanotsolutions.com](https://tanotsolutions.com), built with Next.js (App Router), TypeScript and Tailwind CSS.
All copy, images and structure come from the live site; nothing is invented.

| Version | Routes | Look |
|---|---|---|
| **V1** | `/`, `/about`, `/case-studies`, `/blog`, ... | Blue / navy, Plus Jakarta Sans + Inter |
| **V2** | `/v2`, `/v2/about`, `/v2/case-studies`, `/v2/blog`, ... | Forest green + lime on cream, Fraunces + DM Sans, custom SVG graphics |

Pages: Home, About, Case Studies (+6 detail pages), Client Reviews, Link Building, Featured In, Contact, Book a Call,
Blog (62 articles, 7 pages), Privacy Policy, Terms of Service.

## Run

```bash
npm install
npm run dev      # http://localhost:3000   (V2 at /v2)
npm run build    # production build (179 static pages)
npm run lint
```

## Built to be WordPress-portable

Every animation and interaction is plain HTML + CSS + one vanilla-JS file (`public/motion/motion.css`, `public/motion/motion.js`),
shared by both versions. No React-only animation or UI library is used.
See [`docs/wordpress-porting.md`](docs/wordpress-porting.md) for the markup contract and notes.
The only React-specific piece is the lead form, which would be a form plugin in WordPress.

## Layout

```
src/app/(v1)/        V1 pages          src/app/v2/       V2 pages
src/components/      shared + v2/ UI   src/data/         posts.json, cases.json (scraped content)
src/lib/             site config, content, page data
public/images/       downloaded site images     public/motion/   the portable motion kit
reference/           research notes (scrape output)
```

## Notes

* Forms have no backend: they validate, then open a mail draft addressed to info@tanotsolutions.com.
* Team photos are not available on the source site, so initials are shown.
* V2 is marked `noindex`.
