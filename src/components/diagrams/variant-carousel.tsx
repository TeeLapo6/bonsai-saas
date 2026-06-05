export function VariantCarouselMock({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 340" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="340" rx="12" fill="#0f172a" />
            {/* Title bar */}
            <rect x="0" y="0" width="800" height="34" rx="12" fill="#1e293b" />
            <rect x="0" y="24" width="800" height="10" fill="#1e293b" />
            <circle cx="16" cy="17" r="4" fill="#ef4444" />
            <circle cx="30" cy="17" r="4" fill="#f59e0b" />
            <circle cx="44" cy="17" r="4" fill="#22c55e" />
            <text x="400" y="21" textAnchor="middle" fill="#64748b" fontSize="10">variant comparison</text>

            {/* Variant A */}
            <rect x="20" y="48" width="240" height="230" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="20" y="48" width="240" height="32" rx="8" fill="#3b82f6" fillOpacity="0.1" />
            <rect x="20" y="68" width="240" height="12" fill="#3b82f6" fillOpacity="0.1" />
            <circle cx="40" cy="64" r="10" fill="#3b82f6" />
            <text x="40" y="68" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">G</text>
            <text x="56" y="68" fill="#3b82f6" fontSize="10" fontWeight="bold">GPT-4o</text>
            <text x="230" y="68" textAnchor="end" fill="#64748b" fontSize="8">2.1s</text>

            <text x="36" y="98" fill="#94a3b8" fontSize="9">Implement a Redis-backed</text>
            <text x="36" y="114" fill="#94a3b8" fontSize="9">rate limiter in Go with</text>
            <text x="36" y="130" fill="#94a3b8" fontSize="9">middleware support.</text>

            <rect x="36" y="148" width="210" height="1" fill="#334155" />

            <text x="36" y="166" fill="#e2e8f0" fontSize="10">package limiter</text>
            <text x="36" y="182" fill="#e2e8f0" fontSize="10">import (</text>
            <text x="48" y="198" fill="#e2e8f0" fontSize="10">"context"</text>
            <text x="48" y="214" fill="#e2e8f0" fontSize="10">"time"</text>
            <text x="36" y="230" fill="#e2e8f0" fontSize="10">)</text>
            <text x="36" y="250" fill="#64748b" fontSize="9" fontStyle="italic">Full implementation shown...</text>

            {/* Variant B */}
            <rect x="280" y="48" width="240" height="230" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="280" y="48" width="240" height="32" rx="8" fill="#a855f7" fillOpacity="0.1" />
            <rect x="280" y="68" width="240" height="12" fill="#a855f7" fillOpacity="0.1" />
            <circle cx="300" cy="64" r="10" fill="#a855f7" />
            <text x="300" y="68" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">C</text>
            <text x="316" y="68" fill="#a855f7" fontSize="10" fontWeight="bold">Claude 4 Opus</text>
            <text x="490" y="68" textAnchor="end" fill="#64748b" fontSize="8">3.4s</text>

            <text x="296" y="98" fill="#94a3b8" fontSize="9">Here's a rate limiter</text>
            <text x="296" y="114" fill="#94a3b8" fontSize="9">using Go's sync package</text>
            <text x="296" y="130" fill="#94a3b8" fontSize="9">with Redis backend.</text>

            <rect x="296" y="148" width="210" height="1" fill="#334155" />

            <text x="296" y="166" fill="#e2e8f0" fontSize="10">{'type RateLimiter struct {'}</text>
            <text x="296" y="182" fill="#e2e8f0" fontSize="10">{'    client *redis.Client'}</text>
            <text x="296" y="198" fill="#e2e8f0" fontSize="10">{'    limit  int'}</text>
            <text x="296" y="214" fill="#e2e8f0" fontSize="10">{'    window time.Duration'}</text>
            <text x="296" y="230" fill="#e2e8f0" fontSize="10">{'}'}</text>
            <text x="296" y="250" fill="#64748b" fontSize="9" fontStyle="italic">Full implementation shown...</text>

            {/* Variant C (preview) */}
            <rect x="540" y="48" width="100" height="230" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeOpacity="0.5" />
            <text x="590" y="120" textAnchor="middle" fill="#64748b" fontSize="10">Variant</text>
            <text x="590" y="140" textAnchor="middle" fill="#64748b" fontSize="10">C</text>
            <text x="590" y="160" textAnchor="middle" fill="#64748b" fontSize="8">DeepSeek</text>

            {/* Carousel arrows */}
            <rect x="658" y="155" width="24" height="24" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="670" y="172" textAnchor="middle" fill="#94a3b8" fontSize="12">›</text>
            <rect x="628" y="155" width="24" height="24" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="640" y="172" textAnchor="middle" fill="#94a3b8" fontSize="12">‹</text>

            {/* Bottom controls */}
            <rect x="280" y="295" width="240" height="30" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="330" y="315" textAnchor="middle" fill="#64748b" fontSize="9">⬤</text>
            <text x="370" y="315" textAnchor="middle" fill="#a855f7" fontSize="9">⬤</text>
            <text x="410" y="315" textAnchor="middle" fill="#64748b" fontSize="9">⬤</text>
            <text x="450" y="315" textAnchor="middle" fill="#64748b" fontSize="9">⬤</text>
            <text x="320" y="315" textAnchor="middle" fill="#64748b" fontSize="8">Keep best</text>
            <text x="480" y="315" textAnchor="middle" fill="#64748b" fontSize="8">⌨ Merge</text>
        </svg>
    )
}
