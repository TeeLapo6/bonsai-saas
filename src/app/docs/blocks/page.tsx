
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Globe, Shield, RefreshCcw, LayoutTemplate, Network } from 'lucide-react'
import Link from 'next/link'

export default function BlocksDocsPage() {
    const pillars = [
        { title: "Decentralized", icon: Network, desc: "Blocks are independent YAML manifests. Host them anywhere, import them into any Bonsai instance." },
        { title: "Versioned", icon: RefreshCcw, desc: "Every block supports semantic versioning. Lock your workflows to specific versions for stability." },
        { title: "Standardized", icon: LayoutTemplate, desc: "A unified spec for Prompts, Tools, and Agents ensures they always work together." }
    ]

    return (
        <div className="container px-4 mx-auto py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-64 space-y-4">
                    <h4 className="font-bold uppercase text-xs text-muted-foreground tracking-widest">Guide</h4>
                    <nav className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs" className="text-muted-foreground hover:text-foreground">Overview</Link>
                        <Link href="/docs/cli" className="text-muted-foreground hover:text-foreground">CLI Usage</Link>
                        <Link href="/docs/webui" className="text-muted-foreground hover:text-foreground">WebUI Guide</Link>
                        <Link href="/docs/blocks" className="text-primary font-bold">Building Blocks</Link>
                    </nav>
                </aside>

                <main className="flex-1 space-y-12">
                    <header className="space-y-4">
                        <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">Ecosystem</Badge>
                        <h1 className="text-4xl font-extrabold">The Hub & Blocks</h1>
                        <p className="text-xl text-muted-foreground">
                            Bonsai is powered by the Hub—a decentralized catalog of AI building blocks.
                            Our community-driven model ensures you always have the best tools for the job.
                        </p>
                    </header>

                    <section className="grid md:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <div key={i} className="text-center space-y-3">
                                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <p.icon size={24} />
                                </div>
                                <h3 className="font-bold">{p.title}</h3>
                                <p className="text-sm text-muted-foreground">{p.desc}</p>
                            </div>
                        ))}
                    </section>

                    <section className="space-y-6 bg-muted/30 p-8 rounded-3xl border">
                        <h2 className="text-2xl font-bold">Deep Import Protocol</h2>
                        <p className="text-muted-foreground">
                            We use a custom <code>bonsai://</code> URI scheme to facilitate one-click imports from the web to your local computer.
                        </p>
                        <div className="bg-card p-6 rounded-xl border-2 border-dashed space-y-4">
                            <div className="flex items-center gap-3">
                                <Badge variant="secondary">URI</Badge>
                                <code className="text-sm text-primary">bonsai://import?type=agent&id=senior-dev</code>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                                When you click "Install" on the Hub, this link is fired. The Bonsai Desktop app listeners catch this and trigger the local import workflow.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Privacy First</h2>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0">
                                <Shield size={20} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold">No Central Identity</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Unlike other platform hubs, we don't require an account to consume blocks.
                                    You can browse, download, and use everything without ever giving us an email address.
                                    Your AI usage is your business.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="flex justify-between items-center bg-primary text-primary-foreground p-8 rounded-2xl">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">Ready to contribute?</h3>
                            <p className="text-primary-foreground/80 text-sm">Join 200+ creators on GitHub blocks catalog.</p>
                        </div>
                        <Button variant="outline" className="bg-white text-black hover:bg-gray-100">Submit Block</Button>
                    </div>
                </main>
            </div>
        </div>
    )
}
