# Prompt: have an AI agent build your design system

The [starter](index.html) generates a complete, computed prompt on page 3. Prefer that: every hex, every size, and every contrast check is already done. Use the template below only when you want the agent to do the math itself from your three picks. Fill the brackets and attach `RULES.md`.

---

```
Read RULES.md (Design Starter) and follow every rule in it.

My primary color is [#hex]. My gray tint is [from primary / pure / zinc / slate /
stone / like <app> / from #hex]. My font is [Inter / Geist / … / System]. My
ratio is [1.2 / 1.25 / 1.333], heading weight [600 / 700]. Corners are
[sharp 4px / soft 8px / round 12px]. I'm building with [plain HTML + CSS /
React + Tailwind v4 + shadcn].

Do this, in order:

1. Colors. Build the primary scale (11 steps, OKLCH, my hex kept at its nearest
   step) and the neutral scale (fixed lightness ladder, hue from my gray tint,
   chroma never above 0.02). Use the fixed status scales: success #16a34a,
   warning #f59e0b, error #dc2626, info #2563eb. Assign jobs for light and dark
   as RULES.md lists them. Pick the button color by contrast (white text if it
   passes 4.5:1, one step darker if that is all it takes, otherwise my color
   with dark text) and a separate link color that passes 4.5:1 on the page in
   each mode. Check every text pair at 4.5:1 in both modes.

2. Type. Body 16px. h6 = 16 × ratio, up to h1, each rounded to the nearest
   multiple of 4. Body sizes 18, 16, 14, 12. Line height 1.2 headings, 1.5
   body, 1.4 caption. Tracking −0.02em at 32px+, −0.01em at 24px+, else 0.
   Mobile: h1, h2, h3 each take the next size down under 640px.

3. Shape. radius-sm = md − 4, radius-md = my pick, radius-lg = md + 4.
   Spacing is multiples of 4. Borders 1px. Shadows only on light cards.

4. Write everything into [styles.css / globals.css] using the shadcn token
   names plus --link, the status tokens (-foreground, -soft,
   -soft-foreground, -text), --font-sans, --text-h1 … --text-caption, and the
   three radius tokens. In Tailwind, put `--color-*: initial;` first in the
   @theme inline block and map every token; move --text-xs … --text-6xl onto
   the scale; set --radius.

5. Apply the base rules: html gets the font; body gets background, foreground,
   text-body at 1.5; headings get 1.2 and the heading weight; p gets 65ch;
   a gets the link color; tables get tabular numbers.

6. Grep the app for anything that isn't a token: raw colors, palette classes,
   sizes in px, arbitrary values, wrong weights, off-grid spacing, off-token
   radii. Fix every hit. Report the scales, the job table for both modes, the
   type table, the contrast results, and the lines you changed.
```

---

## Follow-up prompts

| When | Say |
|---|---|
| A stray hex or `bg-zinc-*` appears | "Rule 1: only job tokens. Map it to background, card, muted, or muted-foreground, or tell me which job is missing." |
| Buttons are everywhere in the primary color | "Rule 3: one primary action per screen. Secondary buttons use bg-secondary, tertiary are text-only." |
| Green or red used as decoration | "Rule 4: status colors mean status. Use neutral tokens or the primary." |
| It reached for primary-300 | "Rule 6: no scale steps in components. Which job is this? Use that token or ask for a new one." |
| A second font showed up | "Rule 7: one family. Remove the second font and its link tag." |
| Body text is 14px, or a heading is 30px | "Rule 8: body is 16px; headings come from the scale rounded to 4px. Use the type tokens." |
| Labels are bold or uppercase | "Rule 10: labels and buttons are 14px at 500. Only eyebrows are uppercase." |
| Padding is 10px or gap is 5 | "Rule 13: spacing is a multiple of 4. Use 8 or 12." |
| Cards have a big shadow or a glow | "Rule 14: shadow-sm on light cards only, none on dark. Depth is card-on-page plus a border." |
| Corners are inconsistent | "Rule 13: rounded-md on controls, rounded-lg on cards, rounded-full on badges. Nothing else." |
