import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Check, X, ArrowRight, GitBranch, Zap, Globe } from 'lucide-react'

export default function ComparePage() {
    const rows = [
        { feature: 'Conversation branching', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Side-by-side variant comparison', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Merge branches back together', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Import from ChatGPT/Claude/Gemini', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Run multiple agents simultaneously', bonsai: true, chatgpt: 'Projects', claude: 'Projects', copilot: false },
        { feature: 'Scheduled/cron-based prompts', bonsai: true, chatgpt: 'Tasks', claude: false, copilot: false },
        { feature: 'Declarative AI workflows', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Variable fan-out (CSV to prompts)', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Meta agents (AI managing AI)', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Event hooks and bindings', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Agent harness integration', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'MCP server generation', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Building block marketplace', bonsai: true, chatgpt: 'GPTs', claude: false, copilot: false },
        { feature: 'Local-first with data ownership', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Full audit trail', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'RBAC permissions system', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Budget/cost governance', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: '14+ AI providers', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Evaluations & A/B testing', bonsai: true, chatgpt: false, claude: false, copilot: false },
        { feature: 'Works offline (local models)', bonsai: true, chatgpt: false, claude: false, copilot: false },
    ]

    function renderCell(val: boolean | string) {
        if (val === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />
        if (val === false) return <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
        return <span className="text-xs text-amber-500 font-medium">{val}</span>
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6">vs the competition</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Bonsai vs. linear chat tools
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        ChatGPT and Claude are chat tools. Bonsai is an AI operating system.
                        Here's the difference.
                    </p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-4 px-4 font-bold text-lg">Feature</th>
                                <th className="text-center py-4 px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                                            <GitBranch className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-green-600">Bonsai</span>
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Zap className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-bold">ChatGPT</span>
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Globe className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-bold">Claude</span>
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Zap className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-bold">Copilot</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-muted/20' : ''}>
                                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                                    <td className="py-3 px-4">{renderCell(row.bonsai)}</td>
                                    <td className="py-3 px-4">{renderCell(row.chatgpt)}</td>
                                    <td className="py-3 px-4">{renderCell(row.claude)}</td>
                                    <td className="py-3 px-4">{renderCell(row.copilot)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Deep Comparison Cards */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Where Bonsai shifts the paradigm</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-2 border-green-500/20 p-8">
                            <GitBranch className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Linear vs. Tree</h3>
                            <p className="text-muted-foreground mb-4">
                                ChatGPT gives you <strong>one path</strong>. Bonsai gives you a <strong>tree</strong>. Branch at any message, explore alternatives, compare outcomes. No context lost. No history discarded.
                            </p>
                            <p className="text-xs text-muted-foreground">
                                <strong>Saved:</strong> 83% fewer tokens when exploring 5 alternatives.
                            </p>
                        </Card>
                        <Card className="border-2 border-blue-500/20 p-8">
                            <Zap className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Single-model vs. Multi-agent</h3>
                            <p className="text-muted-foreground mb-4">
                                Claude is <strong>one model</strong> at a time. Bonsai runs <strong>multiple agents</strong> — each with its own model, tools, and memory — simultaneously. Orchestrate, don't prompt.
                            </p>
                            <p className="text-xs text-muted-foreground">
                                <strong>Example:</strong> Security reviewer + style checker + performance analyst — all at once.
                            </p>
                        </Card>
                        <Card className="border-2 border-orange-500/20 p-8">
                            <Globe className="w-10 h-10 text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Vendor-locked vs. Any provider</h3>
                            <p className="text-muted-foreground mb-4">
                                Copilot is <strong>locked to Microsoft</strong>. Bonsai works with <strong>14+ providers</strong> — OpenAI, Anthropic, Google, local models, or your own — and can switch mid-conversation.
                            </p>
                            <p className="text-xs text-muted-foreground">
                                <strong>Freedom:</strong> Local-only mode keeps sensitive data off the cloud entirely.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The tools you're using are chat apps.
                        <br />
                        Bonsai is an AI operating system.
                    </h2>
                    <p className="text-xl text-green-50/80 max-w-2xl mx-auto mb-10">
                        Branching, orchestration, automation, and full data ownership.
                        Why settle for a chat window?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8" asChild>
                            <Link href="/docs">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
                            <Link href="/features">Explore Features</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
