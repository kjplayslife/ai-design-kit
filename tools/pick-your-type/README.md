# Pick Your Type

Pick one font and one ratio. Get a heading scale on the 4px grid, four body sizes, line heights, weights, a mobile version, and a prompt that wires it into your app. No build step; use it live at [kjplayslife.github.io/ai-design-kit/tools/pick-your-type/](https://kjplayslife.github.io/ai-design-kit/tools/pick-your-type/) or open [index.html](index.html) in a browser.

## What it does

No steps. One screen: pick, look, copy.

1. **Font and ratio.** Nine safe sans-serifs rendered live in two rows (Inter, Geist, DM Sans, Manrope, Plus Jakarta Sans, Figtree, IBM Plex Sans, Source Sans 3, System), or type any Google Fonts name. Body is fixed at 16px. Three ratios labelled by what they are for: 1.2 for dense apps, 1.25 for most things, 1.333 for marketing pages. Heading weight 600 or 700. A warning appears only when something is off, like an h1 too big for an app screen.
2. **In context.** Right under the controls, without scrolling: the same settings screen at desktop and phone width in a light band, so you can click fonts and see what they look like in a real layout. On phones h1, h2, h3 each drop one step.
3. **Your scale.** Ten sizes across the full width: six headings from the ratio, rounded to the nearest 4px, plus body-lg 18, body 16, body-sm 14, caption 12. Each row shows the numbers that go in the code and the text rendered in your font at that size, with what it is used for.
4. **Prompt for your agent.** One output: a prompt with the font, the Google Fonts link, every size, the eight rules, and exact instructions for where to put them. A switch picks the stack: plain HTML + CSS (custom properties and element rules) or React + Tailwind v4 + shadcn (theme variables, with Tailwind's own sizes moved onto the scale so shadcn components stay on grid). Share links encode every setting.

## Files

| File | What |
|---|---|
| [index.html](index.html) | The picker. Single file, vanilla JS, no dependencies beyond Google Fonts for the previews. |
| [RULES.md](RULES.md) | The eight rules as text. Attach this to an AI chat. |
| [PROMPT.md](PROMPT.md) | A prompt that has an agent build and wire up the scale for you. |

## Decisions baked in

- Body is 16px and not adjustable. Under 16 you have to start checking accessibility per font. 16 never fails.
- Headings round to 4px, body sizes step by 2 (18, 16, 14, 12). A pure 4px grid would lose 14, which every UI needs.
- Headings use line height 1.2, body 1.5. Tracking goes negative only on headings 24px and up.
- Mobile only touches h1 to h3. Body text is already the right size on a phone.
