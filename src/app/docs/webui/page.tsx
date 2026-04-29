
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Monitor, MessageSquare, Layout, Activity, ExternalLink, Settings } from 'lucide-react'
import Link from 'next/link'

export default function WebUIDocsPage() {
    const features = [
        { title: "Conversation Threading", icon: MessageSquare, desc: "Manage multiple AI dialogues with rich branch/restore capabilities." },
        { title: "Block Visualizer", icon: Layout, desc: "Drag and drop building blocks to see how your agent is constructed." },
        { title: "Execution Monitor", icon: Activity, desc: "Real-time logs and token usage tracking for every agent call." },
        { title: "Global Settings", icon: Settings, desc: "Configure model endpoints, API keys, and local inference locality." }
    ]

    return (
        <div className="container px-4 mx-auto py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-64 space-y-4">
                    <h4 className="font-bold uppercase text-xs text-muted-foreground tracking-widest">Guide</h4>
                    <nav className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs" className="text-muted-foreground hover:text-foreground">Overview</Link>
                        <Link href="/docs/cli" className="text-muted-foreground hover:text-foreground">CLI Usage</Link>
                        <Link href="/docs/webui" className="text-primary font-bold">WebUI Guide</Link>
                        <Link href="/docs/blocks" className="text-muted-foreground hover:text-foreground">Building Blocks</Link>
                    </nav>
                </aside>

                <main className="flex-1 space-y-12">
                    <header className="space-y-4">
                        <Badge variant="outline" className="border-blue-500 text-blue-600 bg-blue-50">Interface</Badge>
                        <h1 className="text-4xl font-extrabold">Bonsai WebUI Guide</h1>
                        <p className="text-xl text-muted-foreground">
                            A powerful, visual companion to the CLI. Manage your agents through a sleek React-based interface optimized for collaboration.
                        </p>
                    </header>

                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold">Key Visual Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <div key={i} className="p-6 border rounded-2xl space-y-3 bg-card hover:shadow-lg transition-all border-dashed hover:border-solid hover:border-primary/50">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <f.icon size={20} />
                                    </div>
                                    <h3 className="font-bold">{f.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-muted px-8 py-12 rounded-3xl space-y-6">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h2 className="text-2xl font-bold">Starting the Server</h2>
                                <p className="text-muted-foreground">
                                    To access the WebUI locally, simply start the server from your CLI.
                                    The dashboard will be available at <code>localhost:3000</code>.
                                </p>
                                <pre className="bg-black text-white p-3 rounded font-mono text-sm">
                                    $ bonsai serve
                                </pre>
                            </div>
                            <div className="w-full md:w-64 aspect-video bg-background rounded-xl shadow-inner flex items-center justify-center text-xs text-muted-foreground border italic">
                                Visual Dashboard Placeholder
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Desktop App</h2>
                        <p className="text-muted-foreground">
                            Prefer a standalone application? Download the Bonsai Desktop app (built with Tauri)
                            for global hotkeys and deeper system integration.
                        </p>
                        <Button variant="outline" className="rounded-full">
                            Download Desktop (v0.8.2) <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </section>
                </main>
            </div>
        </div>
    )
}
