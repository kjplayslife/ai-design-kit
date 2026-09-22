// Real-world gray palettes, sampled from screenshots and public design systems.
// Close, not exact. Add your own: copy a block, fill in the five hexes.
//
// Every example uses the same five jobs so they can be compared side by side:
//   dark:  page · card · border · secondaryText · text
//   light: page · muted · border · secondaryText · text
//
// "tint" is a one-line note on which way the gray leans.
// "brand" is the main accent color as used in the UI, with a note on how it is used.
// Leave `light` out if you only sampled dark mode (and `dark` out if only light).
// The screenshots these were sampled from live in /grey examples from popular sites.

window.GRAY_EXAMPLES = [
  {
    name: "Claude (claude.ai)",
    tint: "neutral page, warm cards",
    url: "https://claude.ai",
    dark:  { page: "#151515", card: "#20201f", border: "#363635", secondaryText: "#898782", text: "#f0efec" },
    light: { page: "#fcfcfb", muted: "#edece9", border: "#e0e0df", secondaryText: "#898782", text: "#0b0b0b" },
    brand: { hex: "#cc7c5e", note: "Terracotta orange for the logo and small accents only. Buttons are neutral." },
    notes: "Sidebar is one step darker than the page (#111111). Text is off-white with a warm cast, never #fff.",
  },
  {
    name: "Claude Code Docs",
    tint: "zinc-950 page, warm card",
    url: "https://code.claude.com/docs",
    dark:  { page: "#09090b", card: "#1c1817", border: "#1a1a1c", secondaryText: "#9e9e9e", text: "#dedede" },
    brand: { hex: "#cda484", note: "Tan/gold for eyebrow labels, active tabs, and current links. Primary button is white." },
    notes: "Exactly Tailwind zinc-950 for the page, with a warm brown-gray for the active sidebar item.",
  },
  {
    name: "Vercel dashboard / Geist",
    tint: "pure neutral, true black page",
    url: "https://vercel.com/geist/colors",
    dark:  { page: "#000000", card: "#0a0a0a", border: "#252525", secondaryText: "#a1a1a1", text: "#ededed" },
    light: { page: "#ffffff", muted: "#fafafa", border: "#eaeaea", secondaryText: "#666666", text: "#171717" },
    brand: { hex: "#0070f3", note: "Black-and-white brand. Primary buttons are white on dark, black on light. Blue (#62a6ff on dark) is for links only." },
    notes: "Geist gray scale on dark: #191919 #1f1f1f #292929 #2e2e2e #454545 #878787 #8f8f8f #7d7d7d #a1a1a1 #ededed. Two backgrounds: #0a0a0a and #000.",
  },
  {
    name: "xAI / Grok docs",
    tint: "pure neutral, true white text",
    url: "https://docs.x.ai",
    dark:  { page: "#0a0a0a", card: "#121212", border: "#1a1c1f", secondaryText: "#9d9d9d", text: "#ffffff" },
    light: { page: "#ffffff", muted: "#f6f7f9", border: "#e8eaef", secondaryText: "#6c6c6c", text: "#0a0a0a" },
    brand: { hex: "#ed6e30", note: "Orange for inline code, links, and the outlined secondary button. Primary button is white on dark, black on light." },
    notes: "Borders lean slightly blue (#1a1c1f, #e8eaef) while the fills stay neutral.",
  },
  {
    name: "Supabase",
    tint: "green-tinted, hue ~120",
    url: "https://supabase.com/dashboard",
    dark:  { page: "#131413", card: "#191a19", border: "#292a29", secondaryText: "#999a99", text: "#edefee" },
    brand: { hex: "#29613d", note: "Primary button is a deep green fill with white text. The logo green (#6ccc93) is too light for white text, so it stays a logo." },
    notes: "Every gray carries a 1–2% green tint from the brand. Input fields are one step darker than the page.",
  },
  {
    name: "Lovable",
    tint: "warm neutral, lifted like Discord",
    url: "https://lovable.dev",
    dark:  { page: "#1d1d1c", card: "#272726", border: "#3a3a38", secondaryText: "#a6a6a5", text: "#e1e1e0" },
    brand: { hex: "#874ef6", note: "Violet for Upgrade, blue (#7d9df0) for the active Preview tab. Main text is #e1e1e0, well under white." },
    notes: "Three lifted layers side by side: sidebar #171716, chat #1d1d1c, preview #212120. No near-black anywhere.",
  },
  {
    name: "Base44",
    tint: "warm gray page, white cards (inverted)",
    url: "https://base44.com",
    light: { page: "#eeeceb", muted: "#ffffff", border: "#e2dfdd", secondaryText: "#6d6a68", text: "#1e1e24" },
    brand: { hex: "#ed742e", note: "Orange for the logo and the submit button. The main call-to-action is a near-black button (#1e1e24). Blue (#3e50de) for one highlighted nav link." },
    notes: "Light mode with a warm stone page and pure white cards on top. Depth comes from the card being lighter than the page.",
  },
  {
    name: "GitHub / Primer",
    tint: "cool, blue-tinted",
    url: "https://primer.style/foundations/color",
    dark:  { page: "#0d1117", card: "#161b22", border: "#30363d", secondaryText: "#8b949e", text: "#e6edf3" },
    light: { page: "#ffffff", muted: "#f6f8fa", border: "#d0d7de", secondaryText: "#57606a", text: "#24292f" },
    brand: { hex: "#238636", note: "Green for the primary button. Blue (#2f81f7) for links." },
  },
  {
    name: "Discord",
    tint: "cool, lifted (not near-black)",
    url: "https://discord.com",
    dark:  { page: "#313338", card: "#2b2d31", border: "#1e1f22", secondaryText: "#949ba4", text: "#dbdee1" },
    brand: { hex: "#5865f2", note: "Blurple for primary buttons and links." },
  },
  {
    name: "Notion",
    tint: "neutral, soft",
    url: "https://notion.so",
    dark:  { page: "#191919", card: "#202020", border: "#2f2f2f", secondaryText: "#9b9b9b", text: "#d4d4d4" },
    light: { page: "#ffffff", muted: "#f7f7f5", border: "#e9e9e7", secondaryText: "#787774", text: "#37352f" },
    brand: { hex: "#2383e2", note: "Blue for primary buttons and links. Everything else is neutral." },
  },
  {
    name: "Apple iOS",
    tint: "true black + gray layers",
    url: "https://developer.apple.com/design/human-interface-guidelines/color",
    dark:  { page: "#000000", card: "#1c1c1e", border: "#38383a", secondaryText: "#8e8e93", text: "#ffffff" },
    light: { page: "#ffffff", muted: "#f2f2f7", border: "#c6c6c8", secondaryText: "#8e8e93", text: "#000000" },
    brand: { hex: "#007aff", note: "System blue for tint color, links, and toggles." },
  },
  {
    name: "Material 3",
    tint: "warm-violet tint",
    url: "https://m3.material.io/styles/color/system/overview",
    dark:  { page: "#141218", card: "#211f26", border: "#49454f", secondaryText: "#cac4d0", text: "#e6e0e9" },
    brand: { hex: "#6750a4", note: "Baseline primary purple. Light mode uses it as a fill with white text." },
  },
];

