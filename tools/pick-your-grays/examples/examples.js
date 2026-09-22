// Real-world gray palettes, sampled from public design systems and UI.
// Close, not exact. Add your own: copy a block, fill in the five hexes.
//
// Every example uses the same five jobs so they can be compared side by side:
//   dark:  page · card · border · secondaryText · text
//   light: page · muted · border · secondaryText · text
//
// "tint" is a one-line note on which way the gray leans.
// Leave `light` out if you only sampled dark mode.

window.GRAY_EXAMPLES = [
  {
    name: "Vercel / Geist",
    tint: "neutral, near-black",
    url: "https://vercel.com/geist/colors",
    dark:  { page: "#0a0a0a", card: "#1a1a1a", border: "#2e2e2e", secondaryText: "#a1a1a1", text: "#ededed" },
    light: { page: "#ffffff", muted: "#fafafa", border: "#eaeaea", secondaryText: "#666666", text: "#171717" },
  },
  {
    name: "GitHub / Primer",
    tint: "cool, blue-tinted",
    url: "https://primer.style/foundations/color",
    dark:  { page: "#0d1117", card: "#161b22", border: "#30363d", secondaryText: "#8b949e", text: "#e6edf3" },
    light: { page: "#ffffff", muted: "#f6f8fa", border: "#d0d7de", secondaryText: "#57606a", text: "#24292f" },
  },
  {
    name: "Discord",
    tint: "cool, lifted (not near-black)",
    url: "https://discord.com",
    dark:  { page: "#313338", card: "#2b2d31", border: "#1e1f22", secondaryText: "#949ba4", text: "#dbdee1" },
  },
  {
    name: "Notion",
    tint: "neutral, soft",
    url: "https://notion.so",
    dark:  { page: "#191919", card: "#202020", border: "#2f2f2f", secondaryText: "#9b9b9b", text: "#d4d4d4" },
    light: { page: "#ffffff", muted: "#f7f7f5", border: "#e9e9e7", secondaryText: "#787774", text: "#37352f" },
  },
  {
    name: "Apple iOS",
    tint: "true black + gray layers",
    url: "https://developer.apple.com/design/human-interface-guidelines/color",
    dark:  { page: "#000000", card: "#1c1c1e", border: "#38383a", secondaryText: "#8e8e93", text: "#ffffff" },
    light: { page: "#ffffff", muted: "#f2f2f7", border: "#c6c6c8", secondaryText: "#8e8e93", text: "#000000" },
  },
  {
    name: "Material 3",
    tint: "warm-violet tint",
    url: "https://m3.material.io/styles/color/system/overview",
    dark:  { page: "#141218", card: "#211f26", border: "#49454f", secondaryText: "#cac4d0", text: "#e6e0e9" },
  },
];
