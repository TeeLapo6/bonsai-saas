import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ImagePlaceholder } from '@/components/ui/image-placeholder'
import { DeploymentDiagram } from '@/components/diagrams'
import {
    Shield, Lock, Key, Eye, DollarSign, Globe, Users,
    Building2, ArrowRight, Server, Activity, Cpu, MapPin
} from 'lucide-react'

export default function EnterprisePage() {
    const features = [
        {
            icon: Shield,
            title: 'RBAC Permissions',
            desc: 'Scope-based access control with cascading policies. Permissions flow from Global → Workspace → Conversation Tree → Conversation → Branch.',
            items: ['Cascading scope hierarchy', 'Allow/Deny effect policies', 'GPG key signing for identity', 'API key management'],
        },
        {
            icon: DollarSign,
            title: 'Budget Governance',
            desc: 'Never wake up to a surprise API bill. Set per-workspace, per-team, and per-agent budgets with token, USD, tool call, and concurrency limits.',
            items: ['Token and USD limits', 'Tool call governance', 'Provider usage tracking', 'Daily/Weekly/Monthly periods'],
        },
        {
            icon: MapPin,
            title: 'Inference Locality',
            desc: 'Control where inference happens. Enforce local-only for sensitive data, route general queries to the cloud, or mix both.',
            items: ['LocalOnly, CloudOnly, Any modes', 'Auto localhost detection', 'Cascading policy enforcement', 'Per-conversation overrides'],
        },
        {
            icon: Users,
            title: 'Team Portals',
            desc: 'Shared workspaces with roster management, invitation system, and shared building blocks. Your team\'s collective AI intelligence in one place.',
            items: ['Team roster management', 'Invitation and approval system', 'Shared block publishing', 'Portal-level permissions'],
        },
        {
            icon: Eye,
            title: 'Full Audit Trail',
            desc: 'Every message, tool call, model request, and agent action is logged and searchable. Exportable for compliance.',
            items: ['Complete event bus logging', 'Per-resource audit access', 'Export for external compliance', 'Searchable conversation history'],
        },
        {
            icon: Lock,
            title: 'Block Security Validation',
            desc: 'Every building block is scanned for malicious patterns before installation. Command injection detection, sensitive directory protection, env var scanning.',
            items: ['Malicious pattern detection', 'Command injection checks', 'Sensitive path protection', 'Audit log for validations'],
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-background">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-slate-600 text-white">Enterprise</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
                        AI governance
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-400">
                            at enterprise scale.
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Bonsai is built for teams that need control, visibility, and security —
                        not just another chat window. From solo dev to Fortune 500, governance
                        scales with you.
                    </p>
                </div>
            </section>

            {/* Cert quote */}
            <section className="py-12 bg-muted/10">
                <div className="container px-4 mx-auto text-center">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Shield, label: 'GPG-Signed', desc: 'Cryptographic identity for publishing and authentication' },
                            { icon: Lock, label: 'TOTP 2FA', desc: 'Time-based one-time password support' },
                            { icon: Server, label: 'On-Prem VPC', desc: 'Deploy behind your firewall' },
                            { icon: Eye, label: 'GDPR/CCPA', desc: 'Data stays where you put it' },
                        ].map((c, i) => (
                            <div key={i} className="space-y-2">
                                <c.icon className="w-8 h-8 text-slate-500 mx-auto" />
                                <h3 className="font-bold">{c.label}</h3>
                                <p className="text-xs text-muted-foreground">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <Card key={i} className="p-6 border-2 hover:border-primary/30 transition-all">
                                <f.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
                                <ul className="space-y-1">
                                    {f.items.map((item, j) => (
                                        <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-primary/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Deploy how you want</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Bonsai runs as a single binary or Docker container. Deploy on your
                                laptop, your team's server, or your company's VPC. Pluggable storage
                                backends let you swap in Postgres, S3, Redis, and Elasticsearch as you scale.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Cpu, title: 'Docker Container', desc: 'Single container deployment. Works on any Docker host.' },
                                    { icon: Building2, title: 'VPC / On-Prem', desc: 'Deploy behind your firewall. No data leaves your network.' },
                                    { icon: Server, title: 'Pluggable Backends', desc: 'SQLite (default), Postgres, S3, Redis — swap via config.' },
                                    { icon: Activity, title: 'Health Monitoring', desc: 'Built-in health endpoints. Docker healthcheck included.' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl border bg-card">
                                        <item.icon className="w-6 h-6 text-primary mb-2" />
                                        <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <DeploymentDiagram className="w-full min-h-[400px]" />
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-slate-900 text-white">
                <div className="container px-4 mx-auto text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-6 text-slate-300" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to bring Bonsai to your team?
                    </h2>
                    <p className="text-xl text-slate-300/80 max-w-2xl mx-auto mb-10">
                        We work with teams of all sizes to deploy, configure, and onboard.
                        Enterprise support, custom SLAs, and fine-tuning pipelines available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8">
                            Contact Sales
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-400 text-white hover:bg-white/10 rounded-full px-8" asChild>
                            <Link href="/pricing">View Pricing <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
