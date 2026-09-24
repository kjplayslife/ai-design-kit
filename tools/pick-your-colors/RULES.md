# Pick Your Colors — the rules

How to choose one primary color and one gray, generate everything else, and keep every color in the app on it. Seven rules. The [picker](index.html) enforces every one.

**Why only two decisions?** A color system is about 40 values. Two of them are taste (your primary, your gray tint). The other 38 are math and accessibility, and math does them better than you do. The picker generates them so you never have to know what a 700 step is.

## Step 1 · Pick your primary

The one color that is yours. Buttons, links, focus rings. Pick it from a screenshot of something you like, from the app swatches in the picker, or type a hex.

What the picker does with it:

- Builds an 11-step scale (50 to 950) in a perceptual color space, so each step looks the same distance from the next. Your exact hex is kept at its nearest step.
- Picks the button color for light mode: your color if white text passes 4.5:1 on it, one step darker if that is all it takes, otherwise your color with dark text. Yellow, lime, cyan, and terracotta get dark text. That is correct, not a bug.
- Picks the button color for dark mode the same way, checking it also stands out against the dark page.
- Picks a separate link color for each mode, because text needs 4.5:1 against the page where a button fill does not. On dark that is a lighter step than the button; on light it is the same or one darker.
- If your primary is almost gray (a black-and-white brand like Vercel or Claude), buttons go black on light and white on dark, and links use the main text color.

**Rule 1 · Primary is 10% of the screen.** One primary action per screen, focus rings, and links (through the link token). Everything else is gray. If more than a tenth of a screen is your color, it stops meaning anything.

## Step 2 · Pick your gray

Gray is where the professional look lives. Pure gray looks like a wireframe. A gray with a hint of hue looks designed. Pick where the hint comes from:

| Option | What it does |
|---|---|
| From primary | Borrows your primary's hue at a whisper. The default. Always matches. |
| Pure | No tint. Clean, technical, a little cold. |
| Zinc / Slate / Stone | Tailwind's three: barely blue, clearly blue, warm. |
| An app | The hue and amount of tint from that app's dark background. Claude, Vercel, xAI, Supabase, Lovable, GitHub, Discord, Notion, Apple, Material. |
| Any hex | Paste a dark gray from a screenshot. Only its tint is used. |

What the picker does with it:

- Builds an 11-step neutral scale on a fixed lightness ladder. Only hue and a small amount of chroma come from your pick, capped so no step ever reads as a color.
- Assigns every job in both modes. Light: white page and cards, 100 for muted fills and hover, 200 borders, 300 input borders, 500 secondary text, 950 main text. Dark: 950 page, 900 cards, 800 muted and borders, 700 input borders, 400 secondary text, 50 main text.

**Rule 2 · Never pure black, never pure white for text.** The page is the 950 step, text is the 50 step. Pure black makes everything float; pure white text glows.

**Rule 3 · Light mode mirrors the jobs, not the hex values.** Cards are white with a border and a small shadow. Dark mode cards are one step lighter than the page with a border and no shadow. Shadows do not show on dark.

## Step 3 · Status colors are fixed

Success green, warning amber, error red, info blue. Red means error everywhere on the internet, so there is nothing to decide. Each gets a solid fill with text on it, a soft background for banners and badges with its own text color, and a text color for inline use. All checked for contrast in both modes.

**Rule 4 · Status colors mean status.** As text and icons on the page, as the soft background for banners and badges, as a solid fill only on a button that performs that action (a red Delete). Never as decoration. Never as a second brand color.

## Step 4 · Every color is a token

**Rule 5 · Every color in the app comes from the tokens.** No raw hex, no rgb(), no named colors, no palette classes in components. In Tailwind the picker's prompt removes the built-in palette entirely, so `bg-zinc-900` produces nothing and shows up as a mistake instead of a wrong color.

**Rule 6 · One job per token.** Backgrounds use background, card, muted, accent. Text uses foreground tokens. Lines use border and input. Text on any fill is the listed foreground for that fill, never the color on itself, never lowered opacity.

**Rule 7 · Never use scale steps directly.** No "primary-300", no "neutral-700" in a component. If a job is missing, add a token, then use the token. That is how the system grows without drifting.

## Contrast

Every text pair is checked at 4.5:1 in both modes: main and secondary text on page and card, text on the primary button, primary as a link on the page, each status text on the page, and each status soft pair. Borders are checked at 1.2:1. The picker only speaks up when something fails.

## The seven rules, one line each

1. Primary is 10% of the screen.
2. Never pure black. Never pure white for text.
3. Light mode mirrors the jobs, not the hex values.
4. Status colors mean status.
5. Every color is a token.
6. One job per token.
7. Never use scale steps directly.
