# DESIGN.md

> **AI: read this whole file before you write or change any UI. Follow every rule in Part 2. If a rule and a request clash, ask.**

This file does two jobs. **Part 1** is for you, the human. Fill it in before you build anything. **Part 2** is for the AI. It's the rules. **Part 3** is setup and a checklist.

Answer every blank in Part 1 first. It takes about 20 minutes. Do it once and every screen you build after this will match.

---

# Part 1 — Decide (fill this in first)

## 1. What is this, and how should it feel?

Write one sentence. Who uses it, and what do they do with it?

> **This app is** _______________________________________________
> **for** _______________ **so they can** _______________________

Now pick **two** feeling words. Not more. These drive every choice below.

| If you want it to feel… | Pick colors that are… | Corners | Font style |
|---|---|---|---|
| Calm, trustworthy, serious | Blue, slate gray | Small (6–8px) | Neutral sans (Inter) |
| Friendly, simple, helpful | Green, teal, warm gray | Medium (8–12px) | Rounded sans (Nunito, DM Sans) |
| Bold, modern, technical | Black/white, one sharp accent | Sharp (0–4px) | Geometric sans (Geist, Space Grotesk) |
| Warm, premium, editorial | Stone gray, deep green or wine | Small (4–6px) | Serif headings + sans body |

> **My two words:** _______________ and _______________

## 2. Pick your brand color

One color. It's for buttons, links, and the one thing on each screen that matters most. It will cover about 10% of the screen. Pick from a real scale, not a random hex.

| Feeling | Safe picks (Tailwind name · hex) |
|---|---|
| Trust, calm | `blue-600` #2563eb · `indigo-600` #4f46e5 · `sky-600` #0284c7 |
| Growth, health, money | `green-600` #16a34a · `emerald-600` #059669 · `teal-600` #0d9488 |
| Energy, creative | `violet-600` #7c3aed · `orange-600` #ea580c · `rose-600` #e11d48 |
| Serious, minimal | `zinc-900` #18181b (black button) |

Rules for the pick:

- Use the **600** step for light mode. It's dark enough for white text on it.
- Use the **500** step for dark mode. It's lighter so it pops on black.
- Skip yellow and lime. White text on them fails contrast.
- Don't pick red. Red is for errors. If your brand is red, use `rose-600` and make errors `red-600`.

> **My brand color:** `_______-600` = #_______ (dark mode: `_______-500` = #_______)

## 3. Pick your neutral

Your grays do 90% of the work: text, borders, backgrounds. Pick one gray family and never mix.

| Family | Feel | Use when |
|---|---|---|
| `zinc` | Neutral, clean | Default. Works with any brand color. |
| `slate` | Slightly blue, cool | Brand is blue, indigo, or sky. |
| `stone` | Slightly warm | Brand is orange, amber, green, or you want "premium." |

> **My neutral:** `_______`

That gives you, automatically:

| Job | Light mode | Dark mode |
|---|---|---|
| Page background | white | `950` |
| Card | white | `900` |
| Border | `200` | `800` |
| Muted fill | `100` | `800` |
| Secondary text | `500` | `400` |
| Main text | `950` | `50` |

## 4. Pick your font

One font. Two is the max, and only if one is for headings and one for body.

| Font | Feel | Google Fonts name |
|---|---|---|
| Inter | Neutral, safe, everywhere | `Inter` |
| Geist | Modern, technical | `Geist` |
| DM Sans | Friendly, rounded | `DM+Sans` |
| Nunito | Soft, approachable | `Nunito` |
| Space Grotesk | Bold, quirky headings | `Space+Grotesk` (headings only, pair with Inter body) |
| Source Serif 4 | Editorial, premium | `Source+Serif+4` (headings only, pair with Inter body) |
| System font | Fastest, no download | `system-ui` |

Rules:

- If unsure, Inter. It's boring on purpose.
- Weights you'll load: 400, 500, 600. Nothing else.
- Never use a display or script font for body text.

> **My font:** _______________ (headings: _______________ if different)

## 5. Pick your corners

One number drives buttons, inputs, and cards.

| Radius | Feel |
|---|---|
| `0px` | Sharp, technical, serious |
| `4px` | Crisp, professional |
| `8px` | Friendly default (most apps) |
| `12px` | Soft, consumer, playful |

> **My radius:** _______px

## 6. Pick your density

How much room things get.

| Density | Card padding | Gap between items | Page section gap | Use for |
|---|---|---|---|---|
| Roomy | `p-8` | `gap-6` | `py-24` | Marketing, landing pages |
| Normal | `p-6` | `gap-4` | `py-12` | Most apps (default) |
| Dense | `p-4` | `gap-3` | `py-8` | Dashboards, tables, admin tools |

> **My density:** _______________

## 7. Light, dark, or both?

