import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, GitBranch, Radio, Moon, Upload, Brain, Workflow } from 'lucide-react'

export default function FeaturesPage() {
    const tiers = [
        {
            label: 'Branching',
            color: 'green',
            icon: GitBranch,
            title: 'Git for LLMs',
            desc: 'Every conversation is a tree, not a line. Branch, merge, graft, and compare. Explore alternatives without losing context — and save 83% on tokens.',
            href: '/features/branching',
            highlights: ['Branch from any message', 'Merge & graft across conversations', 'Side-by-side variant comparison', 'Non-destructive experiment loops'],
        },
        {
            label: 'Orchestration',
            color: 'blue',
            icon: Radio,
            title: 'Air Traffic Control',
            desc: 'Command a fleet of specialized agents. Run chains of multi-step pipelines. Host AI-to-AI dialogues. Meta agents watch and intervene.',
            href: '/features/orchestration',
            highlights: ['Multi-agent parallel execution', 'Configurable chains with aggregation', 'Dialogue cycles with termination conditions', 'Meta agents with scoped observation'],
        },
        {
            label: 'Automation',
            color: 'orange',
            icon: Moon,
            title: 'Work While You Sleep',
            desc: 'Schedule agents on cron. Trigger workflows via webhooks. Fan out one prompt across 500 CSV rows. Hooks enforce guardrails automatically.',
            href: '/features/automation',
            highlights: ['Cron-based scheduling', 'Declarative AI workflows', 'Variable fan-out from CSV data', 'Risk policy hooks & webhook triggers'],
        },
        {
            label: 'Integrations',
            color: 'violet',
            icon: Upload,
            title: 'Your Ecosystem, Your Data',
            desc: 'Import from ChatGPT, Claude, Gemini, and Grok. Orchestrate coding agents via harness framework. Generate MCP servers from functions. Browse 180+ community blocks.',
            href: '/features/integrations',
            highlights: ['Browser extension chat imports', 'Agent harness framework for pi/OpenClaw', 'mcpify: functions → MCP servers', 'Building block marketplace (180+ blocks)'],
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6">Platform Features</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Four paradigm shifts
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-violet-500">
                            that change everything.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Bonsai isn't just a better chat interface. It fundamentally changes
                        how you interact with AI — from linear conversations to tree-based exploration,
                        from single-model prompting to multi-agent orchestration.
                    </p>
                </div>
            </section>

            {/* Tier cards */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto space-y-16">
                    {tiers.map((tier, i) => (
                        <Card key={i} className={`border-2 hover:border-${tier.color}-500/50 transition-all overflow-hidden`}>
                            <div className="grid lg:grid-cols-2">
                                <div className={`p-8 lg:p-12 flex flex-col justify-center order-2 ${i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${tier.color}-500/10 text-${tier.color}-600 text-sm mb-4 w-fit`}>
                                        <tier.icon className={`w-4 h-4`} />
                                        <span className="font-semibold">{tier.label}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{tier.title}</h2>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{tier.desc}</p>
                                    <ul className="space-y-2 mb-6">
                                        {tier.highlights.map((h, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${tier.color}-500`} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        <Button variant="outline" asChild>
                                            <Link href={tier.href}>
                                                Explore {tier.label} <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className={`bg-${tier.color}-500/5 flex items-center justify-center p-8 lg:p-12 order-1 ${i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="text-center space-y-4">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${tier.color}-500 to-${tier.color}-400 flex items-center justify-center text-white mx-auto`}>
                                            <tier.icon className="w-10 h-10" />
                                        </div>
                                        <p className={`text-sm text-${tier.color}-600 font-medium`}>Tier {i + 1}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Bottom features grid */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">And everything you'd expect from a platform</h2>
                    <p className="text-center text-muted-foreground mb-16">Plus a lot you wouldn't.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Brain, title: 'Evaluations & A/B Testing', desc: 'Scientific comparison of agent/prompt/model configs with multi-dimensional scoring.' },
                            { icon: Workflow, title: '14+ AI Providers', desc: 'OpenAI, Anthropic, Google, Ollama, llama.cpp, DeepSeek, Groq, and more.' },
                            { icon: Brain, title: 'Embeddings & RAG', desc: 'Knowledge bases with chunking, retrieval, and smart activation. Local ONNX embeddings.' },
                            { icon: Brain, title: 'Persistent Memory', desc: 'Cross-conversation memories — facts, procedures, episodes, plans. Scoped via teams.' },
                        ].map((f, i) => (
                            <Card key={i} className="p-6 hover:border-primary/30 transition-colors">
                                <f.icon className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold mb-2">{f.title}</h3>
                                <p className="text-sm text-muted-foreground">{f.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to see what Bonsai can do?
                    </h2>
                    <p className="text-xl text-green-50/80 max-w-2xl mx-auto mb-10">
                        Start with branching. Discover orchestration. Automate your workflow.
                        All free on the Seed tier.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8" asChild>
                            <Link href="/pricing">View Plans <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
