import {
  CheckCircle2,
  CircleDashed,
  Construction,
  Lightbulb,
  Circle,
  Clock,
} from "lucide-react";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapPage() {
  return (
    <div className="flex h-full flex-col items-center py-16 md:py-24">
      <div className="container max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Product Roadmap
          </h1>
          <p className="mt-4 text-xl text-muted-foreground text-balance">
            We are building the missing order editing layer for BigCommerce.
            Here is what we are working on.
          </p>
        </div>

        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="relative border-l-2 border-primary/20 pl-8 pb-4">
            <div className="absolute -left-[9px] top-0 bg-background py-1">
              <div className="size-4 rounded-full border-2 border-primary bg-primary animate-pulse" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">Phase 1: The Core</h2>
              <Badge variant="default" className="w-fit">
                In Progress
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">
              Focusing on the most frequent support tickets for registered
              customers.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              <FeatureCard
                description="Change color or size instantly (same-price items only)."
                title="Variant Swapping"
                status="in-progress"
                icon={Construction}
              />
              <FeatureCard
                description="Fix typos in shipping addresses before fulfillment."
                title="Address Correction"
                icon={CircleDashed}
                status="planned"
              />
              <FeatureCard
                description="Self-serve cancellation for awaiting-fulfillment orders."
                title="Instant Cancel"
                icon={CircleDashed}
                status="planned"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative border-l-2 border-muted pl-8 pb-4">
            <div className="absolute -left-[9px] top-0 bg-background py-1">
              <div className="size-4 rounded-full border-2 border-muted bg-background" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">
                Phase 2: The Guest Experience
              </h2>
              <Badge variant="outline" className="w-fit">
                Next Up
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">
              Solving the "Guest Order Tracking" gap in BigCommerce.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <FeatureCard
                description="A dedicated, branded status page for guest checkouts."
                title="Guest Order Portal"
                icon={Lightbulb}
                status="concept"
              />
              <FeatureCard
                description="Secure email-based login to edit orders without an account."
                title="Magic Link Access"
                icon={Lightbulb}
                status="concept"
              />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative border-l-2 border-muted pl-8 pb-4">
            <div className="absolute -left-[9px] top-0 bg-background py-1">
              <div className="size-4 rounded-full border-2 border-muted bg-background" />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">Phase 3: Advanced Control</h2>
              <Badge variant="secondary" className="w-fit">
                Future
              </Badge>
            </div>
            <p className="mt-2 text-muted-foreground">
              Granular rules for complex catalogs and logistics.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <FeatureCard
                description="Set time limits (e.g., '1 hour') or status-based rules."
                title="Edit Windows"
                status="concept"
                icon={Clock}
              />
              <FeatureCard
                description="Handle partial refunds when decreasing item quantities."
                title="Quantity Logic"
                status="concept"
                icon={Circle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  description,
  icon: Icon,
  status,
  title,
}: {
  status: "in-progress" | "planned" | "concept" | "done";
  description: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}) {
  return (
    <Card className="bg-card/50">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <Icon className={`size-5 ${getStatusColor(status)}`} />
          {status === "done" && (
            <CheckCircle2 className="size-4 text-primary" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="mt-1 text-xs">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "in-progress": {
      return "text-primary";
    }
    case "planned": {
      return "text-muted-foreground";
    }
    case "done": {
      return "text-primary";
    }
    default: {
      return "text-muted-foreground/50";
    }
  }
}
