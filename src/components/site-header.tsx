'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const APP_URL = process.env.NEXT_PUBLIC_BONSAI_APP_URL || 'https://bonsai-app.taylorlaporte.engineer'
const HUB_URL = process.env.NEXT_PUBLIC_BONSAI_HUB_URL || 'https://hub.bonsai-app.taylorlaporte.engineer'

export function SiteHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container px-4 mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/bonsai-logo.png"
                        alt="Bonsai"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="font-bold text-xl tracking-tight">Bonsai</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
                    <Link href="/compare" className="text-muted-foreground hover:text-foreground transition-colors">Compare</Link>
                    <a href={HUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Hub</a>
                    <Link href="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</Link>
                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                    <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" size="sm" asChild>
                        <a href={APP_URL} target="_blank" rel="noopener noreferrer">Sign In</a>
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
                        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                            Get Started <Sparkles className="ml-1 h-3.5 w-3.5" />
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col space-y-4 font-medium">
                        <Link href="/features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                        <Link href="/compare" onClick={() => setIsMobileMenuOpen(false)}>Compare</Link>
                        <a href={HUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Hub</a>
                        <Link href="/enterprise" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
                        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                        <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)}>Docs</Link>
                    </nav>
                    <div className="flex flex-col gap-2 pt-4 border-t">
                        <Button variant="outline" className="w-full" asChild>
                            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Sign In</a>
                        </Button>
                        <Button className="w-full bg-green-600 text-white" asChild>
                            <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