// Full 11-step reference scales (950 → 50). These have every step, unlike the
// screenshots above, which only show the steps each site happened to use.
// "anchor" is the step the picker loads as your dark background (Rule 1: not #000).
window.GRAY_SCALES = [
  { name: "zinc", tint: "neutral (Tailwind)", anchor: "#09090b",
    steps: ["#09090b", "#18181b", "#27272a", "#3f3f46", "#52525b", "#71717a", "#a1a1aa", "#d4d4d8", "#e4e4e7", "#f4f4f5", "#fafafa"] },
  { name: "slate", tint: "cool (Tailwind)", anchor: "#020617",
    steps: ["#020617", "#0f172a", "#1e293b", "#334155", "#475569", "#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0", "#f1f5f9", "#f8fafc"] },
  { name: "stone", tint: "warm (Tailwind)", anchor: "#0c0a09",
    steps: ["#0c0a09", "#1c1917", "#292524", "#44403c", "#57534e", "#78716c", "#a8a29e", "#d6d3d1", "#e7e5e4", "#f5f5f4", "#fafaf9"] },
  { name: "Geist gray", tint: "pure neutral (Vercel, dark)", anchor: "#0a0a0a",
    steps: ["#000000", "#0a0a0a", "#191919", "#1f1f1f", "#292929", "#2e2e2e", "#454545", "#878787", "#8f8f8f", "#a1a1a1", "#ededed"] },
];
