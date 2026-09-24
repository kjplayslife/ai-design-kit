# Pick Your Colors

Pick one primary color and one gray. Get both 11-step scales, fixed status colors, every light and dark token with contrast checked, and a prompt that wires it into your app. No build step; use it live at [kjplayslife.github.io/ai-design-kit/tools/pick-your-colors/](https://kjplayslife.github.io/ai-design-kit/tools/pick-your-colors/) or open [index.html](index.html) in a browser.

This is the simple replacement for [Pick Your Grays](../pick-your-grays/). Same rules, two decisions instead of twelve.

## What it does

No steps. One screen: pick, look, copy.

1. **Primary and gray.** A color picker and hex field for the primary, with one-click swatches of real app brand colors (Claude, Vercel, xAI, Supabase, Lovable, GitHub, Discord, Notion, Apple, Material). For the gray, pick where the tint comes from: your primary, pure, zinc / slate / stone, one of the same apps, or any dark hex. Only the tint is used; the lightness ladder is fixed. A warning appears only when something needs saying, like a red-orange primary that will read as an error color.
2. **In context.** Right under the controls: the same settings screen in light and dark, built entirely from the generated tokens. Primary button, secondary button, link, muted row, input, helper text, a destructive action, and the four status badges.
3. **Your scales.** Primary, neutral, and the four status scales across the full width, 11 steps each. The outlined step is the color you picked.
4. **Prompt for your agent.** One output: both scales, the fixed status scales, a jobs table for light and dark, the contrast results, seven rules, and exact instructions for where the tokens go. A switch picks the stack: plain HTML + CSS (custom properties with a data-theme toggle) or React + Tailwind v4 + shadcn (globals.css tokens, and `--color-*: initial` in the theme block so the built-in palette stops existing). Share links encode every setting.

## The math

- Scales are built in OKLCH, so each step looks the same distance from the next regardless of hue. Colors that fall outside what screens can show are pulled back in by reducing chroma, never by shifting hue.
- The primary keeps your exact hex at its nearest step; the other ten are generated around it.
- The neutral uses a fixed lightness ladder (roughly Tailwind zinc) and takes only hue and a whisper of chroma from your pick, capped at 0.02 so it never reads as a color. Chroma tapers toward white so light steps stay clean.
- The primary button color is chosen by contrast: your color if white text passes 4.5:1, one step darker if that is all it takes, otherwise your color with dark text. Dark mode checks the button also stands out from the page.
- Links get their own token. A button fill only needs its text to pass; a link is text and needs 4.5:1 against the page, which on dark means a lighter step than the button.
- Secondary text on light is the 500 step, checked against both white and the muted fill.
- Every text pair is checked at 4.5:1 in both modes; borders at 1.2:1.

## Files

| File | What |
|---|---|
| [index.html](index.html) | The picker. Single file, vanilla JS, no dependencies. |
| [RULES.md](RULES.md) | The seven rules as text. Attach this to an AI chat. |
| [PROMPT.md](PROMPT.md) | A prompt that has an agent build and wire up the colors for you. |

## Decisions baked in

- Status colors are fixed. Red means error everywhere; nothing to decide.
- The neutral scale's lightness never changes with your pick. A lifted gray like Discord's still contributes only its tint, so the jobs stay consistent across everyone's projects.
- Light mode page and cards are white. Depth comes from border and shadow, not a tinted page.
