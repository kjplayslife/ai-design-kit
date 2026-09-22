// app/page.tsx — Example landing page built by following DESIGN.md
//
// Prompt that made this:
//   "Read DESIGN.md and follow it. Build a landing page for Pantry, a shared
//    grocery list app for roommates. Sections: nav, hero, 3 features,
//    how it works, pricing, final call to action, footer."
//
// Check it against DESIGN.md:
//   - Every color is a job token (bg-primary, text-muted-foreground, border-border)
//   - One default <Button> per screen section; the rest are outline/ghost
//   - Spacing only from 2, 3, 4, 6, 8, 12, 16, 24
//   - One font, weights normal/medium/semibold
//   - Exactly one text-5xl (the h1)
//   - shadcn Button, Card, Badge — no hand-made buttons

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ListChecks, Users, Bell, ShoppingBasket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "One list for the whole house",
    body: "Everyone adds to the same list. No more three people buying milk.",
  },
  {
    icon: Bell,
    title: "Know when it's bought",
    body: "Check an item off and your roommates see it right away.",
  },
  {
    icon: ListChecks,
    title: "Split the cost",
    body: "Pantry keeps a simple tally of who paid for what this month.",
  },
];

const steps = [
  { n: 1, title: "Make a house", body: "Name it and share the invite link." },
  { n: 2, title: "Add what you need", body: "Type it or pick from your usual items." },
  { n: 3, title: "Shop and check off", body: "Whoever is at the store buys it. Everyone sees it." },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    note: "For one house",
    items: ["Up to 4 roommates", "One shared list", "Basic cost tally"],
    highlight: false,
  },
  {
    name: "Household",
    price: "$4",
    note: "per house / month",
    items: ["Unlimited roommates", "Lists per store", "Monthly cost report", "Recurring items"],
    highlight: true,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border">
        <nav className="page flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2 font-semibold no-underline">
            <ShoppingBasket className="h-5 w-5 text-primary" />
            Pantry
          </a>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild><a href="#pricing">Pricing</a></Button>
            <Button variant="outline" asChild><a href="/login">Log in</a></Button>
          </div>
        </nav>
      </header>

      <main className="space-y-24 pb-24">
        {/* Hero */}
        <section className="page pt-12 md:pt-24">
          <div className="max-w-3xl space-y-6">
            <Badge variant="secondary">Free for one house</Badge>
            <h1>The grocery list your roommates will actually use.</h1>
            <p className="text-lg text-muted-foreground">
              One shared list. Add what's missing, see what's bought, and stop buying
              things twice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild><a href="/signup">Start a house</a></Button>
              <Button size="lg" variant="outline" asChild><a href="#how">See how it works</a></Button>
            </div>
            <p className="text-sm text-muted-foreground">No credit card. Takes about a minute.</p>
          </div>

          {/* Product preview — real content, not a placeholder box */}
          <Card className="mt-12 max-w-md shadow-sm">
            <CardHeader>
              <CardTitle>Apartment 4B</CardTitle>
              <CardDescription>3 things left to buy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { item: "Oat milk", who: "Sam", done: true },
                { item: "Dish soap", who: "Priya", done: false },
                { item: "Eggs (12)", who: "Sam", done: false },
                { item: "Coffee beans", who: "Jordan", done: false },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-sm border ${
                        row.done ? "border-primary bg-primary text-primary-foreground" : "border-input"
                      }`}
                    >
                      {row.done && <Check className="h-3 w-3" />}
                    </span>
                    <span className={row.done ? "text-muted-foreground line-through" : ""}>{row.item}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{row.who}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="page space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2>Made for people who share a fridge</h2>
            <p className="text-muted-foreground">Three things Pantry does that a notes app doesn't.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <CardHeader>
                  <f.icon className="mb-2 h-5 w-5 text-primary" />
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works — a real sequence, so numbers are allowed */}
        <section id="how" className="page space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2>How it works</h2>
            <p className="text-muted-foreground">Three steps. Then it just runs.</p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {s.n}
                </span>
                <div className="space-y-1">
                  <h3>{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="page space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2>Pricing</h2>
            <p className="text-muted-foreground">Free covers most houses. Pay only if you need more.</p>
          </div>
          <div className="grid max-w-3xl gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <Card key={p.name} className={p.highlight ? "border-primary shadow-sm" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{p.name}</CardTitle>
                    {p.highlight && <Badge>Most houses</Badge>}
                  </div>
                  <p className="text-3xl font-semibold tracking-tight">
                    {p.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">{p.note}</span>
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-success" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={p.highlight ? "default" : "outline"} asChild>
                    <a href="/signup">{p.highlight ? "Start Household" : "Start free"}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final call to action */}
        <section className="page">
          <Card className="bg-muted">
            <CardContent className="flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h2>Stop buying milk twice.</h2>
                <p className="text-muted-foreground">Set up your house in about a minute.</p>
              </div>
              <Button size="lg" asChild><a href="/signup">Start a house</a></Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="page flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Pantry</p>
          <div className="flex gap-6">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:hi@pantry.app">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
