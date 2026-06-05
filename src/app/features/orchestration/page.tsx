import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { ChainPipelineDiagram, DialogueDiagram, HookSystemDiagram } from '@/components/diagrams'
import {
    Radio, Plane, Target, Activity, Eye, Network, Workflow,
    Combine, Users, GitMerge, ArrowRight, Brain, MessageCircle
} from 'lucide-react'

export default function OrchestrationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-500/10 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-blue-600 text-white">Orchestration</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Air Traffic Control
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                            for your agent fleet.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        This isn't a co-pilot sitting next to you. You're the air traffic controller —
                        coordinating multiple autonomous agents without babysitting each one.
                    </p>
                </div>
            </section>

            {/* Multi-Agent Fleet */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600">
                                <Plane className="w-5 h-5" />
                                <span className="font-semibold">Multi-Agent Fleet</span>
                            </div>
                            <h2 className="text-3xl font-bold">Specialized agents for specialized tasks</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Run a security reviewer, a style checker, a performance analyst, and a
                                documentation writer — all from one console. Each agent has its own
                                model, system prompt, tools, and knowledge base.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Target, title: 'Goal-Oriented', desc: 'Define objectives, not step-by-step instructions. Agents figure out how.' },
                                    { icon: Activity, title: 'Full Observability', desc: 'Real-time status dashboard. See what every agent is doing right now.' },
                                    { icon: Eye, title: 'Complete Audit Trail', desc: 'Every decision, every tool call, every response — logged and searchable.' },
                                    { icon: Network, title: 'Agent Dimensions', desc: 'Fine-tune agent behavior with per-dimension parameter overrides.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-blue-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ImagePlaceholder label="[Screenshot: agent fleet dashboard showing multiple agents with active/standby status indicators]" className="min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Chains */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ChainPipelineDiagram className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600">
                                <Workflow className="w-5 h-5" />
                                <span className="font-semibold">Chains</span>
                            </div>
                            <h2 className="text-3xl font-bold">Pipeline your prompts like Unix pipes</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Chains run agents in sequence. Each stage gets the output of the previous
                                one. Use aggregation strategies — majority vote, best-of, concatenate — to
                                synthesize multi-agent responses into a single output.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Combine, title: 'Aggregation Strategies', desc: 'Random, majority-vote, best-of, or concatenate — you choose how responses combine.' },
                                    { icon: GitMerge, title: 'Loopable', desc: 'Chains can loop with configurable termination conditions.' },
                                    { icon: Activity, title: 'Step Tracking', desc: 'See progress at every chain level. Know what stage each agent is at.' },
                                    { icon: Workflow, title: 'Declarative Specs', desc: 'Define chains as versioned TOML files. Infrastructure-as-code for AI pipelines.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-purple-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dialogues */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">Dialogues</span>
                            </div>
                            <h2 className="text-3xl font-bold">Let your agents talk to each other</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Dialogues are multi-agent conversations. Run them in parallel (all
                                respond to the same prompt) or as a chain (each sees the prior response).
                                Define cycles, termination conditions, and bridge prompts.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Users, title: 'Parallel Mode', desc: 'All agents respond simultaneously to the same input. Collect the best answer.' },
                                    { icon: GitMerge, title: 'Chain Mode', desc: 'Agents respond in sequence. Each builds on the last.' },
                                    { icon: MessageCircle, title: 'Configurable Cycles', desc: 'Define how many rounds of dialogue to run. Let the conversation evolve.' },
                                    { icon: Eye, title: 'Auto-Termination', desc: 'Consensus detection, keyword triggers, timeouts, token budgets — set your own kill switches.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-cyan-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <DialogueDiagram className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Meta Agents */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <HookSystemDiagram className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600">
                                <Brain className="w-5 h-5" />
                                <span className="font-semibold">Meta Agents</span>
                            </div>
                            <h2 className="text-3xl font-bold">AI agents that manage AI agents</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Meta agents observe, annotate, and act on conversations. Attach a
                                meta agent to any hook point — message send, tool call, prompt input —
                                and give it scoped permission to intervene.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Brain, title: 'Observation Scopes', desc: 'Single message, full conversation, or entire workspace. You set the boundaries.' },
                                    { icon: Eye, title: 'Action Grants', desc: 'Warn, block, reroute, or transform. Meta agents can intervene at any hook point.' },
                                    { icon: Activity, title: 'Topic Tracking', desc: 'Visual divergence detection. See when conversations drift from their intended path.' },
                                    { icon: Network, title: 'Intercept Rules', desc: 'Define policies as cards. Test with a harness before deploying.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-pink-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-blue-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to command your fleet?
                    </h2>
                    <p className="text-xl text-blue-50/80 max-w-2xl mx-auto mb-10">
                        From single-agent chats to multi-agent dialogues — Bonsai scales with you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8" asChild>
                            <Link href="/docs">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
