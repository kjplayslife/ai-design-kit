# Pick Your Type — the rules

How to choose one font, build a type scale from one ratio, and keep every size in the app on it. Eight rules. The [picker](index.html) enforces every one.

**Why one ratio?** Random sizes (15, 17, 22, 30) are the fastest way to make an app look homemade. A ratio makes every jump between sizes the same, so the hierarchy reads as intentional even when nobody can say why.

## Step 1 · Pick the font

**Rule 1 · One family.** Headings and body use the same font. Headings are just heavier. Pairing two fonts is a skill; until you have it, don't. Monospace is allowed for code and nothing else.

Pick from the nine in the picker or type any Google Font name. Stay with sans-serif for app UI. Serif and display faces are for marketing headlines, which is a separate decision.

| If you want… | Pick |
|---|---|
| To not think about it | Inter, or System |
| Cleaner and more technical | Geist |
| Friendly, consumer | DM Sans, Figtree |
| Some personality | Manrope, Plus Jakarta Sans |
| Docs, data, dashboards | IBM Plex Sans, Source Sans 3 |

## Step 2 · Pick the ratio

**Rule 2 · Body is 16px.** Fixed. It is the size where you never have to check accessibility. 14px can fail depending on the font and weight; 16 never does.

**Rule 3 · Headings grow by one ratio, rounded to 4px.** Each heading is the one below it times the ratio, starting from 16. Round every result to the nearest multiple of 4 so nothing lands on a decimal and everything lines up with an 8px layout grid.

| Ratio | Name | Use it for | h6 → h1 |
|---|---|---|---|
| 1.2 | Minor third | Dense apps, dashboards, tools | 20, 24, 28, 32, 40, 48 |
| 1.25 | Major third | Most apps and sites (default) | 20, 24, 32, 40, 48, 60 |
| 1.333 | Perfect fourth | Marketing and landing pages | 20, 28, 36, 52, 68, 88 |

Body sizes don't come from the ratio. They are fixed: body-lg 18, body 16, body-sm 14, caption 12.

## Step 3 · The scale

| Role | Size | Line height | Weight | Tracking | Used for |
|---|---|---|---|---|---|
| h1 | ratio⁶ | 1.2 | 600 | −0.02em | Hero and page titles on marketing pages |
| h2 | ratio⁵ | 1.2 | 600 | −0.02em | Page title inside the app |
| h3 | ratio⁴ | 1.2 | 600 | −0.02em at 32+, else −0.01em | Section titles, dialog titles |
| h4 | ratio³ | 1.2 | 600 | −0.01em at 24+ | Card titles |
| h5 | ratio² | 1.2 | 600 | −0.01em at 24+ | Small headings, table titles |
| h6 | ratio¹ | 1.2 | 600 | 0 | Group labels, sidebar sections |
| body-lg | 18 | 1.5 | 400 | 0 | Intro paragraphs, empty states |
| body | 16 | 1.5 | 400 | 0 | Paragraphs, inputs, list items |
| body-sm | 14 | 1.5 | 400 / 500 | 0 | Labels, buttons, table cells, nav |
| caption | 12 | 1.4 | 400 / 500 | 0 / +0.08em | Helper text, timestamps, eyebrows |

**Rule 4 · Headings are 1.2, body is 1.5.** Tight line height on headings keeps multi-line titles together. Loose line height on body makes paragraphs readable. Never tighten tracking on body text; negative tracking is for headings 24px and up only.

**Rule 5 · Labels, buttons, tabs, and table headers are body-sm at weight 500.** Not bold. Not uppercase. The only uppercase text in the app is an eyebrow: caption size, weight 500, +0.08em.

**Rule 6 · Nothing under 12px, and paragraphs max 65ch.** Helper and legal text is caption. Lines longer than about 75 characters are hard to track back to the next line.

**Rule 7 · Hierarchy comes from size and weight, never from color alone.** Secondary text uses the muted text color at the same size, not a smaller size. If something needs to be quieter, change its color; if it needs to be less important, change its size. Not both by accident.

**Rule 8 · Numbers in columns are tabular.** Most fonts give each digit its own width, so a 1 is narrower than a 0 and stacked numbers wobble. Tabular figures make every digit the same width. Use them on anything that sits in a column or changes over time: prices, dates, counts, stats, timers. Tables get it by default. In CSS it is `font-variant-numeric: tabular-nums`; in Tailwind it is `tabular-nums`. AI-built dashboards almost never do this, and it is the difference between a table that looks like a spreadsheet and one that looks like a product.

## Step 4 · Mobile

Under 640px, h1, h2, and h3 each drop one step: h1 takes h2's size, h2 takes h3's, h3 takes h4's. Nothing else changes. Body text is already the right size on a phone.

## The eight rules, one line each

1. One font family. Headings are the same font, heavier.
2. Body is 16px.
3. Headings grow by one ratio, rounded to 4px.
4. Headings 1.2, body 1.5.
5. Labels and buttons are 14px at 500. Eyebrows are the only uppercase.
6. Nothing under 12px. Paragraphs max 65ch.
7. Hierarchy from size and weight, not color alone.
8. Numbers in columns are tabular.
