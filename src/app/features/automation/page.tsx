import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { VariableFanOutDiagram, HookSystemDiagram, ChainPipelineDiagram } from '@/components/diagrams'
import {
    Moon, Clock, Zap, Play, Eye, RefreshCw, CalendarClock,
    ArrowRight, Webhook, Shield, Workflow, Table
} from 'lucide-react'

export default function AutomationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-orange-500/10 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-orange-600 text-white">Automation</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Work While You Sleep.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                            Literally.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Schedule agents to run overnight. Set webhook triggers. Define event-driven
                        workflows. Your agents keep working long after you clock out.
                    </p>
                </div>
            </section>

            {/* Scheduler */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600">
                                <CalendarClock className="w-5 h-5" />
                                <span className="font-semibold">Scheduling & Cron</span>
                            </div>
                            <h2 className="text-3xl font-bold">Schedule anything on any schedule</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                One-time messages, recurring cron jobs, or autonomous background loops.
                                Your agents can claim pending tasks, deliver scheduled messages, and
                                run completions on a 60-second tick — entirely without you.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Clock, title: 'Cron Scheduling', desc: 'Full 5-field cron expressions. Every morning at 6 AM, every Monday, or every 5 minutes.' },
                                    { icon: Play, title: 'One-Shot Messages', desc: 'Schedule a prompt to fire at a specific datetime. Set it and forget it.' },
                                    { icon: RefreshCw, title: 'Autonomous Loop', desc: 'Background agents poll for tasks every 60s. Self-running AI workers.' },
                                    { icon: Eye, title: 'Policy Escalation', desc: 'Auto-escalate blocked tasks. Auto-checkpoint. Deadline marking.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-orange-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ImagePlaceholder label="[Screenshot: schedule modal showing cron config, one-shot datetime picker, and scheduled message list]" className="min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Workflows */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ChainPipelineDiagram className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600">
                                <Workflow className="w-5 h-5" />
                                <span className="font-semibold">Workflows</span>
                            </div>
                            <h2 className="text-3xl font-bold">Codify your AI process into repeatable workflows</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Define declarative, versioned workflows with steps, input validation,
                                and artifact tracking. Run them with <code>--detach</code> and check
                                results later. Replay them with different inputs.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Workflow, title: 'Declarative Specs', desc: 'Define workflows as versioned TOML or JSON. Git-track your AI processes.' },
                                    { icon: ArrowRight, title: 'Step Execution', desc: 'Each step is an agent call with validated inputs and outputs.' },
                                    { icon: RefreshCw, title: 'Replayable', desc: 'Run the same workflow with new inputs. Compare results across runs.' },
                                    { icon: Eye, title: 'Run History', desc: 'Every run is tracked. Status, artifacts, and timing — all auditable.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-amber-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hooks */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600">
                                <Zap className="w-5 h-5" />
                                <span className="font-semibold">Hooks & Triggers</span>
                            </div>
                            <h2 className="text-3xl font-bold">Guardrails and event-driven extensions</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Hooks intercept execution at key points — pre-tool-call, pre-merge,
                                pre-message. Use them to validate, block, transform, or enrich.
                                Attach bindings to fire agents on specific events.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Shield, title: 'Risk Policies', desc: 'Block SideEffect tools in NonInteractive mode. Simulate dry runs for validation.' },
                                    { icon: Webhook, title: 'Webhook Triggers', desc: 'POST from GitHub, Stripe, or n8n to fire a prompt.' },
                                    { icon: Zap, title: 'Binding System', desc: 'When THIS event fires, at THIS hook point, run THIS agent. Persisted contracts.' },
                                    { icon: Eye, title: 'External Actors', desc: 'Dispatch to external HTTP endpoints. n8n, Zapier, or custom services.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-red-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <HookSystemDiagram className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Fan-out */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <VariableFanOutDiagram className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-600">
                                <Table className="w-5 h-5" />
                                <span className="font-semibold">Variable Fan-Out</span>
                            </div>
                            <h2 className="text-3xl font-bold">One prompt. 500 personalized outputs.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Define variables in your prompts with Handlebars templates. Import
                                values from CSV files. Bonsai fans out a single prompt template across
                                every row — automatically.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Table, title: 'CSV Import', desc: 'Upload a CSV. Select columns by name or index. Variables populate automatically.' },
                                    { icon: ArrowRight, title: 'Template Variables', desc: 'Handlebars syntax. Full logic support — loops, conditionals, helpers.' },
                                    { icon: RefreshCw, title: 'Bulk Execution', desc: 'One command fans out across every variable row. Track all outputs.' },
                                    { icon: Eye, title: 'Preview Mode', desc: 'Preview CSV headers and column values before you fan out. No surprises.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-violet-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-orange-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <Moon className="w-16 h-16 mx-auto mb-6 text-orange-200" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Wake up to completed research.
                    </h2>
                    <p className="text-xl text-orange-50/80 max-w-2xl mx-auto mb-10">
                        Schedule your research agents at 11 PM. Open your laptop at 7 AM to a
                        synthesized report, not a blank cursor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-8" asChild>
                            <Link href="/docs">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
