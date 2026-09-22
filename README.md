# AI Design Kit

Prompts, rules, and small tools that help people design better apps and websites with AI agents.

This is not an app. It's a set of things you paste into an AI chat, or open in a browser, so the agent building your UI makes fewer bad calls. Each tool lives in its own folder with a README, the rules it follows, and a prompt you can use with any agent.

## What's here

| Folder | What it's for |
|---|---|
| [design-starter/](design-starter/) | `DESIGN.md`, a `globals.css`, and a kitchen-sink page. Drop into a React + Tailwind v4 + shadcn project and tell the agent "Read DESIGN.md and follow it." |
| [tools/pick-your-grays/](tools/pick-your-grays/) | Pick one dark gray or one white, get the full neutral scale, job assignments for both modes, 12 contrast checks, and a `globals.css` snippet. Open `index.html`. |

## How to use it

1. Open the tool or read the rules for the decision you're making.
2. Make the decision once. Write it down (each tool gives you an export).
3. Paste the export, plus the rules file, at the top of your AI chat.
4. When the agent drifts, use the follow-up prompts in each folder's `PROMPT.md`.

## Roadmap

- [x] Design starter (DESIGN.md + globals.css)
- [x] Pick Your Grays
- [x] Pick your brand color (folded into Pick Your Grays as Step 1)
- [ ] Type scale picker
- [ ] More real-world dark-mode examples

## Contributing examples

The gray picker's examples live in [tools/pick-your-grays/examples/examples.js](tools/pick-your-grays/examples/examples.js). Sample five hexes from a site you like and open a PR.

## License

MIT
