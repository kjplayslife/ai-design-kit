// app/design/page.tsx
// The "kitchen sink" — every token and part in one place.
// Open /design after every AI session. If it changed, something drifted.
//
// One-time setup:
//   npx shadcn@latest init
//   npx shadcn@latest add button card input label badge alert skeleton switch checkbox select
//   npm i lucide-react

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle2, Plus, Trash2 } from "lucide-react";

const colors = [
  { name: "background", cls: "bg-background border" },
  { name: "card", cls: "bg-card border" },
  { name: "primary", cls: "bg-primary" },
  { name: "secondary", cls: "bg-secondary" },
  { name: "muted", cls: "bg-muted" },
  { name: "accent", cls: "bg-accent" },
  { name: "destructive", cls: "bg-destructive" },
  { name: "success", cls: "bg-success" },
  { name: "warning", cls: "bg-warning" },
  { name: "info", cls: "bg-info" },
];

const spacing = [
  { n: 1, cls: "size-1" },
  { n: 2, cls: "size-2" },
  { n: 3, cls: "size-3" },
  { n: 4, cls: "size-4" },
  { n: 6, cls: "size-6" },
  { n: 8, cls: "size-8" },
  { n: 12, cls: "size-12" },
  { n: 16, cls: "size-16" },
  { n: 24, cls: "size-24" },
];

export default function DesignPage() {
  return (
    <div className="page space-y-12">
      {/* Title — exactly one text-5xl per page */}
      <header className="space-y-2">
        <h1>Design system</h1>
        <p className="text-muted-foreground">
          Every token and part this app uses. If it's not here, don't use it.
        </p>
      </header>

      {/* 1. Colors */}
      <section className="space-y-4">
        <h2>Colors</h2>
        <p className="text-sm text-muted-foreground">
          Named by job. 60% background · 30% card/muted · 10% primary.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {colors.map((c) => (
            <div key={c.name} className="space-y-2">
              <div className={`h-16 rounded-lg ${c.cls}`} />
              <p className="text-xs text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Text */}
      <section className="space-y-4">
        <h2>Text</h2>
        <div className="space-y-3">
          <p className="text-5xl font-semibold tracking-tight">Page title · text-5xl</p>
          <p className="text-2xl font-semibold tracking-tight">Section heading · text-2xl</p>
          <p className="text-lg font-medium">Card title · text-lg</p>
          <p className="text-base">Body text · text-base. The quick brown fox jumps over the lazy dog.</p>
          <p className="text-sm text-muted-foreground">Secondary text · text-sm text-muted-foreground</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Label · text-xs uppercase</p>
        </div>
      </section>

      {/* 3. Spacing */}
      <section className="space-y-4">
        <h2>Spacing</h2>
        <p className="text-sm text-muted-foreground">Only these steps. 1 = 4px.</p>
        <div className="flex items-end gap-4">
          {spacing.map((s) => (
            <div key={s.n} className="space-y-2 text-center">
              <div className={`bg-primary rounded-sm ${s.cls}`} />
              <p className="text-xs text-muted-foreground">{s.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Buttons */}
      <section className="space-y-4">
        <h2>Buttons</h2>
        <p className="text-sm text-muted-foreground">One default button per screen. The rest are outline or ghost.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button><Plus className="h-4 w-4" /> Create project</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive"><Trash2 className="h-4 w-4" /> Delete</Button>
          <Button disabled>Saving…</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" variant="outline" title="Add"><Plus className="h-4 w-4" /></Button>
        </div>
      </section>

      {/* 5. Badges + status */}
      <section className="space-y-4">
        <h2>Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Failed</Badge>
        </div>
      </section>

      {/* 6. Form parts */}
      <section className="space-y-4">
        <h2>Form</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Every input has a label. Errors show under the input.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" className="border-destructive" />
              <p className="text-sm text-destructive">Please enter a valid email.</p>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">I agree to the terms</Label>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notify">Email me updates</Label>
              <Switch id="notify" />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost">Cancel</Button>
              <Button>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 7. States */}
      <section className="space-y-4">
        <h2>States</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Loading</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Empty</CardTitle></CardHeader>
            <CardContent className="flex flex-col items-center gap-3 py-6 text-center">
              <p className="text-sm text-muted-foreground">No projects yet.</p>
              <Button size="sm"><Plus className="h-4 w-4" /> Create project</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Error</CardTitle></CardHeader>
            <CardContent>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Couldn't save</AlertTitle>
                <AlertDescription>Check your connection and try again.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
        <Alert>
          <CheckCircle2 className="h-4 w-4 text-success" />
          <AlertTitle>Saved</AlertTitle>
          <AlertDescription>Success messages are short. Use a toast for these in the real app.</AlertDescription>
        </Alert>
      </section>

      {/* 8. Shape + depth */}
      <section className="space-y-4">
        <h2>Shape and depth</h2>
        <div className="flex flex-wrap gap-4">
          <div className="h-16 w-24 rounded-md border bg-card" title="rounded-md" />
          <div className="h-16 w-24 rounded-lg border bg-card shadow-sm" title="rounded-lg shadow-sm" />
          <div className="h-16 w-24 rounded-lg border bg-card shadow-lg" title="rounded-lg shadow-lg" />
          <div className="h-16 w-16 rounded-full bg-muted" title="rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground">md for inputs and buttons · lg for cards · full for avatars. shadow-sm on cards, shadow-lg on popups. Nothing else.</p>
      </section>
    </div>
  );
}