- **Light only** is fine for a first project. Fewer things to check.
- **Both** costs little if you use job tokens from day one (you will).

> **Themes:** _______________

## 8. Write your summary

Copy this and fill it in. Paste it at the top of your first AI chat.

```
Project: [name]
Feel: [word 1], [word 2]
Brand color: [color]-600 #[hex] (dark: [color]-500)
Neutral: [zinc/slate/stone]
Font: [font]
Radius: [n]px
Density: [roomy/normal/dense]
Themes: [light / both]
```

Now open `globals.css`, change those values, and you're done deciding. Everything below is automatic.

---

# Part 2 — Rules (the AI follows these)

## Stack

- React + Tailwind CSS v4 + shadcn/ui.
- Use shadcn components from `@/components/ui`. Never hand-write a button, input, select, checkbox, dialog, dropdown, or toast.
- If a shadcn part is missing, add it: `npx shadcn@latest add <name>`.

## Color

All colors come from `globals.css`. Use them by **job name**, never by raw color.

| Use this | For |
|---|---|
| `bg-background` `text-foreground` | Page background and main text |
| `bg-card` `text-card-foreground` | Cards and panels |
| `bg-primary` `text-primary-foreground` | The ONE main action per screen |
| `bg-secondary` `text-secondary-foreground` | Other actions, tags, soft fills |
| `bg-muted` `text-muted-foreground` | Quiet backgrounds, helper text, labels |
| `bg-destructive` `text-destructive-foreground` | Delete, errors |
| `border-border` | Every border |
| `ring-ring` | Focus rings |
| `text-success` `text-warning` `text-info` | Status text and icons only |

Rules:

- **Never** use raw colors: no `bg-blue-600`, `text-gray-500`, `#hex`, or `style={{ color }}`.
- **60 / 30 / 10.** About 60% of the screen is `background`, 30% is `card` / `muted`, 10% is `primary`. If a screen looks colorful, it's wrong.
- One `primary` button per screen. Everything else is `secondary`, `outline`, or `ghost`.
- Color means something. Blue is a link. Red is an error. Green is success. Never color a heading to make it pretty.
- Color is never the only signal. Errors get an icon or text too.
- Text contrast is at least 4.5:1 for body and 3:1 for big headings. Our tokens pass. Don't lower opacity on text.

## Typography

**One font.** `font-sans`. Never add a second unless Part 1 chose a heading font.

**Three weights.** `font-normal` (400) for body. `font-medium` (500) for buttons and labels. `font-semibold` (600) for headings. Never `font-bold` or `font-light`.

**Three text colors.** `text-foreground` for headings and body. `text-muted-foreground` for helper text and descriptions. Placeholder gray is set by the input. That's all.

**Size scale.** Only these. Never a size that isn't on the list.

| Size | Class | Line height | Letter spacing | Weight | Use for |
|---|---|---|---|---|---|
| 48px | `text-5xl` | `leading-none` | `tracking-tight` | semibold | Page title. One per page. |
| 32px | `text-3xl` | `leading-tight` | `tracking-tight` | semibold | Big section title |
| 24px | `text-2xl` | `leading-tight` | `tracking-tight` | semibold | Section heading (h2) |
| 18px | `text-lg` | `leading-snug` | none | medium | Card title (h3), lead paragraph |
| 16px | `text-base` | `leading-relaxed` | none | normal | Body text. The default. |
| 14px | `text-sm` | `leading-normal` | none | normal | Secondary text, table cells, buttons |
| 12px | `text-xs` | `leading-normal` | `tracking-wide` if uppercase | medium | Tiny labels, badges, captions |

Rules:

- Body is 16px, `leading-relaxed` (1.625), `max-w-prose` (about 65 characters). This is the anchor. Don't move it.
- Nothing people need to read is under 14px. 12px is for labels only.
- Headings use `tracking-tight`. The bigger the heading, the tighter. Body text never gets letter spacing.
- Big text, tight line height. Small text, loose line height.
- The jump between levels is clear. If two sizes look alike, one is wrong.
- Every page has one h1. Then h2 for sections. Then h3 inside those. Don't skip levels.
- Space above a heading is about twice the space below it. That glues the heading to its text.
- Don't make text big AND bold AND colored. Pick one or two ways to say "this matters."
- No ALL CAPS longer than three words. Uppercase labels get `text-xs tracking-wide`.
- Numbers in tables get `tabular-nums`.
- Left-align almost everything. Center only hero titles, empty states, and dialog buttons.

## Spacing

Only these numbers: **1, 2, 3, 4, 6, 8, 12, 16, 24** (4px to 96px). Never `p-[13px]`, `mt-5`, or `gap-7`.

