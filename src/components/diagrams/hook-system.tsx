export function HookSystemDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="400" rx="12" fill="url(#h-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Hook System Architecture</text>

            {/* Trigger points */}
            <text x="120" y="65" fill="#64748b" fontSize="12">Trigger Points</text>

            <rect x="30" y="80" width="130" height="36" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="103" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">on_message</text>

            <rect x="30" y="126" width="130" height="36" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="149" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">on_response</text>

            <rect x="30" y="172" width="130" height="36" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="195" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">on_branch</text>

            <rect x="30" y="218" width="130" height="36" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="241" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">on_error</text>

            {/* Arrow */}
            <path d="M160 130 L220 130" stroke="#334155" strokeWidth="2" />
            <polygon points="218,125 228,130 218,135" fill="#334155" />

            {/* Bindings */}
            <rect x="230" y="80" width="160" height="200" rx="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4" />
            <text x="310" y="104" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Binding Layer</text>

            <rect x="245" y="118" width="130" height="28" rx="5" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="136" textAnchor="middle" fill="#f59e0b" fontSize="9">Hook → Agent routing</text>

            <rect x="245" y="154" width="130" height="28" rx="5" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="172" textAnchor="middle" fill="#f59e0b" fontSize="9">Filter conditions</text>

            <rect x="245" y="190" width="130" height="28" rx="5" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="208" textAnchor="middle" fill="#f59e0b" fontSize="9">Priority ordering</text>

            <rect x="245" y="226" width="130" height="28" rx="5" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="244" textAnchor="middle" fill="#f59e0b" fontSize="9">Timeout config</text>

            {/* Arrow */}
            <path d="M390 130 L440 130" stroke="#334155" strokeWidth="2" />
            <polygon points="438,125 448,130 438,135" fill="#334155" />

            {/* Observing Agents */}
            <text x="600" y="65" fill="#64748b" fontSize="12">Observing Agents</text>

            <rect x="450" y="80" width="130" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" />
            <text x="515" y="102" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">Meta Agent 1</text>
            <text x="515" y="118" textAnchor="middle" fill="#64748b" fontSize="8">Log monitor</text>

            <rect x="450" y="140" width="130" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" />
            <text x="515" y="162" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">Meta Agent 2</text>
            <text x="515" y="178" textAnchor="middle" fill="#64748b" fontSize="8">Quality check</text>

            <rect x="450" y="200" width="130" height="50" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" />
            <text x="515" y="222" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">Meta Agent 3</text>
            <text x="515" y="238" textAnchor="middle" fill="#64748b" fontSize="8">Re-route fallback</text>

            {/* Dispatch flow */}
            <rect x="620" y="80" width="150" height="200" rx="10" fill="#4f46e5" fillOpacity="0.05" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3" />
            <text x="695" y="104" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold">Dispatched</text>
            <text x="695" y="124" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold">Actions</text>
            <text x="695" y="150" textAnchor="middle" fill="#64748b" fontSize="9">→ Intercept message</text>
            <text x="695" y="170" textAnchor="middle" fill="#64748b" fontSize="9">→ Modify context</text>
            <text x="695" y="190" textAnchor="middle" fill="#64748b" fontSize="9">→ Terminate branch</text>
            <text x="695" y="210" textAnchor="middle" fill="#64748b" fontSize="9">→ Re-route agent</text>
            <text x="695" y="230" textAnchor="middle" fill="#64748b" fontSize="9">→ Trigger hook</text>
            <text x="695" y="250" textAnchor="middle" fill="#64748b" fontSize="9">→ Log audit</text>

            {/* Bottom */}
            <rect x="80" y="290" width="640" height="85" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="316" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">Hooks enable self-observing AI systems</text>
            <text x="400" y="338" textAnchor="middle" fill="#94a3b8" fontSize="10">Any trigger point can bind to any meta agent. Meta agents observe, intercept, or modify the primary flow.</text>
            <text x="400" y="358" textAnchor="middle" fill="#64748b" fontSize="10">Use cases: moderation, quality gating, cost control, audit logging, automatic re-routing on failure.</text>

            <defs>
                <linearGradient id="h-bg" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
