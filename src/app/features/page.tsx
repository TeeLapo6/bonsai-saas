
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    GitBranch,
    Radio,
    Moon,
    Clock,
    Zap,
    Eye,
    Sparkles,
    GitMerge,
    RotateCcw,
    Plane,
    Target,
    Activity,
    ArrowRight,
    Play,
    Terminal,
    Layers,
    Box,
    Cpu,
    Workflow
} from 'lucide-react'

export default function FeaturesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6">Core Capabilities</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Three paradigms that change everything
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Bonsai isn't just another AI tool. It's a fundamentally different way to interact with intelligent systems—
                        built around branching, autonomy, and automation.
                    </p>
                </div>
            </section>

            {/* Feature 1: Git for LLMs */}
            <section id="branching" className="py-20 lg:py-32">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600">
                                <GitBranch className="w-5 h-5" />
                                <span className="font-semibold">Branching & Variants</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Git for LLMs: Because your thinking isn't linear
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Every conversation becomes a tree, not a line. Fork at any point to explore
                                "what if" scenarios. Compare different approaches side-by-side. Merge the best insights back together.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border bg-card">
                                    <GitBranch className="w-8 h-8 text-green-500 mb-3" />
                                    <h3 className="font-bold mb-1">Branch Anywhere</h3>
                                    <p className="text-sm text-muted-foreground">Fork from any message to explore alternatives</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Sparkles className="w-8 h-8 text-green-500 mb-3" />
                                    <h3 className="font-bold mb-1">Variant Testing</h3>
                                    <p className="text-sm text-muted-foreground">A/B test prompts with identical context</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <GitMerge className="w-8 h-8 text-green-500 mb-3" />
                                    <h3 className="font-bold mb-1">Merge Insights</h3>
                                    <p className="text-sm text-muted-foreground">Synthesize learnings from parallel paths</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <RotateCcw className="w-8 h-8 text-green-500 mb-3" />
                                    <h3 className="font-bold mb-1">Full History</h3>
                                    <p className="text-sm text-muted-foreground">Rewind, replay, and never lose progress</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="hidden lg:block">
                            <div className="rounded-2xl border bg-card p-8 shadow-xl">
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-green-500" />
                                        <div className="flex-1 h-0.5 bg-green-500" />
                                        <span className="text-muted-foreground">main</span>
                                    </div>
                                    <div className="ml-8 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-blue-500" />
                                            <div className="flex-1 h-0.5 bg-blue-500" />
                                            <span className="text-muted-foreground">optimistic-tone</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-purple-500" />
                                            <div className="flex-1 h-0.5 bg-purple-500" />
                                            <span className="text-muted-foreground">skeptical-tone</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-orange-500" />
                                            <div className="flex-1 h-0.5 bg-orange-500" />
                                            <span className="text-muted-foreground">experiment-v2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 text-center text-sm text-muted-foreground">
                                    4 active branches • 23 messages explored
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Air Traffic Control */}
            <section id="orchestration" className="py-20 lg:py-32 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual */}
                        <div className="hidden lg:block order-2 lg:order-1">
                            <div className="rounded-2xl border bg-card p-8 shadow-xl">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                                        <div className="flex items-center gap-3">
                                            <Plane className="w-5 h-5 text-green-500" />
                                            <span className="font-medium">Research Agent</span>
                                        </div>
                                        <Badge variant="outline" className="text-green-600">Active</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10">
                                        <div className="flex items-center gap-3">
                                            <Plane className="w-5 h-5 text-blue-500" />
                                            <span className="font-medium">Code Review Agent</span>
                                        </div>
                                        <Badge variant="outline" className="text-blue-600">Active</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                                        <div className="flex items-center gap-3">
                                            <Plane className="w-5 h-5 text-muted-foreground" />
                                            <span className="font-medium">Report Generator</span>
                                        </div>
                                        <Badge variant="outline">Waiting</Badge>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                                    <Activity className="w-4 h-4 inline mr-2" />
                                    2 agents flying • 1 on standby
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600">
                                <Radio className="w-5 h-5" />
                                <span className="font-semibold">Multi-Agent Orchestration</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Air Traffic Control: Command your fleet
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                This isn't a co-pilot sitting next to you. It's not even auto-pilot flying one plane.
                                You're the air traffic controller—coordinating multiple autonomous agents without babysitting each one.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border bg-card">
                                    <Plane className="w-8 h-8 text-blue-500 mb-3" />
                                    <h3 className="font-bold mb-1">Multiple Agents</h3>
                                    <p className="text-sm text-muted-foreground">Run specialized agents for different tasks</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Target className="w-8 h-8 text-blue-500 mb-3" />
                                    <h3 className="font-bold mb-1">Goal-Oriented</h3>
                                    <p className="text-sm text-muted-foreground">Define objectives, not step-by-step instructions</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Activity className="w-8 h-8 text-blue-500 mb-3" />
                                    <h3 className="font-bold mb-1">Full Observability</h3>
                                    <p className="text-sm text-muted-foreground">See what every agent is doing in real-time</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Eye className="w-8 h-8 text-blue-500 mb-3" />
                                    <h3 className="font-bold mb-1">Audit Trail</h3>
                                    <p className="text-sm text-muted-foreground">Complete history of every decision and action</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Automation (Softened Language) */}
            <section id="automation" className="py-20 lg:py-32">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600">
                                <Moon className="w-5 h-5" />
                                <span className="font-semibold">Scheduling & Triggers</span>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight">
                                Work While You Sleep: Tireless automation
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Put your agents to work overnight. Schedule recurring tasks, set up event triggers,
                                or configure them to watch and wait for the right moment to act proactively.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border bg-card">
                                    <Clock className="w-8 h-8 text-orange-500 mb-3" />
                                    <h3 className="font-bold mb-1">Scheduled Actions</h3>
                                    <p className="text-sm text-muted-foreground">Run agents on any schedule you define</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Zap className="w-8 h-8 text-orange-500 mb-3" />
                                    <h3 className="font-bold mb-1">Event Triggers</h3>
                                    <p className="text-sm text-muted-foreground">React to external events instantly</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Eye className="w-8 h-8 text-orange-500 mb-3" />
                                    <h3 className="font-bold mb-1">Watch & Wait</h3>
                                    <p className="text-sm text-muted-foreground">Monitor conditions and act when ready</p>
                                </div>
                                <div className="p-4 rounded-xl border bg-card">
                                    <Play className="w-8 h-8 text-orange-500 mb-3" />
                                    <h3 className="font-bold mb-1">Proactive Agents</h3>
                                    <p className="text-sm text-muted-foreground">Let agents take initiative when appropriate</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="hidden lg:block">
                            <div className="rounded-2xl border bg-card p-8 shadow-xl">
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="p-3 rounded-lg bg-orange-500/10 flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-orange-500" />
                                        <span>Every Morning at 6 AM — "Daily Brief"</span>
                                    </div>
                                    <div className="p-3 rounded-lg bg-orange-500/10 flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-orange-500" />
                                        <span>On New Ticket — "Triage Issue"</span>
                                    </div>
                                    <div className="p-3 rounded-lg bg-green-500/10 flex items-center gap-3 animate-pulse">
                                        <Play className="w-5 h-5 text-green-500" />
                                        <span>RUNNING: Overnight Market Analysis</span>
                                    </div>
                                </div>
                                <div className="mt-6 text-center text-sm text-muted-foreground">
                                    <Moon className="w-4 h-4 inline mr-2" />
                                    Wake up to completed research
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: How Agents Stack Up */}
            <section className="py-20 lg:py-32 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            How do your agents stack up?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Bonsai uses a modular architecture. Chain atomic blocks into powerful workflows.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* 1. Blocks */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                            <div className="relative p-6 text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-background border-2 border-green-200 rounded-xl flex items-center justify-center shadow-sm">
                                    <Box className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold">1. Blocks</h3>
                                <p className="text-sm text-muted-foreground">
                                    The atomic units. Prompts, Tools, and Models. Simple, reusable, and sharable via the Hub.
                                </p>
                            </div>
                            {/* Connector Arrow for Desktop */}
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-muted-foreground/30">
                                <ArrowRight size={24} />
                            </div>
                        </div>

                        {/* 2. Components */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                            <div className="relative p-6 text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-background border-2 border-blue-200 rounded-xl flex items-center justify-center shadow-sm">
                                    <Layers className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold">2. Components</h3>
                                <p className="text-sm text-muted-foreground">
                                    Combine blocks into reusable Skills and Chains. Define specific behaviors and logic.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-muted-foreground/30">
                                <ArrowRight size={24} />
                            </div>
                        </div>

                        {/* 3. Agents */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                            <div className="relative p-6 text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-background border-2 border-purple-200 rounded-xl flex items-center justify-center shadow-sm">
                                    <Cpu className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold">3. Agents</h3>
                                <p className="text-sm text-muted-foreground">
                                    The autonomous actors. Give them personality, memory, and a set of components to execute tasks.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-muted-foreground/30">
                                <ArrowRight size={24} />
                            </div>
                        </div>

                        {/* 4. Workflows */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                            <div className="relative p-6 text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-background border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-sm">
                                    <Workflow className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold">4. Workflows</h3>
                                <p className="text-sm text-muted-foreground">
                                    Orchestrate multiple agents. Define complex parallel processes, hand-offs, and approvals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/hub">Explore the Block Hub</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-32 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to orchestrate?
                    </h2>
                    <p className="text-xl text-green-50/80 max-w-2xl mx-auto mb-10">
                        Start assembling your intelligent system today.
                        Download the platform and start for free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8" asChild>
                            <Link href="/docs/installation">Download Bonsai</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
                            <Link href="/pricing">
                                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
