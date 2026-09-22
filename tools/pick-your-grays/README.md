# Pick Your Grays

Pick one dark gray (or one white). Get the whole neutral scale, the job assignments for both modes, twelve contrast checks, and a `globals.css` snippet you can paste. No build step; use it live at [kjplayslife.github.io/ai-design-kit/tools/pick-your-grays/](https://kjplayslife.github.io/ai-design-kit/tools/pick-your-grays/) or open [index.html](index.html) in a browser.

## What it does

Dark mode first, then light mode is generated from it.

1. **Start from a palette you like.** Dark-mode grays from popular apps (Claude, Claude Code Docs, Vercel, xAI, Supabase, Lovable, GitHub, Discord, Notion, Apple, Material), sampled from screenshots, plus the full 11-step zinc, slate, stone, and Geist scales. Click one to load its page color.
2. **Dial in your dark gray.** Hue, saturation, page lightness (950), and text lightness (50). Live rule checks: not black, 3–10% saturation, text not pure white, hue matches your brand.
3. **Pick one brand color, for dark.** Sliders plus a dropdown of popular app accents. Checks that text passes on the button, that it reads as a link on the page, and warns on red and on yellow or lime. Low-saturation brands become a neutral brand (white button on dark, black on light).
4. **Your scale.** Eleven steps from the lightness ladder, with the neighbor test.
5. **Dark mode, checked.** Jobs table, six contrast pairs, and a preview card.
6. **Light mode, generated.** A separate section rendered in light. Brand is derived darker so white text passes; you can nudge it, and switch secondary text (500/600), borders (200/300), and muted fills (100/50). Jobs, six contrast pairs, preview, and the light palettes from popular apps for reference.
7. **Export** CSS variables for `globals.css`, a Tailwind v4 `@theme` block, JSON, and a filled-in prompt for your AI agent. Share links encode every setting.

The page re-themes itself with what you pick: the top half in your dark mode, the light section in your light mode.

## Files

| File | What |
|---|---|
| [index.html](index.html) | The picker. Single file, vanilla JS, no dependencies. |
| [examples/examples.js](examples/examples.js) | The real-world palettes. Add yours here. |
| [RULES.md](RULES.md) | The six rules as text. Attach this to an AI chat. |
| [PROMPT.md](PROMPT.md) | A prompt that has an agent pick and wire up grays for you. |
| [Pick-Your-Grays.pdf](Pick-Your-Grays.pdf) | The original one-page guide. |

## Adding an example

Open `examples/examples.js`, copy a block, and fill in five hexes for dark (page, card, border, secondary text, text) and optionally five for light (page, muted, border, secondary text, text). Add a `brand` block with the accent hex and a note on how the site uses it. Sample them from a screenshot with a color picker. Close is fine. The screenshots behind the current examples are in [grey examples from popular sites](../../grey%20examples%20from%20popular%20sites/).
