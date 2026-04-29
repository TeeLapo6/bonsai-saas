'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Package, Search, Download, Zap, Users, Terminal, Cpu, Shield, Layers, Target, Drama, Database } from 'lucide-react'

export default function HubLandingPage() {
    // Configure this to point to your Hub instance
    const HUB_URL = process.env.NEXT_PUBLIC_HUB_URL || 'http://localhost:8000'

    const blockTypes = [
        { icon: Terminal, name: 'System Prompts', count: 1, color: 'bg-violet-500' },
        { icon: Cpu, name: 'Tools', count: 3, color: 'bg-orange-500' },
        { icon: Zap, name: 'Workflows', count: 1, color: 'bg-cyan-500' },
        { icon: Shield, name: 'Evaluators', count: 0, color: 'bg-purple-500' },
        { icon: Users, name: 'Agents', count: 171, color: 'bg-green-500' },
        { icon: Target, name: 'Skills', count: 1, color: 'bg-pink-500' },
        { icon: Database, name: 'Datasets', count: 0, color: 'bg-lime-500' },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-green-900/20 via-background to-teal-900/20 py-20 lg:py-32">
                <div className="container px-4 mx-auto text-center">
                    <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/30">
                        Community Marketplace
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        The Agency Hub
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Discover, install, and share building blocks for your AI workflows.
                        180+ curated blocks available for free, with one-click import.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8" asChild>
                            <a href={HUB_URL} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-5 w-5" />
                                Browse the Hub
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8">
                            <Package className="mr-2 h-5 w-5" />
                            Submit a Block
                        </Button>
                    </div>
                </div>
            </section>

            {/* Block Types Overview */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What's in the Hub?</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            A rich ecosystem of modular components to accelerate your AI development.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {blockTypes.map((type) => (
                            <Card key={type.name} className="text-center hover:border-primary/50 transition-colors">
                                <CardHeader className="pb-2">
                                    <div className={`w-12 h-12 rounded-xl ${type.color} mx-auto flex items-center justify-center text-white mb-3`}>
                                        <type.icon size={24} />
                                    </div>
                                    <CardTitle className="text-lg">{type.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-primary">{type.count}</p>
                                    <p className="text-xs text-muted-foreground">available</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                            <Search className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Browse & Search</h3>
                            <p className="text-muted-foreground">
                                Filter by category, search by name, and find exactly what you need in seconds.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                            <Download className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">One-Click Install</h3>
                            <p className="text-muted-foreground">
                                Use the <code className="bg-muted px-1 rounded">bonsai://</code> protocol to import blocks directly into your local instance.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                            <Layers className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Open & Extensible</h3>
                            <p className="text-muted-foreground">
                                All blocks are open source. Fork, modify, and contribute back to the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-green-600 text-white">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore?</h2>
                    <p className="text-green-50/80 max-w-xl mx-auto mb-8">
                        The Hub is completely free and open. No account required to browse or install blocks.
                    </p>
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-10" asChild>
                        <a href={HUB_URL} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Open the Hub
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    )
}
