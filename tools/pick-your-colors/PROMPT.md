# Prompt: have an AI agent set up your colors

Use this when you want the agent to do the whole thing, or when you already picked your primary and gray in the [picker](index.html) and want them wired into a project. Paste the block below, fill the brackets, and attach `RULES.md`.

The picker's **Export** box generates a filled-in version of this automatically, with every hex already computed for your stack. Prefer that: the math is done and checked.

---

```
Read RULES.md (Pick Your Colors) and follow every rule in it.

My primary color is [#hex]. My gray tint is [from primary / pure / zinc / slate /
stone / like <app> / from #hex]. I'm building with [plain HTML + CSS /
React + Tailwind v4 + shadcn].

Do this, in order:

1. Build the primary scale: 11 steps (50 to 950) in OKLCH, keeping my hue,
   with lightness stepping evenly and chroma highest around 500 and lower at
   both ends. Keep my exact hex at its nearest step. Show all 11.

2. Build the neutral scale: 11 steps on the lightness ladder in RULES.md,
   hue from my gray tint, chroma tiny (never above 0.02 in OKLCH) so no step
   reads as a color. Show all 11.

3. Use the fixed status scales: success #16a34a, warning #f59e0b, error
   #dc2626, info #2563eb, each built the same way as the primary.

4. Assign jobs for light and dark exactly as RULES.md lists them. Pick the
   primary button color: my color if white text passes 4.5:1 on it, one step
   darker if that is all it takes, otherwise my color with dark text. Pick a
   separate link color per mode that passes 4.5:1 against the page.

5. Check every text pair at 4.5:1 in both modes (main and secondary text on
   page and card, text on the primary button, primary as a link on the page,
   each status text on the page, each status soft pair). If one fails, move
   one step and tell me which.

6. Write the tokens into [styles.css / globals.css] under :root (light) and
   [data-theme="dark" / .dark] using the shadcn names: --background,
   --foreground, --card, --card-foreground, --popover, --popover-foreground,
   --primary, --primary-foreground, --link, --secondary, --secondary-foreground,
   --muted, --muted-foreground, --accent, --accent-foreground, --destructive,
   --destructive-foreground, --border, --input, --ring, plus --success,
   --warning, --info (each with -foreground), and --success-soft,
   --warning-soft, --error-soft, --info-soft (each with -foreground) and
   --success-text, --warning-text, --error-text, --info-text.
   In Tailwind, put `--color-*: initial;` first in the @theme inline block
   and map every token to a --color-* variable.

7. Grep the app for any color that isn't a token (hex, rgb(), hsl(),
   oklch(), palette classes, inline style colors). Fix every hit. Report the
   two scales, the job table for both modes, the contrast results, and the
   lines you changed.
```

---

## Follow-up prompts

| When | Say |
|---|---|
| It used pure black or white | "Rule 2: page is the 950 step, text is the 50 step. Replace #000 and #fff text with the tokens." |
| Buttons are everywhere in the primary color | "Rule 1: one primary action per screen. Secondary buttons use bg-secondary, tertiary are text-only." |
| It used green or red as decoration | "Rule 4: status colors mean status. Use the neutral tokens or the primary." |
| It used bg-zinc-900 or text-gray-500 | "Rule 5: only job tokens. Map it to background, card, muted, or muted-foreground. If none fits, tell me and we add a token." |
| It reached for primary-300 | "Rule 7: no scale steps in components. Which job is this? Use that token or ask for a new one." |
| Cards look flat in dark mode | "Card is 900 on a 950 page with an 800 border. No shadow on dark." |
| Helper text looks faint in light mode | "Secondary text on light is the 500 step, checked against both white and the muted fill. Re-check the contrast pair." |
| Text on the primary button is the primary color | "Rule 6: text on a fill is that fill's foreground token, never the color on itself." |
