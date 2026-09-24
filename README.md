# AI Design Kit

Prompts, rules, and small tools that help people design better apps and websites with AI agents.

**Live site:** [kjplayslife.github.io/ai-design-kit](https://kjplayslife.github.io/ai-design-kit/) · **Gray picker:** [kjplayslife.github.io/ai-design-kit/tools/pick-your-grays/](https://kjplayslife.github.io/ai-design-kit/tools/pick-your-grays/)

This is not an app. It's a set of things you paste into an AI chat, or open in a browser, so the agent building your UI makes fewer bad calls. Each tool lives in its own folder with a README, the rules it follows, and a prompt you can use with any agent.

## What's here

| Folder | What it's for |
|---|---|
| [tools/design-starter/](tools/design-starter/) | **Start here.** Three picks (primary + gray, font + ratio + corners) across three pages, then one prompt with every token, fourteen rules, and exact placement for plain CSS or Tailwind v4 + shadcn. |
| [tools/pick-your-colors/](tools/pick-your-colors/) | Pick one primary color and one gray. Get both 11-step scales, fixed status colors, every light and dark token with contrast checked, and a prompt that wires it into plain CSS or Tailwind v4 + shadcn. Standalone piece of the starter. |
| [tools/pick-your-grays/](tools/pick-your-grays/) | Pick one dark gray or one white, get the full neutral scale, job assignments for both modes, 12 contrast checks, and a `globals.css` snippet. Open `index.html`. |
| [tools/pick-your-type/](tools/pick-your-type/) | Pick one font and one ratio. Get a heading scale on the 4px grid, four body sizes, line heights, weights, a mobile version, and a prompt that wires it into plain CSS or Tailwind v4 + shadcn. Standalone piece of the starter. |

## How to use it

1. Open the tool or read the rules for the decision you're making.
2. Make the decision once. Write it down (each tool gives you an export).
3. Paste the export, plus the rules file, at the top of your AI chat.
4. When the agent drifts, use the follow-up prompts in each folder's `PROMPT.md`.

## Roadmap

- [x] Design Starter (colors + type + corners → one prompt)
- [x] Pick Your Colors (primary + gray, two decisions; replaces Pick Your Grays)
- [x] Pick Your Grays (kept for reference)
- [x] Pick your brand color (folded into Pick Your Grays as Step 1)
- [x] Pick Your Type (font + ratio)
- [ ] More real-world dark-mode examples

## Contributing examples

The gray picker's examples live in [tools/pick-your-grays/examples/examples.js](tools/pick-your-grays/examples/examples.js). Sample five hexes from a site you like and open a PR.

## License

MIT
