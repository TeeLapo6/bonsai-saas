export function HarnessDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="400" rx="12" fill="url(#hr-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Harness Framework</text>

            {/* Bonsai Core */}
            <rect x="320" y="60" width="160" height="70" rx="10" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" />
            <text x="400" y="90" textAnchor="middle" fill="#22c55e" fontSize="13" fontWeight="bold">Bonsai Core</text>
            <text x="400" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9">Branch Manager</text>

            {/* Harness layer */}
            <rect x="280" y="150" width="240" height="40" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4" />
            <text x="400" y="175" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Harness Interface</text>

            {/* Transport adapters */}
            <rect x="30" y="220" width="170" height="70" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="115" y="248" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">Subprocess</text>
            <text x="115" y="268" textAnchor="middle" fill="#94a3b8" fontSize="9">stdin/stdout adapter</text>
            <text x="115" y="282" textAnchor="middle" fill="#64748b" fontSize="8">Local binary execution</text>

            <rect x="230" y="220" width="170" height="70" rx="8" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="1.5" />
            <text x="315" y="248" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="bold">HTTP</text>
            <text x="315" y="268" textAnchor="middle" fill="#94a3b8" fontSize="9">REST/WebSocket bridge</text>
            <text x="315" y="282" textAnchor="middle" fill="#64748b" fontSize="8">Remote agent hosting</text>

            <rect x="430" y="220" width="170" height="70" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" />
            <text x="515" y="248" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">SDK</text>
            <text x="515" y="268" textAnchor="middle" fill="#94a3b8" fontSize="9">TypeScript / Rust SDK</text>
            <text x="515" y="282" textAnchor="middle" fill="#64748b" fontSize="8">Native integration</text>

            <rect x="630" y="220" width="150" height="70" rx="8" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeWidth="1.5" />
            <text x="705" y="248" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">Docker</text>
            <text x="705" y="268" textAnchor="middle" fill="#94a3b8" fontSize="9">Container adapter</text>
            <text x="705" y="282" textAnchor="middle" fill="#64748b" fontSize="8">Isolated execution</text>

            {/* Connector lines */}
            <line x1="320" y1="190" x2="115" y2="220" stroke="#334155" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="360" y1="190" x2="315" y2="220" stroke="#334155" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="440" y1="190" x2="515" y2="220" stroke="#334155" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="480" y1="190" x2="705" y2="220" stroke="#334155" strokeWidth="1" strokeOpacity="0.4" />

            {/* External agents */}
            <text x="400" y="315" textAnchor="middle" fill="#64748b" fontSize="11">External Agents → connected via transport adapters</text>

            {/* Bottom */}
            <rect x="80" y="330" width="640" height="55" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="354" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">Bring your own agent. Any language, any protocol.</text>
            <text x="400" y="374" textAnchor="middle" fill="#64748b" fontSize="10">Harness wraps any external binary or service as a native Bonsai building block</text>

            <defs>
                <linearGradient id="hr-bg" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
