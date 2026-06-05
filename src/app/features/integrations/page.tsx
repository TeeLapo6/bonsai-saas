import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { HarnessDiagram, TerminalMock, HubBrowserMock } from '@/components/diagrams'
import {
    Upload, Server, Blocks, Download, ExternalLink, ArrowRight,
    Box, Terminal, Plug, Globe, ShoppingBag, Cpu, Eye
} from 'lucide-react'

export default function IntegrationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-violet-500/10 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-violet-600 text-white">Integrations</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Your AI, your data,
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400">
                            your ecosystem.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Import conversations from anywhere. Connect coding agents. Generate MCP servers.
                        Browse 180+ community building blocks. No vendor lock-in.
                    </p>
                </div>
            </section>

            {/* Provider Imports */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-600">
                                <Upload className="w-5 h-5" />
                                <span className="font-semibold">Provider Chat Imports</span>
                            </div>
                            <h2 className="text-3xl font-bold">Bring your entire chat history</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Import conversations from ChatGPT, Claude, Gemini, and Grok via
                                the Bonsai browser extension. Import terminal-based Pi coding sessions.
                                Never start from scratch again.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Globe, title: 'ChatGPT', desc: 'Import full conversation threads from OpenAI.' },
                                    { icon: Globe, title: 'Claude', desc: 'Bring over Anthropic chat sessions intact.' },
                                    { icon: Globe, title: 'Gemini', desc: 'Migrate Google Gemini conversations.' },
                                    { icon: Globe, title: 'Grok', desc: 'Import from xAI Grok conversations.' },
                                    { icon: Terminal, title: 'Pi Sessions', desc: 'Import terminal-based coding agent sessions with message counts.' },
                                    { icon: Eye, title: 'Preview Mode', desc: 'Preview imported conversations before committing.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-violet-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <ImagePlaceholder label="[Screenshot: import page showing provider logos and a conversation preview being imported]" className="min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Harness Framework */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <HarnessDiagram className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600">
                                <Terminal className="w-5 h-5" />
                                <span className="font-semibold">Agent Harness Framework</span>
                            </div>
                            <h2 className="text-3xl font-bold">Orchestrate external coding agents</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The harness framework connects external coding agents (pi, OpenClaw, and
                                more) to Bonsai through a universal event vocabulary. One transport adapter
                                design covers all harness targets — subprocess, HTTP, or embedded SDK.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Cpu, title: 'pi Integration', desc: 'Connect pi coding agent. Full session lifecycle management.' },
                                    { icon: Terminal, title: 'OpenClaw Support', desc: 'Orchestrate OpenClaw agents with the same interface.' },
                                    { icon: ArrowRight, title: 'Transport-Agnostic', desc: 'Subprocess, RPC, HTTP, embedded SDK — one adapter design.' },
                                    { icon: Eye, title: 'Session Sync', desc: 'Harness sessions sync into Bonsai conversations for persistent tracking.' },
                                    { icon: Eye, title: 'TextDelta Events', desc: 'Stream coding agent output in real-time into the Bonsai UI.' },
                                    { icon: Eye, title: 'RBAC Binding', desc: 'Permission-scoped harness access. Control who can use which harness.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-indigo-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MCP */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600">
                                <Server className="w-5 h-5" />
                                <span className="font-semibold">MCP Protocol</span>
                            </div>
                            <h2 className="text-3xl font-bold">Full MCP support, both directions</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Generate Node.js or Python MCP servers from any Bonsai function block
                                with one command. Discover tools from external MCP servers (stdio + SSE)
                                and import them as tool blocks.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Server, title: 'mcpify', desc: 'Convert any function block into a standalone MCP server. One command.' },
                                    { icon: Plug, title: 'Dual Runtime', desc: 'Generates both Node.js and Python servers based on function runtime.' },
                                    { icon: Download, title: 'MCP Discovery', desc: 'Auto-discover tools from external MCP servers. Import as tool blocks.' },
                                    { icon: ArrowRight, title: 'Stdio + SSE', desc: 'Native client support for both stdio and SSE MCP transports.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-green-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <TerminalMock className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Building Blocks */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <HubBrowserMock className="w-full min-h-[400px]" />
                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-600">
                                <ShoppingBag className="w-5 h-5" />
                                <span className="font-semibold">Building Block Ecosystem</span>
                            </div>
                            <h2 className="text-3xl font-bold">An App Store for AI components</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Browse 180+ community building blocks — agents, tools, MCP servers,
                                providers, chains, skills, system prompts, and more. One-click install
                                via the <code>bonsai://</code> deep-link protocol.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Blocks, title: '8 Block Types', desc: 'Agent, Tool, Function, Evaluator, Workflow, Skill, KB, MCP Server.' },
                                    { icon: Box, title: 'One-Click Install', desc: 'bonsai:// deep links install blocks into your local instance instantly.' },
                                    { icon: Download, title: 'Publish to Hub', desc: 'Share your blocks with the community. Version-managed, manifest-driven.' },
                                    { icon: ArrowRight, title: 'Provider Hub', desc: 'Official manifests for OpenAI, Anthropic, Google, Groq, DeepSeek, Ollama, and more.' },
                                ].map((f, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <f.icon className="w-6 h-6 text-teal-500 mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-violet-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Own your AI stack.
                    </h2>
                    <p className="text-xl text-violet-50/80 max-w-2xl mx-auto mb-10">
                        No vendor lock-in. No disappearing features. Bonsai runs locally, connects
                        to any provider, and stores everything on your machine.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 rounded-full px-8" asChild>
                            <Link href="/docs">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
                            <Link href="/hub">Browse Hub <ExternalLink className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
