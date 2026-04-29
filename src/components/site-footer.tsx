import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter } from 'lucide-react'

export function SiteFooter() {
    return (
        <footer className="bg-background border-t py-12 lg:py-16">
            <div className="container px-4 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 lg:col-span-2 space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/bonsai-logo.png"
                            alt="Bonsai"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                        <span className="font-bold text-lg">Bonsai</span>
                    </Link>
                    <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                        Leading the charge in open source AI infrastructure.
                        Build your own agent ecosystem with complete sovereignty.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/taylor/bonsai" className="text-muted-foreground hover:text-foreground">
                            <Github size={20} />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                        <li><Link href="/hub" className="hover:text-foreground transition-colors">Hub</Link></li>
                        <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                        <li><Link href="/docs" className="hover:text-foreground transition-colors">API</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider">Community</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/hub" className="hover:text-foreground transition-colors">Marketplace</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Discord</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Contribute</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Showcase</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Terms</Link></li>
                        <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container px-4 mx-auto mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
                <p>© {new Date().getFullYear()} Bonsai AI Inc. All rights reserved. Open source under MIT license.</p>
            </div>
        </footer>
    )
}
