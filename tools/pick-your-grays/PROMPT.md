# Prompt: have an AI agent pick and wire up your grays

Use this when you want the agent to do the whole thing, or when you already picked your grays in the [picker](index.html) and want them wired into a project. Paste the block below, fill the brackets, and attach `RULES.md`.

The picker's **Export → Prompt** tab generates a filled-in version of this automatically.

---

```
Read RULES.md (Pick Your Grays) and follow every rule in it.

My brand color is [#hex]. My gray tint is [cool / neutral / warm / custom].
My dark background (950) is [#hex] (H [n] S [n]% L [n]%).

Do this, in order:

1. Build the 11-step gray scale from my dark background. Keep the hue and
   saturation, change only lightness, using the ladder in RULES.md
   (950→50: 5, 10, 16, 25, 33, 46, 64, 83, 90, 96, 98). Show all 11 hexes
   in a row and confirm the neighbor test passes.

2. Assign jobs. Dark mode uses 950 page, 900 card, 800 muted + border,
   600 disabled, 400 secondary text, 50 main text. Light mode mirrors the
   jobs, not the hexes: white page, white card, 100 muted, 200 border,
   400 disabled, 500 secondary text, 950 main text.

3. Set the brand color: 600 on light, 500 on dark (pull saturation back
   10–20% for dark so it doesn't go neon).

4. Check all 12 contrast pairs in RULES.md. Every text pair must be at or
   above 4.5:1. If one fails, move the step, not the rule, and tell me
   which one you moved.

5. Write the result into globals.css as CSS variables under :root (light)
   and .dark (dark), using the job names already in that file:
   --background, --foreground, --card, --card-foreground, --primary,
   --secondary, --muted, --muted-foreground, --accent, --border, --input,
   --ring. Do not add new variable names. Do not use raw hex anywhere else
   in the app.

6. Report: the 11 hexes, the job table for both modes, the 12 contrast
   results, and the exact lines you changed in globals.css.
```

---

## Follow-up prompts

| When | Say |
|---|---|
| It used pure black or white | "Rule 1 and Rule 3: replace #000 with the 950 step and #fff text with the 50 step." |
| Helper text looks faint in light mode | "Secondary text on light is 500, not 400. Re-check the contrast pair." |
| Cards look flat in dark mode | "Card is 900 on a 950 page. Border is 800. Don't add shadows on dark." |
| The gray looks colored | "Saturation is over 10%. Drop it until nobody can name the color at a glance." |
| It invented new tokens | "Only the job names in globals.css. Map your new name onto an existing job or ask me." |
