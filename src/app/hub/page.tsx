import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HubBrowserMock } from '@/components/diagrams'
import { ExternalLink, Package, Search, Download, Layers, Terminal, Cpu, Zap, Shield, Target, Database, Users } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_BONSAI_APP_URL || 'https://bonsai-app.taylorlaporte.engineer'

export default function HubLandingPage() {
    const blockTypes = [
        { icon: Terminal, name: 'System Prompts', desc: 'Reusable prompt templates with variable interpolation' },
        { icon: Cpu, name: 'Tools', desc: 'Function wrappers and MCP-integrated tools' },
        { icon: Zap, name: 'Workflows', desc: 'Declarative, versioned AI pipelines' },
        { icon: Shield, name: 'Evaluators', desc: 'Quality scoring and multi-dimensional benchmarks' },
        { icon: Users, name: 'Agents', desc: 'Pre-configured agents with tools, memory, and KBs' },
        { icon: Target, name: 'Skills', desc: 'Behavioral injections that modify agent reasoning' },
        { icon: Database, name: 'Datasets', desc: 'Evaluation and fine-tuning datasets' },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative overflow-hidden bg-gradient-to-br from-green-900/20 via-background to-teal-900/20 py-20 lg:py-32">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/30">
                        Community Marketplace
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        The Bonsai Hub
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                        An App Store for AI components. Browse 180+ community building blocks —
                        agents, tools, MCP servers, providers, chains, skills, and more.
                    </p>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
                        One-click install via <code className="bg-muted px-1.5 py-0.5 rounded text-primary">bonsai://</code> deep links. No account required to browse.
                        All blocks execute locally on your machine.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8" asChild>
                            <a href={`${APP_URL}/hub`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-5 w-5" />
                                Browse the Hub
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                            <a href={`${APP_URL}/hub`} target="_blank" rel="noopener noreferrer">
                                <Package className="mr-2 h-5 w-5" />
                                Submit a Block
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Block Types */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What's in the Hub?</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Eight block types covering every aspect of AI development.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blockTypes.map((type) => (
                            <Card key={type.name} className="text-center hover:border-primary/50 transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto flex items-center justify-center text-primary mb-3">
                                        <type.icon size={24} />
                                    </div>
                                    <CardTitle className="text-lg">{type.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs text-muted-foreground">{type.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">How Hub blocks work</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Search, title: 'Browse', desc: 'Filter by category, search by name, and find exactly what you need in seconds.' },
                                    { icon: Download, title: 'Install', desc: 'Click "Install" — the bonsai:// protocol fires a deep link that imports the block into your local Bonsai instance.' },
                                    { icon: Package, title: 'Use', desc: 'The block appears in your library. Select it in any conversation, chain, or workflow.' },
                                    { icon: Layers, title: 'Publish', desc: 'Share your own blocks with the community. Version-managed manifest format. GPG-signed identity.' },
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                            <step.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <HubBrowserMock className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            {/* Privacy */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto max-w-3xl text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Privacy-First Marketplace</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        No account is required to browse, search, or import blocks. All deep-links
                        execute locally in your Bonsai instance. Blocks are open YAML manifests —
                        inspect the code before you install. Unlike other platform hubs, we don't
                        require an email address to consume blocks. Your AI usage is your business.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore?</h2>
                    <p className="text-green-50/80 max-w-xl mx-auto mb-8">
                        The Hub is completely free and open. No account required to browse or install blocks.
                    </p>
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-10" asChild>
                        <a href={`${APP_URL}/hub`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Open the Hub
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    )
}
