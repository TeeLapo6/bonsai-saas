
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Terminal, Copy, BookOpen, Layers, Settings, Zap } from 'lucide-react'

export default function DocsPage() {
    return (
        <div className="container px-4 mx-auto py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Nav (Mini) */}
                <aside className="w-full lg:w-64 space-y-6">
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Getting Started</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="text-green-600 font-medium">Introduction</li>
                            <li>Installation</li>
                            <li>Quick Start</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Core Concepts</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Building Blocks</li>
                            <li>Workflows</li>
                            <li>Agents</li>
                            <li>Hub Integration</li>
                        </ul>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 space-y-12">
                    <section className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight">Introduction</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Bonsai is an extensible AI orchestration engine. It allows you to define,
                            test, and run complex AI logic via a modular "building blocks" architecture.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-green-500" /> Quick Installation
                        </h2>
                        <p className="text-muted-foreground">The fastest way to get started is via our CLI tool.</p>
                        <div className="bg-muted p-4 rounded-xl font-mono text-sm relative group overflow-x-auto">
                            <code className="text-green-500">$ curl -sSL https://bonsai.dev/install.sh | sh</code>
                            <Button variant="ghost" size="icon" className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Copy size={16} />
                            </Button>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-xl space-y-3 hover:border-primary/50 transition-colors">
                            <Zap className="text-primary w-6 h-6" />
                            <h3 className="font-bold">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">Compile prompts and workflows into optimized execution graphs.</p>
                        </div>
                        <div className="p-6 border rounded-xl space-y-3 hover:border-primary/50 transition-colors">
                            <Layers className="text-primary w-6 h-6" />
                            <h3 className="font-bold">Modular Design</h3>
                            <p className="text-sm text-muted-foreground">Every component is a block. Swap LLMs, Tools, and Prompts seamlessly.</p>
                        </div>
                    </section>

                    <section className="space-y-4 border-t pt-12">
                        <h2 className="text-2xl font-bold">What's Next?</h2>
                        <p className="text-muted-foreground text-lg">
                            Ready to dive deeper? Explore the Hub to see what the community is building,
                            or check our advanced guides on multi-agent collaboration.
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-green-600 text-white">Advanced Guides</Button>
                            <Button variant="outline">GitHub Repository</Button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
