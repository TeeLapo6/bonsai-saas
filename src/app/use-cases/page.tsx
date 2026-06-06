
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Microscope,
    Code2,
    Building2,
    Moon,
    GitBranch,
    Webhook,
    Cpu,
    FileSearch,
    MessageSquare,
    Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HUB_URL = process.env.NEXT_PUBLIC_BONSAI_HUB_URL || 'https://hub.bonsai-app.taylorlaporte.engineer'

export default function UseCasesPage() {
    const cases = [
        {
            title: "Prompt Engineering at Scale",
            icon: GitBranch,
            badge: "Branching",
            color: "green",
            desc: "Test hundreds of prompt variations in parallel. Branch at any point to explore alternatives, then compare results side-by-side to find what actually works.",
            solution: "Branch from any message, create variants, evaluate systematically",
            cta: "See Branching",
            href: "/features#branching"
        },
        {
            title: "Overnight Research Agents",
            icon: Moon,
            badge: "Automation",
            color: "orange",
            desc: "Schedule your research agent to work while you sleep. Wake up to synthesized findings, not a blank page. Let AI do the legwork overnight.",
            solution: "Cron scheduling + Research Agent preset",
            cta: "See Scheduling",
            href: "/features#automation"
        },
        {
            title: "Multi-Agent Code Review",
            icon: Code2,
            badge: "Orchestration",
            color: "blue",
            desc: "Coordinate specialized agents: one for security, one for style, one for performance. Get comprehensive PR reviews without babysitting each check.",
            solution: "Multi-agent orchestration + Webhook triggers",
            cta: "See Orchestration",
            href: "/features#orchestration"
        },
        {
            title: "Enterprise Knowledge Base",
            icon: Building2,
            badge: "Business",
            color: "purple",
            desc: "Ingest internal wikis and documents into a private RAG pipeline. Answer employee questions without leaking data to external providers.",
            solution: "Knowledge Base blocks + Local LLMs",
            cta: "Contact Sales",
            href: "/pricing"
        },
        {
            title: "CI/CD Integration",
            icon: Webhook,
            badge: "DevOps",
            color: "cyan",
            desc: "Trigger agents from GitHub actions, GitLab CI, or any webhook. Automate documentation updates, changelog generation, and release notes.",
            solution: "Webhook triggers + Harness presets",
            cta: "View Docs",
            href: "/docs"
        },
        {
            title: "Compliance & Audit",
            icon: Shield,
            badge: "Enterprise",
            color: "red",
            desc: "Every agent action is logged. Full audit trail for compliance. See exactly what was asked, what was returned, and when.",
            solution: "Built-in observability + Export logs",
            cta: "Learn More",
            href: "/features"
        }
    ]

    const colorClasses: Record<string, string> = {
        green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
        blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
        purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
        cyan: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
        red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    }

    return (
        <div className="container px-4 mx-auto py-20">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <Badge className="mb-4">Real-World Applications</Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Built for how you actually work
                </h1>
                <p className="text-xl text-muted-foreground">
                    See how teams use Bonsai's branching, orchestration, and automation
                    to solve problems that linear chat can't.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((c, i) => (
                    <Card key={i} className="flex flex-col border-2 hover:border-primary/40 transition-all group">
                        <CardHeader>
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl ${colorClasses[c.color]} flex items-center justify-center`}>
                                    <c.icon size={24} />
                                </div>
                                <Badge variant="secondary">{c.badge}</Badge>
                            </div>
                            <CardTitle className="text-xl">{c.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                {c.desc}
                            </p>
                            <div className="bg-muted p-3 rounded-lg flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-xs">{c.solution}</span>
                            </div>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button className="w-full" variant="outline" asChild>
                                <Link href={c.href}>{c.cta}</Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Quote Section */}
            <div className="mt-20 p-12 rounded-3xl bg-muted/50 border">
                <blockquote className="text-center max-w-3xl mx-auto">
                    <p className="text-2xl font-medium italic mb-6">
                        "We tested 200 prompt variations in a weekend. With linear chat,
                        that would have taken months. Branching changed everything."
                    </p>
                    <footer className="text-muted-foreground">
                        — ML Engineer at a Fortune 500 company
                    </footer>
                </blockquote>
            </div>

            {/* CTA */}
            <div className="mt-20 p-12 bg-green-600 rounded-3xl text-white flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold">Have a unique use case?</h2>
                <p className="max-w-xl text-green-50/80 text-lg">
                    Bonsai's modular architecture adapts to your workflow.
                    Tell us what you're building and we'll help you get there.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8">
                        Schedule a Call
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
                        <a href={HUB_URL} target="_blank" rel="noopener noreferrer">Browse Hub Blocks</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
