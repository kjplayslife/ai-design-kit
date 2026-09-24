# Design Starter

Three picks, one prompt. Page 1: a primary color and a gray. Page 2: a font, a ratio, and a corner radius. Page 3: the full prompt that wires the whole system into your app. No build step; use it live at [kjplayslife.github.io/ai-design-kit/tools/design-starter/](https://kjplayslife.github.io/ai-design-kit/tools/design-starter/) or open [index.html](index.html) in a browser.

This combines [Pick Your Colors](../pick-your-colors/) and [Pick Your Type](../pick-your-type/) into one flow and adds the shape rules. It is the thing to send people to.

## The three pages

**1 · Colors.** A color picker and hex field for the primary, with one-click swatches of real app brand colors. For the gray, pick a dark gray: from your primary's hue, pure, zinc / slate / stone, one of the apps, or any hex. Its tint and its lightness both count: a near-black pick gives a near-black page, a lifted gray like Discord's gives a lifted page, and the steps above it re-space so cards and text still pass. Below: the same settings screen in light and dark built from the generated tokens, then all six scales (primary, neutral, four fixed status colors).

**2 · Type.** Nine safe sans-serifs rendered live or any Google Font. Ratio (1.2 dense, 1.25 balanced, 1.333 marketing), heading weight, and corners (sharp 4px, soft 8px, round 12px). The same light and dark preview, now in your font with your corners, then the ten-size scale.

**3 · Prompt.** A summary strip of the five choices, the stack switch (plain HTML + CSS or React + Tailwind v4 + shadcn), and the prompt. Copy it, paste it at the top of a chat with whatever is building your UI, and keep it: paste it again when you start a new screen or the agent drifts.

## What is chosen and what is fixed

Chosen: primary color, gray (tint and how dark the page is), font, ratio, heading weight, corner radius. Six clicks, three of them optional.

Fixed, because every good answer is the same: body 16px; 11-step scales in OKLCH; status colors; the job each token does in each mode; contrast at 4.5:1; spacing in multiples of 4; 1px borders; shadows only on light cards; four states; Lucide icons at two sizes; tabular numbers in columns.

## What the prompt does

One prompt, for a brand-new project or one that already exists. It carries every value and then tells the agent, in order, to:

0. **Look first.** Detect the stack and whether the project is new or existing. On an existing project, print an inventory of raw colors, font sizes, fonts, and radii before touching anything.
1. **Write the tokens** into `globals.css` (Tailwind v4 + shadcn) or `styles.css` (plain CSS). The Tailwind version puts `--color-*: initial` first so the built-in palette stops existing, moves Tailwind's text sizes onto the scale, and sets the radius tokens.
2. **Write DESIGN.md**: the system verbatim, the share link that reopens these exact picks, and the four working prompts (new screen, change everywhere, add a token, drift audit).
3. **Write CLAUDE.md** (and a Cursor rule): read DESIGN.md first, tokens only, propose a token before inventing a value, run the check after every UI change.
4. **Build the living style guide** at `/design` (or `design.html`): every token, size, radius, and component in every state, rendered from the live CSS with values read at runtime, so it can never drift from the code.
5. **Create `design-check.sh`** (and an npm script), a grep that lists every off-token value and exits non-zero.
6. **Migrate an existing project** one concern at a time (colors, then type, then shape), map any other component library's theme to the tokens, keep a MIGRATION.md of what changed and what needs a human decision, run the check until clean.
7. **Report** files, check output, the style guide URL, and the before/after inventory.

## The workflow after that

Students maintain two files and look at one page. A new screen is built against DESIGN.md. A system-wide change is made by reopening the share link, copying the new prompt, and saying "update to these values, change nothing else." A new need becomes a token in three places before it is used. A drift audit catches anything that leaked around the system.

## Files

| File | What |
|---|---|
| [index.html](index.html) | The starter. Single file, vanilla JS, no dependencies beyond Google Fonts for the previews. |
| [RULES.md](RULES.md) | The fourteen rules as text, with the why. Attach this to an AI chat. |
| [PROMPT.md](PROMPT.md) | A prompt that has an agent build the whole system for you from your three picks. |
