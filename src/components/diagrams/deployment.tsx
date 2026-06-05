export function DeploymentDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="380" rx="12" fill="url(#dep-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Deployment Options</text>

            {/* Local */}
            <rect x="30" y="55" width="170" height="140" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="30" y="55" width="170" height="30" rx="10" fill="#22c55e" fillOpacity="0.1" />
            <text x="115" y="75" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Local</text>
            <text x="115" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11">cargo run / binary</text>
            <text x="115" y="125" textAnchor="middle" fill="#64748b" fontSize="10">SQLite storage</text>
            <text x="115" y="145" textAnchor="middle" fill="#64748b" fontSize="10">localhost:3000</text>
            <text x="115" y="165" textAnchor="middle" fill="#64748b" fontSize="10">Notebook-first dev</text>
            <rect x="50" y="180" width="130" height="14" rx="4" fill="#22c55e" fillOpacity="0.15" />
            <text x="115" y="191" textAnchor="middle" fill="#22c55e" fontSize="8">Single user, zero config</text>

            {/* Docker */}
            <rect x="220" y="55" width="170" height="140" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="220" y="55" width="170" height="30" rx="10" fill="#3b82f6" fillOpacity="0.1" />
            <text x="305" y="75" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Docker</text>
            <text x="305" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11">docker compose up</text>
            <text x="305" y="125" textAnchor="middle" fill="#64748b" fontSize="10">SQLite / Volume</text>
            <text x="305" y="145" textAnchor="middle" fill="#64748b" fontSize="10">Traefik reverse proxy</text>
            <text x="305" y="165" textAnchor="middle" fill="#64748b" fontSize="10">Auto SSL (Let's Encrypt)</text>
            <rect x="240" y="180" width="130" height="14" rx="4" fill="#3b82f6" fillOpacity="0.15" />
            <text x="305" y="191" textAnchor="middle" fill="#3b82f6" fontSize="8">Small team, single host</text>

            {/* VPC */}
            <rect x="410" y="55" width="170" height="140" rx="10" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="410" y="55" width="170" height="30" rx="10" fill="#a855f7" fillOpacity="0.1" />
            <text x="495" y="75" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">VPC / Private Cloud</text>
            <text x="495" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11">Kubernetes / Nomad</text>
            <text x="495" y="125" textAnchor="middle" fill="#64748b" fontSize="10">Postgres cluster</text>
            <text x="495" y="145" textAnchor="middle" fill="#64748b" fontSize="10">Internal network only</text>
            <text x="495" y="165" textAnchor="middle" fill="#64748b" fontSize="10">Team portals</text>
            <rect x="430" y="180" width="130" height="14" rx="4" fill="#a855f7" fillOpacity="0.15" />
            <text x="495" y="191" textAnchor="middle" fill="#a855f7" fontSize="8">Org-wide, controlled</text>

            {/* Cloud */}
            <rect x="600" y="55" width="170" height="140" rx="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="600" y="55" width="170" height="30" rx="10" fill="#f59e0b" fillOpacity="0.1" />
            <text x="685" y="75" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Bonsai Cloud</text>
            <text x="685" y="105" textAnchor="middle" fill="#94a3b8" fontSize="11">Managed hosting</text>
            <text x="685" y="125" textAnchor="middle" fill="#64748b" fontSize="10">Auto-scaling</text>
            <text x="685" y="145" textAnchor="middle" fill="#64748b" fontSize="10">Backups + DR</text>
            <text x="685" y="165" textAnchor="middle" fill="#64748b" fontSize="10">SLA support</text>
            <rect x="620" y="180" width="130" height="14" rx="4" fill="#f59e0b" fillOpacity="0.15" />
            <text x="685" y="191" textAnchor="middle" fill="#f59e0b" fontSize="8">Enterprise, managed</text>

            {/* Storage Backend table */}
            <rect x="30" y="215" width="740" height="145" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="240" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">Storage Backend Compatibility</text>

            {/* Table header */}
            <rect x="50" y="255" width="160" height="24" rx="4" fill="#334155" />
            <text x="130" y="272" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Storage</text>
            <rect x="220" y="255" width="120" height="24" rx="4" fill="#334155" />
            <text x="280" y="272" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Local</text>
            <rect x="350" y="255" width="120" height="24" rx="4" fill="#334155" />
            <text x="410" y="272" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Docker</text>
            <rect x="480" y="255" width="120" height="24" rx="4" fill="#334155" />
            <text x="540" y="272" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">VPC</text>
            <rect x="610" y="255" width="120" height="24" rx="4" fill="#334155" />
            <text x="670" y="272" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Cloud</text>

            {/* Row 1 */}
            <text x="130" y="305" textAnchor="middle" fill="#64748b" fontSize="10">SQLite</text>
            <text x="280" y="305" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>
            <text x="410" y="305" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>
            <text x="540" y="305" textAnchor="middle" fill="#64748b" fontSize="10">—</text>
            <text x="670" y="305" textAnchor="middle" fill="#64748b" fontSize="10">—</text>

            {/* Row 2 */}
            <text x="130" y="325" textAnchor="middle" fill="#64748b" fontSize="10">Postgres</text>
            <text x="280" y="325" textAnchor="middle" fill="#64748b" fontSize="10">—</text>
            <text x="410" y="325" textAnchor="middle" fill="#64748b" fontSize="10">—</text>
            <text x="540" y="325" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>
            <text x="670" y="325" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>

            {/* Row 3 */}
            <text x="130" y="345" textAnchor="middle" fill="#64748b" fontSize="10">S3 / R2</text>
            <text x="280" y="345" textAnchor="middle" fill="#64748b" fontSize="10">—</text>
            <text x="410" y="345" textAnchor="middle" fill="#64748b" fontSize="10">—</text>
            <text x="540" y="345" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>
            <text x="670" y="345" textAnchor="middle" fill="#22c55e" fontSize="10">✓</text>

            <defs>
                <linearGradient id="dep-bg" x1="0" y1="0" x2="800" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
