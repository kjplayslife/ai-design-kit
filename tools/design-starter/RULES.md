# Design Starter — the rules

Fourteen rules that make an AI-built app look designed instead of generated. The [starter](index.html) generates every value from three picks and bakes the rules into its prompt. This file is the text version to attach to a chat.

**Why so few decisions?** A small design system is about 60 values. Three of them are taste: your primary color, your font, your corner radius. The rest are math and accessibility, and math does them better. Every rule below is one the starter enforces automatically.

## Color

**1 · Every color is a token.** No raw hex, no rgb(), no named colors, no palette classes in components. In Tailwind the prompt removes the built-in palette entirely, so `bg-zinc-900` produces nothing and shows up as a mistake instead of a wrong color.

**2 · One job per token.** Backgrounds use background, card, muted, accent. Text uses foreground tokens. Lines use border and input. Never a text color as a background or the reverse.

**3 · Primary is 10% of the screen.** One primary action per screen and focus rings use primary. Text links use the link token, which is tuned for text contrast. Everything else is gray.

**4 · Status colors mean status.** Success, warning, error, info: as text and icons on the page, as the soft background for banners and badges, as a solid fill only on a button that performs that action. Never decoration, never a second brand color. They are fixed for everyone because red means error everywhere.

**5 · Text on a fill is that fill's foreground.** Never the color on itself, never lowered opacity.

**6 · Never use scale steps directly.** No "primary-300", no "neutral-700" in a component. If a job is missing, add a token, then use the token. That is how the system grows without drifting.

Under the hood: the gray you pick becomes the dark page (the 950 step), clamped so it stays dark; a lifted gray like Discord's is allowed and the steps above re-space so cards stay one step lighter and secondary and status text step lighter to pass. Never pure black for the page, never pure white for text (it is the 50 step). Light mode mirrors the jobs, not the hex values: white page and cards with a border and a small shadow; dark cards are one step lighter than the page with a border and no shadow.

## Type

**7 · One font family.** Headings are the same font, heavier. Never a second font, not for headings, not for numbers, not for a logo. Monospace for code only.

**8 · Every size is a token.** Body is 16px, fixed. Six headings grow from it by one ratio and round to 4px. Body sizes are 18, 16, 14, 12. No font-size in px, no arbitrary sizes, no framework default sizes in app code.

**9 · Headings 1.2, body 1.5.** Tracking goes negative only on headings 24px and up. Never tighten body text.

**10 · Labels, buttons, tabs, and table headers are 14px at 500.** Not bold, not uppercase. Eyebrows (12px, uppercase, +0.08em, 500) are the only uppercase text.

**11 · Paragraphs max 65ch, nothing under 12px, hierarchy from size and weight.** Secondary text is the muted color at the same size, never a smaller size.

**12 · Numbers in columns are tabular.** Prices, dates, counts, stats, timers. Tables get it by default.

## Shape

**13 · Three radii, one spacing scale, one border width.** Corners come from radius-sm, radius-md (buttons, inputs, menus), radius-lg (cards, dialogs); pills only for badges, avatars, and switches. Spacing is a multiple of 4: 4, 8, 12, 16, 24, 32, 48, 64. Borders are 1px, always, except the 2px focus ring.

**14 · Depth is card-on-page plus a border.** Shadows only in light mode, only shadow-sm, only on cards and dropdowns. No glows, no colored shadows.

Under the hood: four states only (default, hover, focus, disabled). Hover on a button is one scale step darker; on a row it is the accent fill. Focus is a 2px ring with 2px offset. Disabled is 50% opacity. Icons are Lucide, 16px in text and buttons, 20px standalone, stroke 1.5, colored like the text next to them.

## The fourteen rules, one line each

1. Every color is a token.
2. One job per token.
3. Primary is 10% of the screen. Links use the link token.
4. Status colors mean status.
5. Text on a fill is that fill's foreground.
6. Never use scale steps directly.
7. One font family.
8. Every size is a token. Body is 16px.
9. Headings 1.2, body 1.5.
10. Labels and buttons are 14px at 500. Eyebrows are the only uppercase.
11. Max 65ch. Nothing under 12px. Hierarchy from size and weight.
12. Numbers in columns are tabular.
13. Three radii, spacing in 4s, 1px borders.
14. Depth is card plus border. Shadows only on light.
