export function TokenSavingsDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 460" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="460" rx="12" fill="url(#ts-bg)" />
            <text x="400" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">Token Usage: 5 Explorations</text>

            {/* LEFT PANEL: Branching (Tree) */}
            <rect x="20" y="50" width="370" height="185" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
            <text x="205" y="78" textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold">Branching Tree</text>

            {/* Root node */}
            <circle cx="100" cy="110" r="12" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
            <text x="100" y="114" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">R</text>
            <text x="100" y="135" textAnchor="middle" fill="#64748b" fontSize="9">Root</text>

            {/* Branch 1 */}
            <line x1="112" y1="110" x2="170" y2="90" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="185" cy="86" r="10" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1.5" />
            <text x="185" y="90" textAnchor="middle" fill="#22c55e" fontSize="7">A</text>
            <line x1="195" y1="86" x2="220" y2="76" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="232" cy="73" r="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <text x="232" y="76" textAnchor="middle" fill="#22c55e" fontSize="6">B</text>

            {/* Branch 2 */}
            <line x1="112" y1="110" x2="160" y2="130" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="175" cy="136" r="10" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1.5" />
            <text x="175" y="140" textAnchor="middle" fill="#22c55e" fontSize="7">C</text>
            <line x1="185" y1="136" x2="215" y2="146" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="228" cy="149" r="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <line x1="228" y1="157" x2="228" y2="175" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="228" cy="188" r="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" />
            <text x="228" y="191" textAnchor="middle" fill="#22c55e" fontSize="6">D</text>

            {/* Branch 3 */}
            <line x1="112" y1="110" x2="170" y2="155" stroke="#16a34a" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="185" cy="162" r="10" fill="#16a34a" fillOpacity="0.2" stroke="#16a34a" strokeWidth="1.5" />
            <text x="185" y="166" textAnchor="middle" fill="#16a34a" fontSize="7">E</text>

            {/* Right side: token counts */}
            <text x="290" y="100" fill="#64748b" fontSize="11">Exploration A: 40K tokens</text>
            <text x="290" y="120" fill="#64748b" fontSize="11">Exploration B: 15K tokens</text>
            <text x="290" y="140" fill="#64748b" fontSize="11">Exploration C: 38K tokens</text>
            <text x="290" y="160" fill="#64748b" fontSize="11">Exploration D: 12K tokens</text>
            <text x="290" y="180" fill="#64748b" fontSize="11">Exploration E: 42K tokens</text>
            <text x="290" y="210" fill="#22c55e" fontSize="14" fontWeight="bold">Total: ~200K tokens</text>
            <rect x="285" y="218" width="90" height="6" rx="3" fill="#22c55e" fillOpacity="0.6" />

            {/* RIGHT PANEL: Linear */}
            <rect x="410" y="50" width="370" height="185" rx="8" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
            <text x="595" y="78" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">Linear Chat</text>

            {/* Linear chain */}
            <circle cx="440" cy="110" r="12" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="440" y="114" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">1</text>
            <line x1="452" y1="110" x2="478" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="492" cy="110" r="10" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <text x="492" y="114" textAnchor="middle" fill="#ef4444" fontSize="7">2</text>
            <line x1="502" y1="110" x2="518" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="532" cy="110" r="10" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <text x="532" y="114" textAnchor="middle" fill="#ef4444" fontSize="7">3</text>
            <line x1="542" y1="110" x2="558" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="572" cy="110" r="10" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <text x="572" y="114" textAnchor="middle" fill="#ef4444" fontSize="7">4</text>
            <line x1="582" y1="110" x2="598" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="612" cy="110" r="10" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <text x="612" y="114" textAnchor="middle" fill="#ef4444" fontSize="7">5</text>
            <line x1="622" y1="110" x2="648" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="662" cy="110" r="10" fill="#ef4444" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
            <text x="662" y="114" textAnchor="middle" fill="#ef4444" fontSize="7">6</text>

            <text x="440" y="148" fill="#64748b" fontSize="11">Each new exploration includes</text>
            <text x="440" y="165" fill="#64748b" fontSize="11">full conversation history</text>

            <rect x="440" y="180" width="200" height="20" rx="4" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1" />
            <text x="540" y="194" textAnchor="middle" fill="#ef4444" fontSize="11">Message 1 + Message 2 + ...</text>

            <text x="440" y="220" fill="#ef4444" fontSize="14" fontWeight="bold">Total: ~1.2M tokens</text>
            <rect x="435" y="228" width="120" height="6" rx="3" fill="#ef4444" fillOpacity="0.6" />

            {/* Bottom comparison */}
            <rect x="100" y="260" width="600" height="80" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="288" textAnchor="middle" fill="#f8fafc" fontSize="15" fontWeight="bold">Bonsai Branches Save 83% on Tokens</text>
            <text x="400" y="312" textAnchor="middle" fill="#94a3b8" fontSize="12">1.2M → 200K tokens = 1M tokens saved per session</text>
            <text x="400" y="332" textAnchor="middle" fill="#64748b" fontSize="11">At $5/M tokens = $5 saved per deep-research session</text>

            {/* Gauge */}
            <rect x="250" y="350" width="300" height="20" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <rect x="252" y="352" width="60" height="16" rx="8" fill="#22c55e" />
            <text x="282" y="364" textAnchor="middle" fill="#052e16" fontSize="9" fontWeight="bold">83%</text>
            <text x="400" y="378" textAnchor="middle" fill="#64748b" fontSize="10">Shared context reused across branches</text>

            <defs>
                <linearGradient id="ts-bg" x1="0" y1="0" x2="800" y2="460" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
