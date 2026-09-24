# Prompt: have an AI agent set up your typography

Use this when you want the agent to do the whole thing, or when you already picked your font and ratio in the [picker](index.html) and want them wired into a project. Paste the block below, fill the brackets, and attach `RULES.md`.

The picker's **Export** box generates a filled-in version of this automatically, with every size already computed for your stack.

---

```
Read RULES.md (Pick Your Type) and follow every rule in it.

My font is [Inter / Geist / DM Sans / … / System]. My ratio is [1.2 / 1.25 / 1.333].
Heading weight is [600 / 700]. I'm building with [plain HTML + CSS / React + Tailwind v4 + shadcn].

Do this, in order:

1. Build the scale. Body is 16px. h6 = 16 × ratio, h5 = h6 × ratio, and so on
   up to h1. Round every heading to the nearest multiple of 4. Body sizes are
   fixed: body-lg 18, body 16, body-sm 14, caption 12. Show me the ten sizes
   in a table with line height (1.2 headings, 1.5 body, 1.4 caption), weight,
   and tracking (−0.02em at 32px+, −0.01em at 24px+, else 0).

2. Add the mobile column: under 640px, h1, h2, h3 each take the next size
   down. Nothing else changes.

3. Load the font. Google Fonts link tag with weights 400, 500, and the heading
   weight. If it's System, load nothing.

4. Write the tokens into [styles.css / globals.css] using the names
   --font-sans and --text-h1 … --text-h6, --text-body-lg, --text-body,
   --text-body-sm, --text-caption. Do not add other size names. In Tailwind,
   also set --text-xs … --text-6xl to the same scale so shadcn's components
   stay on it, and set --text-7xl, 8xl, 9xl to initial.

5. Apply the base rules: html gets the font, body gets text-body at 1.5,
   headings get 1.2 and the heading weight, p gets max-width 65ch, labels and
   buttons get body-sm at 500.

6. Grep the app for any size that isn't a token (font-size in px, text-[…],
   text-xl and friends outside components/ui, font-bold when the heading
   weight is 600). Fix every hit. Report the table, the file you wrote, and
   the lines you changed.
```

---

## Follow-up prompts

| When | Say |
|---|---|
| It added a second font for headings | "Rule 1: one family. Headings are the same font at the heading weight. Remove the second font and its link tag." |
| It used text-xl / text-2xl in a page | "Those are for components/ui only. Use text-h1 … text-h6 or text-body-*, and h1 = `text-h2 sm:text-h1`." |
| Body text is 14px | "Rule 2: body is 16px. body-sm is for labels, buttons, table cells, and nav only." |
| A heading landed on 30px or 37px | "Rule 3: round to the nearest multiple of 4. Show me the corrected scale." |
| Labels are bold or uppercase | "Rule 5: labels and buttons are body-sm at 500. The only uppercase is an eyebrow at caption size with +0.08em." |
| It made helper text 11px | "Rule 6: nothing under 12px. Helper text is caption." |
| Secondary text is smaller and grayer | "Rule 7: same size, muted color. Don't shrink it." |
| Paragraphs run edge to edge | "p gets max-width: 65ch. Apply it in the base layer, not per component." |
