export function HubBrowserMock({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 420" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="420" rx="12" fill="#0f172a" />
            {/* Title bar */}
            <rect x="0" y="0" width="800" height="36" rx="12" fill="#1e293b" />
            <rect x="0" y="26" width="800" height="10" fill="#1e293b" />
            <circle cx="18" cy="18" r="4" fill="#ef4444" />
            <circle cx="32" cy="18" r="4" fill="#f59e0b" />
            <circle cx="46" cy="18" r="4" fill="#22c55e" />
            <text x="400" y="22" textAnchor="middle" fill="#64748b" fontSize="10">Bonsai Hub — 187 building blocks</text>

            {/* Search bar */}
            <rect x="20" y="50" width="760" height="34" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="40" y="72" fill="#64748b" fontSize="11">🔍 Search blocks...</text>

            {/* Category filters */}
            <rect x="20" y="94" width="80" height="28" rx="6" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1" />
            <text x="60" y="113" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">All</text>
            <rect x="108" y="94" width="90" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="153" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">Agents</text>
            <rect x="206" y="94" width="80" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="246" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">Tools</text>
            <rect x="294" y="94" width="90" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="339" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">MCP Servers</text>
            <rect x="392" y="94" width="90" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="437" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">Workflows</text>
            <rect x="490" y="94" width="90" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="535" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">Providers</text>
            <rect x="588" y="94" width="90" height="28" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="633" y="113" textAnchor="middle" fill="#94a3b8" fontSize="9">Datasets</text>

            {/* Block cards */}
            {[ 
                { name: 'Code Review Agent', type: 'Agent', icon: '🤖', color: '#3b82f6', installed: true },
                { name: 'GitHub Issue Fetcher', type: 'Tool', icon: '🔧', color: '#22c55e', installed: false },
                { name: 'Web Search MCP', type: 'MCP', icon: '🌐', color: '#a855f7', installed: true },
                { name: 'Email Summarizer', type: 'Workflow', icon: '⚡', color: '#f59e0b', installed: false },
                { name: 'OpenAI Provider', type: 'Provider', icon: '🔌', color: '#06b6d4', installed: true },
                { name: 'Codebase RAG', type: 'Agent', icon: '📚', color: '#3b82f6', installed: false },
                { name: 'SQL Query Tool', type: 'Tool', icon: '🗄️', color: '#22c55e', installed: true },
                { name: 'Discord Bot MCP', type: 'MCP', icon: '💬', color: '#a855f7', installed: false },
            ].map((block, i) => {
                const col = i % 4
                const row = Math.floor(i / 4)
                const x = 20 + col * 192
                const y = 134 + row * 66
                return (
                    <g key={i}>
                        <rect x={x} y={y} width="178" height="56" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                        <text x={x + 16} y={y + 24} fontSize="14">{block.icon}</text>
                        <text x={x + 42} y={y + 20} fill="#e2e8f0" fontSize="10" fontWeight="bold">{block.name}</text>
                        <rect x={x + 42} y={y + 28} width={block.type.length * 7 + 12} height="16" rx="4" fill={block.color} fillOpacity="0.15" />
                        <text x={x + 48} y={y + 40} fill={block.color} fontSize="8">{block.type}</text>
                        {block.installed
                            ? <text x={x + 165} y={y + 20} textAnchor="end" fill="#22c55e" fontSize="8">✓</text>
                            : <rect x={x + 130} y={y + 28} width="36" height="16" rx="4" fill="#3b82f6" fillOpacity="0.15" />
                        }
                        {!block.installed && <text x={x + 148} y={y + 40} textAnchor="middle" fill="#3b82f6" fontSize="7">Install</text>}
                    </g>
                )
            })}

            {/* Pagination */}
            <text x="400" y="290" textAnchor="middle" fill="#64748b" fontSize="10">Page 1 of 24 (187 results)</text>
            <rect x="340" y="300" width="28" height="22" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="354" y="315" textAnchor="middle" fill="#94a3b8" fontSize="10">‹</text>
            <rect x="372" y="300" width="28" height="22" rx="4" fill="#334155" />
            <text x="386" y="315" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="bold">1</text>
            <rect x="404" y="300" width="28" height="22" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="418" y="315" textAnchor="middle" fill="#94a3b8" fontSize="10">2</text>
            <rect x="436" y="300" width="28" height="22" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="450" y="315" textAnchor="middle" fill="#94a3b8" fontSize="10">›</text>

            {/* Bottom info */}
            <rect x="20" y="345" width="760" height="55" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="40" y="368" fill="#64748b" fontSize="10">💰 Free — no account required</text>
            <text x="40" y="388" fill="#64748b" fontSize="10">🔗 bonsai:// deep links — click to install</text>
            <text x="400" y="368" fill="#64748b" fontSize="10">📦 All blocks are open YAML manifests</text>
            <text x="400" y="388" fill="#64748b" fontSize="10">🔒 GPG-signed publisher identity</text>
        </svg>
    )
}
