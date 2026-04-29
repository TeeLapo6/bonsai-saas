
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Terminal, GitBranch, Globe, Clock, Zap, Users, Radio, Sparkles, Play, Moon, Target, Plane } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-background text-foreground border-b">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full animate-fade-in">
              The AI Operating System
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-tight">
              Compose. Orchestrate. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">
                Automate.
              </span>
            </h1>
            <p className="mx-auto max-w-[750px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
              Bonsai is the comprehensive platform for building intelligent systems.
              From rapid prototyping to fleet orchestration, it's <strong>Air Traffic Control</strong> for your AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="h-12 px-8 text-lg rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/docs/installation">
                  Download Bonsai <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all" asChild>
                <Link href="/features">
                  Explore Platform
                </Link>
              </Button>
            </div>

            {/* Terminal Preview */}
            <div className="mt-12 w-full max-w-4xl rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden hidden md:block">
              <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="text-xs text-muted-foreground ml-2 font-mono">bonsai orchestrator</div>
              </div>
              <div className="p-6 font-mono text-sm text-left overflow-x-auto bg-black text-green-400">
                <div className="mb-2">$ bonsai schedule "market-research" --trigger webhook --agent @hub/analyst</div>
                <div className="mb-4 text-white">✓ Scheduled. Agent will wake on incoming trigger.</div>
                <div className="mb-2">$ bonsai branch "explore-alternative-approach" --from HEAD~3</div>
                <div className="mb-4 text-gray-400">➤ Branch created. You now have 4 parallel explorations.</div>
                <div className="text-blue-400">$ bonsai status</div>
                <div className="text-gray-400">🌳 3 agents active | 12 branches | 2 awaiting triggers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
      </section>

      {/* Three Pillars */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Rethink how you work with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three paradigm shifts that change everything.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Pillar 1: Git for LLMs */}
            <Card className="border-2 hover:border-green-500/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <GitBranch className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Git for LLMs</CardTitle>
                <CardDescription className="text-base">
                  Branch, merge, and explore
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Every conversation is a tree, not a line. Fork at any message,
                  explore alternatives, compare outcomes, and merge insights.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    <span>Branch from any point in history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    <span>A/B test prompts in parallel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-500" />
                    <span>Never lose a good idea again</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 2: Air Traffic Control */}
            <Card className="border-2 hover:border-blue-500/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Radio className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Air Traffic Control</CardTitle>
                <CardDescription className="text-base">
                  Command your agent fleet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This isn't a co-pilot. It's not even auto-pilot. You're the air traffic controller—
                  coordinating multiple autonomous agents without babysitting each one.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-500" />
                    <span>Multi-agent orchestration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-500" />
                    <span>Autonomous but accountable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-500" />
                    <span>Real-time observability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 3: Work While You Sleep */}
            <Card className="border-2 hover:border-orange-500/50 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Moon className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl">Work While You Sleep</CardTitle>
                <CardDescription className="text-base">
                  Triggers, schedules, always-on
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Put your agents to work overnight. Schedule tasks, set up webhooks,
                  or have them watch and wait for the right moment to act.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Cron-based scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Webhook triggers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Event-driven workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Who uses Bonsai?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            From solo prompt engineers to enterprise AI teams.
          </p>
          <div className="grid gap-8 md:grid-cols-4 mt-12">
            <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-bold">Researchers</h3>
              <p className="text-sm text-muted-foreground">Systematically test hypotheses across prompt variations.</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
              <div className="text-4xl mb-4">👩‍💻</div>
              <h3 className="text-lg font-bold">Developers</h3>
              <p className="text-sm text-muted-foreground">Integrate AI agents into CI/CD and automation pipelines.</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-bold">Teams</h3>
              <p className="text-sm text-muted-foreground">Share agents, toolkits, and best practices across the org.</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl hover:bg-background transition-colors">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-bold">Night Owls</h3>
              <p className="text-sm text-muted-foreground">Schedule overnight research and wake up to answers.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/use-cases">Explore Use Cases <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 border-t">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Stop babysitting. Start orchestrating.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join developers who've moved from reactive prompting to proactive AI orchestration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 rounded-full bg-green-600 hover:bg-green-700 text-white">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
