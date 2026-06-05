export function MergeGraftDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" rx="12" fill="url(#mg-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Merge &amp; Graft</text>

            {/* LEFT: Two branches diverging */}
            <text x="100" y="65" fill="#64748b" fontSize="12">Branch Points</text>

            {/* Main trunk */}
            <rect x="85" y="80" width="30" height="14" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <text x="100" y="91" textAnchor="middle" fill="#22c55e" fontSize="8">Root</text>
            <line x1="100" y1="94" x2="100" y2="120" stroke="#334155" strokeWidth="2" />
            <circle cx="100" cy="130" r="6" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="100" y1="136" x2="100" y2="155" stroke="#334155" strokeWidth="2" />
            <circle cx="100" cy="165" r="6" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5" />

            {/* Branch A - left */}
            <line x1="100" y1="130" x2="50" y2="160" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="45" cy="168" r="10" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="45" y="172" textAnchor="middle" fill="#3b82f6" fontSize="8">A1</text>
            <line x1="45" y1="178" x2="45" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="45" cy="212" r="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1" />
            <text x="45" y="216" textAnchor="middle" fill="#3b82f6" fontSize="7">A2</text>
            <line x1="45" y1="220" x2="45" y2="240" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="45" cy="252" r="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1" />
            <text x="45" y="256" textAnchor="middle" fill="#3b82f6" fontSize="7">A3</text>

            {/* Branch B - right */}
            <line x1="100" y1="165" x2="155" y2="195" stroke="#a855f7" strokeWidth="2" />
            <circle cx="160" cy="203" r="10" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1.5" />
            <text x="160" y="207" textAnchor="middle" fill="#a855f7" fontSize="8">B1</text>
            <line x1="160" y1="213" x2="160" y2="235" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="160" cy="247" r="8" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeWidth="1" />
            <text x="160" y="251" textAnchor="middle" fill="#a855f7" fontSize="7">B2</text>

            {/* MIDDLE: Merge point */}
            <text x="400" y="65" fill="#64748b" fontSize="12">Merge</text>
            <rect x="300" y="162" width="200" height="60" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4" />
            <text x="400" y="188" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Merge Node</text>
            <text x="400" y="208" textAnchor="middle" fill="#94a3b8" fontSize="10">Branch A3 + B2 → Merged Context</text>

            {/* Arrows into merge */}
            <path d="M45 260 L45 192 L300 192" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeDasharray="4" />
            <path d="M160 255 L160 192 L300 192" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeDasharray="4" />

            {/* RIGHT: Graft example */}
            <text x="680" y="65" fill="#64748b" fontSize="12">Graft</text>

            {/* Tree 1 */}
            <rect x="590" y="80" width="24" height="12" rx="3" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <text x="602" y="90" textAnchor="middle" fill="#22c55e" fontSize="7">T1</text>
            <line x1="602" y1="92" x2="602" y2="115" stroke="#334155" strokeWidth="1.5" />
            <circle cx="602" cy="125" r="5" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1" />
            <line x1="602" y1="130" x2="602" y2="148" stroke="#334155" strokeWidth="1.5" />
            <circle cx="602" cy="158" r="5" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1" />

            {/* Tree 2 */}
            <rect x="730" y="120" width="24" height="12" rx="3" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <text x="742" y="130" textAnchor="middle" fill="#22c55e" fontSize="7">T2</text>
            <line x1="742" y1="132" x2="742" y2="150" stroke="#334155" strokeWidth="1.5" />

            {/* Graft arrow */}
            <path d="M602 158 C 640 180, 700 170, 742 150" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="5" />
            <polygon points="742,148 740,155 748,152" fill="#f59e0b" />
            <text x="672" y="178" textAnchor="middle" fill="#f59e0b" fontSize="9">Graft T2 → T1</text>

            {/* Result */}
            <text x="680" y="215" fill="#64748b" fontSize="11">Result: Conversation T1</text>
            <text x="680" y="232" fill="#64748b" fontSize="11">now includes T2's subtree</text>
            <text x="680" y="252" fill="#64748b" fontSize="11">as a child conversation</text>

            {/* Bottom annotation */}
            <rect x="80" y="300" width="640" height="95" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="326" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="bold">Why Context Recombination Matters</text>
            <text x="400" y="350" textAnchor="middle" fill="#94a3b8" fontSize="11">Merge: Combine two branches into a single conversation — preserves both paths' context</text>
            <text x="400" y="370" textAnchor="middle" fill="#94a3b8" fontSize="11">Graft: Insert one conversation tree into another — enables reusable sub-trees across projects</text>
            <text x="400" y="390" textAnchor="middle" fill="#64748b" fontSize="10">No other AI tool lets you recombine conversation histories after branching</text>

            <defs>
                <linearGradient id="mg-bg" x1="0" y1="0" x2="800" y2="420" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
