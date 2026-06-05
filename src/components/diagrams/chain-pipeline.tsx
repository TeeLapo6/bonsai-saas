export function ChainPipelineDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="380" rx="12" fill="url(#cp-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Chain Pipeline</text>

            {/* Input */}
            <rect x="30" y="100" width="70" height="40" rx="6" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="65" y="125" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">Input</text>
            <text x="65" y="155" textAnchor="middle" fill="#64748b" fontSize="9">Raw data</text>

            <path d="M100 120 L140 120" stroke="#334155" strokeWidth="2" />
            <polygon points="138,115 148,120 138,125" fill="#334155" />

            {/* Stage 1 */}
            <rect x="150" y="80" width="90" height="80" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" />
            <text x="195" y="108" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Stage 1</text>
            <text x="195" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">Classifier</text>
            <text x="195" y="145" textAnchor="middle" fill="#64748b" fontSize="8">Intent detection</text>

            <path d="M240 120 L280 120" stroke="#334155" strokeWidth="2" />
            <polygon points="278,115 288,120 278,125" fill="#334155" />

            {/* Stage 2 */}
            <rect x="290" y="80" width="90" height="80" rx="8" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="1.5" />
            <text x="335" y="108" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">Stage 2</text>
            <text x="335" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">Extractor</text>
            <text x="335" y="145" textAnchor="middle" fill="#64748b" fontSize="8">Entity parsing</text>

            <path d="M380 120 L420 120" stroke="#334155" strokeWidth="2" />
            <polygon points="418,115 428,120 418,125" fill="#334155" />

            {/* Stage 3 */}
            <rect x="430" y="80" width="90" height="80" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="475" y="108" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Stage 3</text>
            <text x="475" y="126" textAnchor="middle" fill="#94a3b8" fontSize="9">Generator</text>
            <text x="475" y="145" textAnchor="middle" fill="#64748b" fontSize="8">Output crafted</text>

            <path d="M520 120 L560 120" stroke="#334155" strokeWidth="2" />
            <polygon points="558,115 568,120 558,125" fill="#334155" />

            {/* Output */}
            <rect x="570" y="100" width="70" height="40" rx="6" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.5" />
            <text x="605" y="125" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">Output</text>

            {/* Aggregation marker */}
            <rect x="195" y="180" width="400" height="36" rx="6" fill="#f59e0b" fillOpacity="0.06" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3" />
            <text x="395" y="203" textAnchor="middle" fill="#f59e0b" fontSize="11">Aggregation: Structured result with chain provenance</text>

            {/* Prompt template hint */}
            <rect x="290" y="240" width="220" height="28" rx="6" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeWidth="1" />
            <text x="400" y="259" textAnchor="middle" fill="#3b82f6" fontSize="10">! prompt template → auto-filled per stage</text>

            {/* Error routing */}
            <path d="M335 160 L335 190 L195 190" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" fill="none" strokeDasharray="3" />
            <text x="240" y="240" fill="#ef4444" fontSize="9" fontStyle="italic">Error → re-route to fallback</text>

            {/* Bottom details */}
            <rect x="80" y="280" width="640" height="75" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="306" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">Each stage is a reusable building block</text>
            <text x="400" y="328" textAnchor="middle" fill="#94a3b8" fontSize="11">Chain stages can be agents, tools, workflows, or sub-chains</text>
            <text x="400" y="348" textAnchor="middle" fill="#64748b" fontSize="10">Output of stage N → input of stage N+1 with auto-prompt generation</text>

            <defs>
                <linearGradient id="cp-bg" x1="0" y1="0" x2="800" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