| Where | Use |
|---|---|
| Inside a button | `px-4 py-2` (shadcn does this) |
| Inside a card | `p-6` (or the density picked in Part 1) |
| Between items in a list or form | `gap-4` or `space-y-4` |
| Between a label and its input | `gap-2` |
| Between sections on a page | `space-y-12` or `py-12` |
| Page side padding | `px-6` (mobile) `md:px-8` |
| Page max width | `max-w-6xl mx-auto` |
| Reading text max width | `max-w-prose` |

Rules:

- Things that belong together sit close (`gap-2`). Things that don't get more room (`gap-8`).
- When in doubt, add more space, not less.
- Use `gap-*` on flex and grid, not margins on children.

## Shape and depth

- Corners: `rounded-md` (buttons, inputs), `rounded-lg` (cards), `rounded-full` (avatars, pills). All driven by `--radius`.
- Borders: `border border-border`. Always 1px. Only `border-destructive` on error inputs.
- Shadows: `shadow-sm` on cards. `shadow-lg` on dialogs and dropdowns. No other shadows.
- No gradients. No glass effects. No glows.

## Layout

- Mobile first. Stack on phones, then `md:grid-cols-2` or `lg:grid-cols-3`.
- Every page: `max-w-6xl mx-auto px-6 py-12`.
- Every page has ONE `text-5xl` title at the top.
- Group related things in a `Card`. Don't float loose inputs on the page.
- Line things up with `grid` or `flex`. Never hand-position with margins.
- Click targets are at least 40px tall (`h-10`). Icon-only buttons are `size="icon"`.

## Buttons

- `<Button>` (default) — the one main action.
- `<Button variant="outline">` — other actions.
- `<Button variant="ghost">` — cancel, close, low-key.
- `<Button variant="destructive">` — delete. Always confirm in a `Dialog` first.
- Button text is a verb: "Save changes", not "Submit". "Delete project", not "OK".
- Loading: disable the button and show "Saving…".

## States and feedback

Every screen needs all of these. Build them, don't skip them.

- **Empty**: one short line and one button. "No projects yet. [Create project]"
- **Loading**: `Skeleton` for content, not spinners.
- **Error**: `Alert variant="destructive"` with what went wrong and what to do.
- **Success**: a `toast` ("Saved"), not a full page.
- Every input has a `Label`. Errors show under the input in `text-sm text-destructive`.

## Icons

- `lucide-react` only. `h-4 w-4` inside buttons and text, `h-5 w-5` alone.
- Icons never replace the label on a main action. "Save" is text.

## Do not

- Add new colors, fonts, sizes, or spacing values. Ask first.
- Add a CSS file or `style={{ }}`. Tailwind classes only.
- Add animation beyond what shadcn ships.
- Use emoji in the UI.
- Center everything.
- Put more than one `primary` button on a screen.

---

# Part 3 — Set up and check

## Setup (once)

1. Put this file in the root of the project.
2. Put `globals.css` where Tailwind lives. Change `--primary`, `--font-sans`, and `--radius` to your Part 1 answers.
3. Put `page.tsx` at `app/design/page.tsx`. Open `/design` to see every part.
4. Run: `npx shadcn@latest init` then `npx shadcn@latest add button card input label badge alert skeleton switch checkbox select dialog sonner`
5. Start every AI chat with: **"Read DESIGN.md and follow it."** Paste your Part 1 summary under it.

## Prompts that keep AI on track

| When | Say |
|---|---|
| Starting a screen | "Read DESIGN.md. Build the settings page with shadcn Card, Input, Switch, Button." |
| AI used raw colors | "Replace every raw Tailwind color with a job token from globals.css." |
| AI hand-wrote a part | "Swap the custom modal for the shadcn Dialog." |
| Text looks off | "Check every text size against the scale in DESIGN.md. Fix any that aren't on it." |
| End of session | "Run the DESIGN.md checklist. Report what you fixed." |

## End-of-session checklist

**AI: run this before you say you're done. Fix anything that fails. Report what you fixed.**

- [ ] Search for `bg-[a-z]+-[0-9]`, `text-[a-z]+-[0-9]`, `border-[a-z]+-[0-9]`, `#[0-9a-f]{3,6}`, `style={{`. Zero hits.
- [ ] Search for `-[` (like `p-[13px]`). Zero hits.
- [ ] Search for `font-bold`, `font-light`, `text-xl`, `text-4xl`, `text-6xl`. Zero hits (not on the scale).
- [ ] Search for `<button`, `<input`, `<select`. Zero hits outside `components/ui`.
- [ ] Every page has exactly one `text-5xl` title.
- [ ] Every screen has exactly one default `<Button>`.
- [ ] Body text is `text-base leading-relaxed` and long text has `max-w-prose`.
- [ ] Every input has a `<Label>`.
- [ ] Empty, loading, and error states exist for every list and form.
- [ ] Any new component was added to `/design`.
- [ ] `/design` still looks the same.
