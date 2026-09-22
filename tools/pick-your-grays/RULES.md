# Pick Your Grays — the rules

How to choose one dark background, build a full gray scale from it, and flip it into light mode. Six rules, one worksheet. This is the text version of [Pick-Your-Grays.pdf](Pick-Your-Grays.pdf); the [picker](index.html) enforces every rule below.

**Why dark first?** Dark mode is harder. If your grays work on dark, light mode is a mirror. If you start light, dark mode is a redo.

## Step 1 · Pick the dark background

Everything else comes from this one color. Spend your time here.

**Rule 1 · It is not black.** Pure `#000000` makes everything on top of it look like it's floating. Use a very dark gray: lightness 3% to 8%.

**Rule 2 · It has a hint of your brand hue.** Take the hue (H) from your brand color. Keep it. Drop saturation (S) to 3% to 10%. Above about 12% it stops reading as gray. If you can name the color at a glance, it's too much.

| Your brand is… | Tint the gray… | Tailwind name | Dark background |
|---|---|---|---|
| Blue, indigo, violet, sky | Cool (toward blue) | `slate` | `#020617` · H222 S47 L5 |
| Red, pink, black, none | Almost neutral (tiny bit blue) | `zinc` | `#09090b` · H240 S10 L4 |
| Green, teal, orange, amber, brown | Warm (toward yellow) | `stone` | `#0c0a09` · H20 S14 L4 |

**Rule 3 · Pure white is not your text either.** White on dark glows and tires the eyes. Use the lightest step of your scale (about 98% lightness, like `#fafafa`).

Beginner shortcut: pick zinc, slate, or stone from the table. They already follow every rule. Build your own on project three.

> Note on slate: Tailwind's slate-950 (`#020617`) is 47% saturated. That only reads as gray because it is nearly black; hold 47% on every step and the 500 step turns blue. If you build the scale with one saturation value (Step 2), use hue 222 at about 10%. The picker's slate preset does this.

## Step 2 · Build the scale

Eleven steps from one color. Keep the hue. Keep the saturation. Only change lightness. Use this ladder.

| Step | 950 | 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Lightness % | 5 | 10 | 16 | 25 | 33 | 46 | 64 | 83 | 90 | 96 | 98 |

The steps are not even. They bunch up at the light end (98, 96, 90) because the eye can tell light grays apart and you need many for backgrounds and borders. They spread out in the middle where you need fewer.

**Rule 4 · The neighbor test.** Put all 11 in a row. Every step should look a little different from the one next to it. Two look the same? One is wrong. One jumps too far? Add 2–3 points of saturation to the dark steps so they don't go muddy.

Reference scales:

| Step | zinc | slate | stone |
|---|---|---|---|
| 950 | `#09090b` | `#020617` | `#0c0a09` |
| 900 | `#18181b` | `#0f172a` | `#1c1917` |
| 800 | `#27272a` | `#1e293b` | `#292524` |
| 700 | `#3f3f46` | `#334155` | `#44403c` |
| 600 | `#52525b` | `#475569` | `#57534e` |
| 500 | `#71717a` | `#64748b` | `#78716c` |
| 400 | `#a1a1aa` | `#94a3b8` | `#a8a29e` |
| 300 | `#d4d4d8` | `#cbd5e1` | `#d6d3d1` |
| 200 | `#e4e4e7` | `#e2e8f0` | `#e7e5e4` |
| 100 | `#f4f4f5` | `#f1f5f9` | `#f5f5f4` |
| 50 | `#fafafa` | `#f8fafc` | `#fafaf9` |

## Step 3 · Give each step a job

Dark mode uses six of the eleven. Don't use all of them. Each one gets one job. Lighter means closer to the viewer.

| Job | Step | Why |
|---|---|---|
| Page background | 950 | The base. Not black. |
| Card, panel, dialog | 900 | One step lighter = "on top." Shadows don't show on dark, so this is depth. |
| Muted fill, hover, input | 800 | Two steps up. |
| Border, divider | 800 | Same as muted. Just visible. |
| Disabled, placeholder | 600 | Readable but clearly "off." |
| Secondary text | 400 | Passes 4.5:1 on 950. 500 does not. |
| Main text, headings | 50 | Your "white." |

Skipped: 700, 500, 300, 200, 100. They're for light mode.

**Rule 5 · Brand color on dark.** Use the 500 step of your brand color on dark (you'll use 600 on light). Lighter pops more on black. Pull saturation back 10–20%. Bright colors on dark look neon. Text on the brand button is still white, or your 50 step.

**Rule 6 · Check contrast (six pairs).**

| Pair | Need | zinc result |
|---|---|---|
| Main text (50) on page (950) | 4.5:1 | 19:1 ✓ |
| Main text (50) on card (900) | 4.5:1 | 16:1 ✓ |
| Secondary text (400) on page (950) | 4.5:1 | 7.5:1 ✓ |
| Secondary text (400) on card (900) | 4.5:1 | 6.4:1 ✓ |
| Border (800) on page (950) | 1.2:1 (decorative) | 1.3:1 ✓ (the PDF says 1.6; the WCAG math gives 1.3, and that is fine for a line) |
| White on brand (500) | 4.5:1 | Check yours. Blue-500 is 3.7 — use 600 for text-heavy buttons. |

## Step 4 · Flip to light

Light mode is a mirror of the jobs, not the colors. Don't invert the hex values. Keep the same jobs and re-assign steps from the other end of the scale.

| Job | Dark | Light | Note |
|---|---|---|---|
| Page background | 950 | white | Pure white is fine for the page. |
| Card, panel, dialog | 900 | white | Same as page. Depth comes from border + shadow instead. |
| Muted fill, hover, input | 800 | 100 | One step off white. |
| Border, divider | 800 | 200 | Two steps off white. |
| Disabled, placeholder | 600 | 400 | |
| Secondary text | 400 | 500 | 500 passes 4.5:1 on white. 400 fails. |
| Main text, headings | 50 | 950 | Your "black." Not `#000`. |
| Brand color | 500 | 600 | Darker on light so white text passes. |
| Shadows | none | `shadow-sm` | Shadows only work on light. |

The three light-mode mistakes: using 400 for helper text (fails contrast). Using pure `#000` for body text (too harsh). Making the card darker than the page (backwards; on light, cards are white with a border).

Six more contrast checks: Main text (950) on white: 19:1 ✓ · Secondary (500) on white: 4.8:1 ✓ · Secondary (500) on muted (100): 4.4:1 — borderline, use 600 inside muted fills · Border (200) on white: 1.3:1, fine for lines · White on brand (600): check yours; blue-600 is 5.2:1 ✓

## Real examples

See [examples/examples.js](examples/examples.js). What to notice: nobody uses pure mid-gray. GitHub leans blue. Material leans violet. Notion leans warm. Discord skips near-black and lifts the whole page to `#313338` so it feels softer. Apple is the one that uses true `#000`, and it pays for it with three gray layers on top.

## The six rules, one line each

1. Background is dark gray, not black.
2. Tint it toward your brand hue, 3–10% saturation.
3. Text is the 50 step, not white.
4. Build 11 steps by changing only lightness; pass the neighbor test.
5. Brand is 500 on dark, 600 on light.
6. Light mode mirrors the jobs, not the hex values.

Free contrast checker: search "WebAIM contrast checker." Paste two hex values, read the number.
