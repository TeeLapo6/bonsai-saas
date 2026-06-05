export function DialogueDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="380" rx="12" fill="url(#d-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Dialogue Configurations</text>

            {/* LEFT: Parallel */}
            <rect x="30" y="50" width="350" height="190" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="205" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold">Parallel Mode</text>
            <text x="205" y="90" fill="#64748b" fontSize="10">All agents respond simultaneously</text>

            {/* Input */}
            <rect x="140" y="100" width="40" height="22" rx="4" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" />
            <text x="160" y="115" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">User</text>

            {/* Fan out lines */}
            <line x1="160" y1="122" x2="160" y2="135" stroke="#334155" strokeWidth="1.5" />
            <line x1="80" y1="135" x2="240" y2="135" stroke="#334155" strokeWidth="1.5" />
            <line x1="80" y1="135" x2="80" y2="148" stroke="#334155" strokeWidth="1" />
            <line x1="160" y1="135" x2="160" y2="148" stroke="#334155" strokeWidth="1" />
            <line x1="240" y1="135" x2="240" y2="148" stroke="#334155" strokeWidth="1" />

            {/* Agents */}
            <circle cx="80" cy="168" r="14" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1.5" />
            <text x="80" y="172" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">A</text>
            <text x="80" y="195" textAnchor="middle" fill="#64748b" fontSize="8">Expert</text>

            <circle cx="160" cy="168" r="14" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeWidth="1.5" />
            <text x="160" y="172" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">B</text>
            <text x="160" y="195" textAnchor="middle" fill="#64748b" fontSize="8">Critic</text>

            <circle cx="240" cy="168" r="14" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="240" y="172" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">C</text>
            <text x="240" y="195" textAnchor="middle" fill="#64748b" fontSize="8">Summarizer</text>

            <text x="160" y="230" textAnchor="middle" fill="#64748b" fontSize="9">All respond in one turn ~3x faster</text>

            {/* RIGHT: Chain */}
            <rect x="420" y="50" width="350" height="190" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="595" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold">Chain Mode</text>
            <text x="595" y="90" fill="#64748b" fontSize="10">Sequential, each sees prior output</text>

            {/* Chain flow */}
            <rect x="470" y="100" width="36" height="22" rx="4" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" />
            <text x="488" y="115" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">In</text>
            <path d="M506 111 L530 111" stroke="#334155" strokeWidth="1.5" />
            <polygon points="528,106 538,111 528,116" fill="#334155" />

            <circle cx="560" cy="111" r="14" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1.5" />
            <text x="560" y="115" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">A</text>
            <path d="M574 111 L530 145" stroke="#334155" strokeWidth="1.5" />
            <path d="M530 145 L560 145" stroke="#334155" strokeWidth="1.5" />
            <polygon points="558,140 568,145 558,150" fill="#334155" />
            <text x="610" y="113" fill="#64748b" fontSize="8" fontStyle="italic">Sees input</text>

            <circle cx="560" cy="145" r="14" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeWidth="1.5" />
            <text x="560" y="149" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">B</text>
            <text x="610" y="147" fill="#64748b" fontSize="8" fontStyle="italic">Sees A's output</text>

            <path d="M574 145 L530 180" stroke="#334155" strokeWidth="1.5" />
            <path d="M530 180 L560 180" stroke="#334155" strokeWidth="1.5" />
            <polygon points="558,175 568,180 558,185" fill="#334155" />

            <circle cx="560" cy="180" r="14" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="560" y="184" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">C</text>
            <text x="610" y="182" fill="#64748b" fontSize="8" fontStyle="italic">Sees A+B outputs</text>

            <path d="M574 180 L600 180" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="602" y="170" width="36" height="20" rx="4" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1" />
            <text x="620" y="183" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Out</text>

            <text x="595" y="230" textAnchor="middle" fill="#64748b" fontSize="9">Coherent narrative, context builds</text>

            {/* Bottom note */}
            <rect x="80" y="262" width="640" height="95" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="288" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">Choose your dialogue strategy</text>
            <text x="400" y="310" textAnchor="middle" fill="#94a3b8" fontSize="10">Parallel: Fast iteration, independent responses. Chain: Coherent narrative, context builds.</text>
            <text x="400" y="332" textAnchor="middle" fill="#64748b" fontSize="10">Cycle count: repeat dialogue N times until consensus. Hybrid: parallel groups within chain stages.</text>
            <text x="400" y="350" textAnchor="middle" fill="#64748b" fontSize="9">Configure max cycles, stop conditions, and aggregation strategies per dialogue group.</text>

            <defs>
                <linearGradient id="d-bg" x1="0" y1="0" x2="800" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
