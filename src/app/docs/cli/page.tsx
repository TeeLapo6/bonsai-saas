
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Terminal, Copy, Play, Plus, Search, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function CLIDocsPage() {
    const commands = [
        { cmd: "bonsai init [name]", desc: "Initialize a new Bonsai workspace in the current directory." },
        { cmd: "bonsai add @hub/name", desc: "Download and install a block from the community Hub." },
        { cmd: "bonsai run [block]", desc: "Execute a prompt, agent, or workflow block." },
        { cmd: "bonsai serve", desc: "Start the local API & WebUI server (default: port 3000)." },
        { cmd: "bonsai status", desc: "Check current workspace status and installed blocks." }
    ]

    return (
        <div className="container px-4 mx-auto py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-64 space-y-4">
                    <h4 className="font-bold uppercase text-xs text-muted-foreground tracking-widest">Guide</h4>
                    <nav className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs" className="text-muted-foreground hover:text-foreground">Overview</Link>
                        <Link href="/docs/cli" className="text-primary font-bold">CLI Usage</Link>
                        <Link href="/docs/webui" className="text-muted-foreground hover:text-foreground">WebUI Guide</Link>
                        <Link href="/docs/blocks" className="text-muted-foreground hover:text-foreground">Building Blocks</Link>
                    </nav>
                </aside>

                <main className="flex-1 space-y-12">
                    <header className="space-y-4">
                        <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">Manual</Badge>
                        <h1 className="text-4xl font-extrabold">Bonsai CLI Guide</h1>
                        <p className="text-xl text-muted-foreground">
                            The Bonsai CLI is the core engine for AI orchestration. It provides high-performance, local-first execution of your agentic logic.
                        </p>
                    </header>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">Common Commands</h2>
                        <div className="grid gap-4">
                            {commands.map((c, i) => (
                                <div key={i} className="p-4 border rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                                    <div className="space-y-1">
                                        <code className="text-green-600 font-mono text-sm font-bold bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded">{c.cmd}</code>
                                        <p className="text-sm text-muted-foreground">{c.desc}</p>
                                    </div>
                                    <Button variant="ghost" size="icon"><Copy size={16} /></Button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold">Interactive Usage Showcase</h2>
                        <div className="p-8 bg-black rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-[10px] text-white/40 font-mono ml-2 uppercase">bonsai / interactive-session</span>
                            </div>
                            <div className="font-mono text-sm leading-relaxed space-y-4">
                                <div className="text-green-400">$ bonsai run @hub/senior-dev "Refactor my code" --path ./src</div>
                                <div className="text-white">🚀 Initializing Senior Dev Agent...</div>
                                <div className="text-gray-400">Scanning ./src directory... Found 14 files.</div>
                                <div className="text-blue-400">➤ Analyzing auth.rs logic...</div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <span className="text-yellow-400">[SUGGESTION]</span> Recommendation: Replace manual JWT parsing with the 'jsonwebtoken' crate in L42-78.
                                </div>
                                <div className="text-green-400">Done. Report saved to ./bonsai-report.md</div>
                            </div>
                        </div>
                    </section>

                    <section className="p-8 bg-muted/30 rounded-2xl border flex flex-col items-center text-center space-y-4">
                        <HelpCircle className="w-12 h-12 text-muted-foreground opacity-50" />
                        <h3 className="text-xl font-bold">Need CLI Help?</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            Run <code>bonsai --help</code> at any time to see the full list of available flags and global options.
                        </p>
                        <Button variant="outline" className="rounded-full">View GitHub Discussions</Button>
                    </section>
                </main>
            </div>
        </div>
    )
}
