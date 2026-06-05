
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen py-20 bg-muted/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <Badge variant="secondary" className="px-4 py-1">Fair Pricing</Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Grown for every stage</h1>
                    <p className="max-w-[700px] text-muted-foreground text-xl">
                        Start free with our open core. Upgrade as your agent ecosystem expands.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Seed */}
                    <Card className="flex flex-col border-2 shadow-sm hover:shadow-md transition-all">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Seed</CardTitle>
                            <CardDescription>For individual explorers</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-extrabold mb-4">$0 <span className="text-base font-normal text-muted-foreground">/ forever</span></div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Unlimited CLI Usage</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Local LLM Execution</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Public Hub Access</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Community Support</li>
                                <li className="flex items-center text-muted-foreground"><X className="mr-2 h-4 w-4" /> Cloud Sync</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline" asChild>
                                <Link href="https://github.com/taylor/bonsai">Download Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Grove */}
                    <Card className="flex flex-col border-green-500 border-2 shadow-lg relative bg-green-50/50 dark:bg-green-900/10 scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">Grove</CardTitle>
                            <CardDescription>For power users & pros</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-extrabold mb-4">$8 <span className="text-base font-normal text-muted-foreground">/ month</span></div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Everything in Seed</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> <strong>Secure Cloud Sync</strong></li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Publish to Hub</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Priority API Gateway</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                                <Link href="/login">Start Free Trial</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Forest */}
                    <Card className="flex flex-col border-2 shadow-sm hover:shadow-md transition-all">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Forest</CardTitle>
                            <CardDescription>For small teams</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-extrabold mb-4">$25 <span className="text-base font-normal text-muted-foreground">/ user</span></div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Everything in Grove</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Shared Team Workspace</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> SSO (Google/GitHub)</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Basic Audit Logs</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Contact Sales</Button>
                        </CardFooter>
                    </Card>

                    {/* Ecosystem */}
                    <Card className="flex flex-col border-2 shadow-sm hover:shadow-md transition-all">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Ecosystem</CardTitle>
                            <CardDescription>For large enterprises</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-extrabold mb-4">Custom</div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Everything in Forest</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> On-prem VPC deployment</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> SLA & 24/7 Support</li>
                                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Fine-tuning pipeline</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Book Demo</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
