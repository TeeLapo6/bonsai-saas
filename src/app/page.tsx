import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TokenSavingsDiagram } from '@/components/diagrams'
import { ArrowRight, GitBranch, Radio, Moon, Zap, Clock, Sparkles, GitMerge, RotateCcw, Plane, Target, Activity } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-background text-foreground border-b">
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full">
                            The AI Operating System
                        </Badge>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight">
                            Your thinking isn't linear.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">
                                Your AI shouldn't be.
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[750px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
                            Bonsai is a Git-inspired AI execution engine. Branch conversations like code,
                            orchestrate agent fleets like an air traffic controller, and automate AI
                            workflows that run while you sleep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                                <Link href="/docs">
                                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all" asChild>
                                <Link href="/features">
                                    Explore Platform
                                </Link>
                            </Button>
                        </div>

                        {/* Terminal Preview */}
                        <div className="mt-12 w-full max-w-4xl rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden hidden md:block">
                            <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/50">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="text-xs text-muted-foreground ml-2 font-mono">bonsai orchestrator</div>
                            </div>
                            <div className="p-6 font-mono text-sm text-left overflow-x-auto bg-black text-green-400">
                                <div className="mb-2">$ bonsai parallel &quot;Compare approaches to X&quot; --agents gpt-4o,claude-3-opus,gemini-1.5-pro</div>
                                <div className="mb-4 text-white">✓ 3 agents responding in parallel. Collecting outputs...</div>
                                <div className="mb-2">$ bonsai branch &quot;explore-alternative-approach&quot; --from HEAD~3</div>
                                <div className="mb-4 text-gray-400">➤ Branch created. 4 parallel explorations now active.</div>
                                <div className="mb-2">$ bonsai chain &quot;security-review-chain&quot; --agents security-agent,style-agent,perf-agent</div>
                                <div className="mb-4 text-gray-400">➤ Chain executing: 3 stages | Aggregation: best-of</div>
                                <div className="text-blue-400">$ bonsai status</div>
                                <div className="text-gray-400">🌳 5 agents active | 12 branches | 2 chains running | 1 awaiting trigger</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
            </section>

            {/* Four Pillars */}
            <section className="py-20 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Four paradigm shifts
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            From linear chat to tree-based exploration. From single-model to multi-agent orchestration.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Pillar 1: Branching */}
                        <Link href="/features/branching" className="group">
                            <Card className="border-2 hover:border-green-500/50 transition-all h-full hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                        <GitBranch className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl">Git for LLMs</CardTitle>
                                    <CardDescription className="text-base">
                                        Branch, merge, graft, and explore. Save 83% on tokens.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-green-500" />
                                            <span>Branch from any message in history</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <GitMerge className="w-4 h-4 text-green-500" />
                                            <span>Merge paths. Graft insights between conversations</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <RotateCcw className="w-4 h-4 text-green-500" />
                                            <span>A/B test prompts with variant parallel view</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-green-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Pillar 2: Orchestration */}
                        <Link href="/features/orchestration" className="group">
                            <Card className="border-2 hover:border-blue-500/50 transition-all h-full hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                        <Radio className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl">Air Traffic Control</CardTitle>
                                    <CardDescription className="text-base">
                                        Multi-agent fleets, chains, dialogues, and meta agents.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Plane className="w-4 h-4 text-blue-500" />
                                            <span>Run multiple specialized agents simultaneously</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Target className="w-4 h-4 text-blue-500" />
                                            <span>Pipeline chains with aggregation strategies</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Activity className="w-4 h-4 text-blue-500" />
                                            <span>Meta agents: AI that manages your AI</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Pillar 3: Automation */}
                        <Link href="/features/automation" className="group">
                            <Card className="border-2 hover:border-orange-500/50 transition-all h-full hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                        <Moon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl">Work While You Sleep</CardTitle>
                                    <CardDescription className="text-base">
                                        Scheduled agents, webhook triggers, and variable fan-out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-orange-500" />
                                            <span>Cron scheduling with autonomous background loops</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-orange-500" />
                                            <span>Event hooks, webhook triggers, and risk policies</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-orange-500" />
                                            <span>Variable fan-out: one prompt → 500 personalized outputs</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-orange-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Pillar 4: Integrations */}
                        <Link href="/features/integrations" className="group">
                            <Card className="border-2 hover:border-violet-500/50 transition-all h-full hover:shadow-lg cursor-pointer">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                        <Zap className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl">Your Ecosystem</CardTitle>
                                    <CardDescription className="text-base">
                                        Import chats, connect agents, browse 180+ community blocks.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-violet-500" />
                                            <span>Import from ChatGPT, Claude, Gemini, Grok</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-violet-500" />
                                            <span>Agent harness framework for coding agents</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-violet-500" />
                                            <span>MCP server generation from any function block</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-violet-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Token Savings Teaser */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">
                                Branching saves you money. Literally.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                In a linear chat tool, testing 5 different prompt strategies costs 5x the
                                context. Bonsai shares context across branches — the common prefix is only
                                tokens consumed once.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <Card className="p-4 bg-red-500/10 border-red-200">
                                    <p className="text-sm text-muted-foreground">Linear Chat</p>
                                    <p className="text-3xl font-bold text-red-600">1.2M</p>
                                    <p className="text-xs text-muted-foreground">tokens for 5 explorations</p>
                                </Card>
                                <Card className="p-4 bg-green-500/10 border-green-200">
                                    <p className="text-sm text-muted-foreground">Bonsai Branching</p>
                                    <p className="text-3xl font-bold text-green-600">200K</p>
                                    <p className="text-xs text-muted-foreground">tokens for 5 explorations</p>
                                </Card>
                            </div>
                            <Button variant="outline" className="rounded-full" asChild>
                                <Link href="/features/branching">See how branching works <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                        </div>
                        <TokenSavingsDiagram className="w-full min-h-[300px]" />
                    </div>
                </div>
            </section>

            {/* Use cases brief */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Who uses Bonsai?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        From prompt engineers to enterprise AI teams.
                    </p>
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-lg font-bold">Researchers</h3>
                            <p className="text-sm text-muted-foreground">Systematically test hypotheses across prompt variations with A/B testing.</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
                            <div className="text-4xl mb-4">👩‍💻</div>
                            <h3 className="text-lg font-bold">Developers</h3>
                            <p className="text-sm text-muted-foreground">Churn batches of PR reviews through multi-agent code review chains.</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-lg font-bold">Teams</h3>
                            <p className="text-sm text-muted-foreground">Share agents, tools, and best practices with RBAC permissions.</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
                            <div className="text-4xl mb-4">🌙</div>
                            <h3 className="text-lg font-bold">Night Owls</h3>
                            <p className="text-sm text-muted-foreground">Schedule overnight research chains. Wake up to synthesized findings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-32 border-t">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Stop scrolling. Start branching.
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join developers who've moved from reactive prompting to proactive AI orchestration.
                        Free forever on the Seed tier. No credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 rounded-full bg-green-600 hover:bg-green-700 text-white" asChild>
                            <Link href="/docs">Get Started Free</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 rounded-full" asChild>
                            <Link href="/compare">Compare to ChatGPT <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
