export function ConversationTreeMock({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" rx="12" fill="#0f172a" />
            {/* Title bar */}
            <rect x="0" y="0" width="800" height="40" rx="12" fill="#1e293b" />
            <rect x="0" y="30" width="800" height="10" fill="#1e293b" />
            <circle cx="20" cy="20" r="5" fill="#ef4444" />
            <circle cx="36" cy="20" r="5" fill="#f59e0b" />
            <circle cx="52" cy="20" r="5" fill="#22c55e" />
            <text x="400" y="24" textAnchor="middle" fill="#64748b" fontSize="11">bonsai-tui — conversation tree</text>

            {/* Root message */}
            <rect x="50" y="60" width="180" height="50" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5" />
            <text x="140" y="82" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">User: Initial prompt</text>
            <text x="140" y="98" textAnchor="middle" fill="#64748b" fontSize="8">"Design a microservice..."</text>

            {/* Branch A (left) */}
            <path d="M140 110 L140 130 L80 160" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <rect x="30" y="165" width="100" height="55" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="80" y="187" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Branch A</text>
            <text x="80" y="203" textAnchor="middle" fill="#94a3b8" fontSize="8">Service architecture</text>
            <text x="80" y="215" textAnchor="middle" fill="#64748b" fontSize="7">~4K tokens</text>

            <path d="M80 220 L80 240 L60 260" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
            <rect x="20" y="265" width="80" height="40" rx="6" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeWidth="1" />
            <text x="60" y="287" textAnchor="middle" fill="#3b82f6" fontSize="9">API design</text>

            <path d="M80 220 L80 240 L100 260" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
            <rect x="60" y="265" width="80" height="40" rx="6" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeWidth="1" />
            <text x="100" y="287" textAnchor="middle" fill="#3b82f6" fontSize="9">DB schema</text>

            {/* Branch B (right) */}
            <path d="M140 110 L140 130 L200 160" stroke="#a855f7" strokeWidth="2" fill="none" />
            <rect x="160" y="165" width="100" height="55" rx="8" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="1.5" />
            <text x="210" y="187" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">Branch B</text>
            <text x="210" y="203" textAnchor="middle" fill="#94a3b8" fontSize="8">Deployment strategy</text>
            <text x="210" y="215" textAnchor="middle" fill="#64748b" fontSize="7">~6K tokens</text>

            <path d="M210 220 L210 240 L190 260" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
            <rect x="150" y="265" width="80" height="40" rx="6" fill="#a855f7" fillOpacity="0.06" stroke="#a855f7" strokeWidth="1" />
            <text x="190" y="287" textAnchor="middle" fill="#a855f7" fontSize="9">Docker config</text>

            <path d="M210 220 L210 240 L230 260" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
            <rect x="200" y="265" width="80" height="40" rx="6" fill="#a855f7" fillOpacity="0.06" stroke="#a855f7" strokeWidth="1" />
            <text x="240" y="287" textAnchor="middle" fill="#a855f7" fontSize="9">CI/CD setup</text>

            {/* Continue from root (right) */}
            <path d="M140 110 L140 130 L260 130 L310 160" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <rect x="280" y="165" width="100" height="55" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="330" y="187" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Continue</text>
            <text x="330" y="203" textAnchor="middle" fill="#94a3b8" fontSize="8">Deeper on architecture</text>
            <text x="330" y="215" textAnchor="middle" fill="#64748b" fontSize="7">~8K tokens</text>

            {/* Merge indicator */}
            <rect x="560" y="165" width="180" height="55" rx="8" fill="#f59e0b" fillOpacity="0.06" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4" />
            <text x="650" y="187" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Merge Point</text>
            <text x="650" y="203" textAnchor="middle" fill="#94a3b8" fontSize="8">Branch A1 + B1 merged</text>
            <text x="650" y="215" textAnchor="middle" fill="#64748b" fontSize="7">Contexts combined</text>

            <path d="M100 287 L110 310 L300 310" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeDasharray="3" />
            <path d="M240 287 L230 310 L300 310" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeDasharray="3" />
            <path d="M380 220 L380 260 L560 260" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" fill="none" strokeDasharray="3" />

            {/* Active branch indicator */}
            <rect x="560" y="240" width="180" height="40" rx="6" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1" />
            <text x="650" y="260" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">● Active: Branch B</text>
            <text x="650" y="275" textAnchor="middle" fill="#64748b" fontSize="8">Click to switch branches</text>

            {/* Bottom status */}
            <rect x="50" y="360" width="700" height="45" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="140" y="382" fill="#64748b" fontSize="10">3 branches</text>
            <text x="300" y="382" fill="#64748b" fontSize="10">18K total tokens</text>
            <text x="480" y="382" fill="#64748b" fontSize="10">vs 120K linear</text>
            <text x="610" y="382" fill="#22c55e" fontSize="10" fontWeight="bold">85% saved</text>
            <text x="140" y="398" fill="#3b82f6" fontSize="9">● Branch A</text>
            <text x="280" y="398" fill="#a855f7" fontSize="9">● Branch B</text>
            <text x="420" y="398" fill="#f59e0b" fontSize="9">● Continue</text>
            <text x="560" y="398" fill="#f59e0b" fontSize="9">⊕ Merge</text>
        </svg>
    )
}
