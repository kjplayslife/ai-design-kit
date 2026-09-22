# Pick Your Grays

Pick one dark gray (or one white). Get the whole neutral scale, the job assignments for both modes, twelve contrast checks, and a `globals.css` snippet you can paste. No build step; open [index.html](index.html) in a browser.

## What it does

1. **Start from one color.** Your dark page background (950) or your light-mode "white" (50). Either way you set a hue, a saturation, and a lightness. Paste your brand hex and the tool suggests the hue.
2. **Builds the 11-step scale** using the lightness ladder from the rules. Same hue, same saturation, only lightness changes. Runs the neighbor test.
3. **Assigns jobs** for dark and light mode, mirroring the jobs, not the hexes.
4. **Checks contrast** on all 12 text and border pairs, live, and tells you which step to move if one fails.
5. **Shows real examples** from Vercel, GitHub, Discord, Notion, Apple, and Material so you can see what "tinted gray" looks like in the wild. Click one to use it as a starting point.
6. **Exports** CSS variables for `globals.css`, a Tailwind v4 `@theme` block, JSON, and a filled-in prompt for your AI agent.

The tool re-themes itself with the grays you pick, so you see them in a real layout while you work.

## Files

| File | What |
|---|---|
| [index.html](index.html) | The picker. Single file, vanilla JS, no dependencies. |
| [examples/examples.js](examples/examples.js) | The real-world palettes. Add yours here. |
| [RULES.md](RULES.md) | The six rules as text. Attach this to an AI chat. |
| [PROMPT.md](PROMPT.md) | A prompt that has an agent pick and wire up grays for you. |
| [Pick-Your-Grays.pdf](Pick-Your-Grays.pdf) | The original one-page guide. |

## Adding an example

Open `examples/examples.js`, copy a block, and fill in five hexes for dark (page, card, border, secondary text, text) and optionally five for light (page, muted, border, secondary text, text). Sample them from the live site with a color picker. Close is fine.
