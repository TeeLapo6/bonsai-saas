import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TokenSavingsDiagram, MergeGraftDiagram, ConversationTreeMock, VariantCarouselMock } from '@/components/diagrams'
import { Card } from '@/components/ui/card'
import {
    GitBranch, GitMerge, RotateCcw, Sparkles, ArrowRight,
    TreePine, ArrowLeftRight, Diff, Copy, Layers, Code
} from 'lucide-react'

export default function BranchingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-green-500/10 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-green-600 text-white">Branching</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Your thinking isn't linear.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">
                            Your AI shouldn't be either.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Every conversation becomes a tree, not a line. Fork at any point to explore
                        "what if" scenarios. Compare outcomes side-by-side. Merge the best ideas.
                    </p>
                </div>
            </section>

            {/* Token Savings Infographic */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Save tokens by branching, not restarting</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                In a linear chat tool, exploring 5 different approaches means copying
                                context 5 times. With Bonsai, you branch from a shared ancestor — the
                                context is loaded once. Each new branch only costs the new messages.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
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
                            <p className="text-sm text-muted-foreground italic">
                                That's an 83% reduction. On production workloads, this translates to real money.
                            </p>
                        </div>
                        <TokenSavingsDiagram className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Branch Anywhere */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ConversationTreeMock className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600">
                                <GitBranch className="w-5 h-5" />
                                <span className="font-semibold">Branch from Any Point</span>
                            </div>
                            <h2 className="text-3xl font-bold">Branch at any message in a conversation</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Hit a fork in your thinking? Branch. Want to test a different prompt
                                strategy? Branch. Need to explore what the alternative model would say?
                                Branch. No context lost, no history discarded.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: GitBranch, title: 'Instant Fork', desc: 'Create a branch from any message in the tree with one click.' },
                                    { icon: Sparkles, title: 'Short IDs', desc: 'Conversations and branches get short numeric IDs — no UUIDs to copy.' },
                                    { icon: TreePine, title: 'Visual Tree', desc: 'See the entire conversation topology as an interactive graph.' },
                                    { icon: RotateCcw, title: 'Rewind & Replay', desc: 'Jump to any point in history. Your progress is never lost.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-green-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Merge & Graft */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600">
                                <GitMerge className="w-5 h-5" />
                                <span className="font-semibold">Merge & Graft</span>
                            </div>
                            <h2 className="text-3xl font-bold">Recombine your best ideas</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Merge branches within a conversation to synthesize learnings from parallel
                                paths. Graft messages across conversations to cross-pollinate insights
                                between different projects.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: GitMerge, title: 'Merge Branches', desc: 'Combine divergent exploration paths back together with bridge prompts.' },
                                    { icon: Layers, title: 'Graft Messages', desc: 'Inject messages from one conversation into another. Cross-project context transfer.' },
                                    { icon: Diff, title: 'Branch Diff', desc: 'Compare two branches side-by-side. See exactly where they diverged.' },
                                    { icon: Copy, title: 'Verbatim or Transformed', desc: 'Copy messages raw, or pipe them through an LLM for transformation during merge.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-green-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <MergeGraftDiagram className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Variants */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <VariantCarouselMock className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600">
                                <ArrowLeftRight className="w-5 h-5" />
                                <span className="font-semibold">Variants & A/B Testing</span>
                            </div>
                            <h2 className="text-3xl font-bold">A/B test prompts in parallel</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every message can have multiple variants — original, edited, regenerated, or
                                generated in parallel by different models. Activate the best one. Discard
                                the rest. Never lose a good idea.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Sparkles, title: 'Parallel Execution', desc: 'Send the same prompt to GPT-4o, Claude, and Gemini — all at once.' },
                                    { icon: ArrowLeftRight, title: 'Variant Carousel', desc: 'Swipe between sibling responses. Drag to reorder.' },
                                    { icon: Diff, title: 'String-level Diff', desc: 'Compare two variants with unified, inline, or side-by-side diff views.' },
                                    { icon: Code, title: 'Non-destructive', desc: 'Toggling variants never deletes alternatives. Experiment freely.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-orange-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Stop scrolling. Start branching.
                    </h2>
                    <p className="text-xl text-green-50/80 max-w-2xl mx-auto mb-10">
                        Join developers who've moved from linear chat to tree-based AI exploration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8" asChild>
                            <Link href="/docs">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
