export function VariableFanOutDiagram({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 440" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="440" rx="12" fill="url(#vf-bg)" />
            <text x="400" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="bold">Variable Fan-Out</text>

            {/* Template */}
            <rect x="30" y="60" width="180" height="100" rx="8" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="120" y="84" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Prompt Template</text>
            <text x="50" y="104" fill="#94a3b8" fontSize="9">"Write a personalized email</text>
            <text x="50" y="118" fill="#94a3b8" fontSize="9">{'for {firstName} about'}</text>
            <text x="50" y="132" fill="#94a3b8" fontSize="9">{'{topic}. Mention their'}</text>
            <text x="50" y="146" fill="#94a3b8" fontSize="9">{'role {role}..."'}</text>

            {/* CSV Data Source */}
            <rect x="30" y="180" width="180" height="80" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="120" y="204" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">CSV / Data Source</text>
            <text x="50" y="224" fill="#94a3b8" fontSize="8">firstName,topic,role</text>
            <text x="50" y="238" fill="#94a3b8" fontSize="8">Alice,AI,Engineer</text>
            <text x="50" y="252" fill="#94a3b8" fontSize="8">Bob,ML,Scientist ...</text>

            {/* Arrow */}
            <path d="M210 130 L260 130" stroke="#334155" strokeWidth="2" />
            <polygon points="258,125 268,130 258,135" fill="#334155" />

            {/* Fan-out engine */}
            <rect x="270" y="80" width="100" height="100" rx="10" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
            <text x="320" y="120" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Fan-Out</text>
            <text x="320" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">Engine</text>
            <text x="320" y="160" textAnchor="middle" fill="#64748b" fontSize="8">500 iterations</text>

            {/* Fan out arrows */}
            <path d="M370 100 L420 80" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M370 120 L420 120" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M370 140 L420 160" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M370 160 L420 180" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />

            {/* Output cards */}
            <rect x="425" y="60" width="150" height="38" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            <text x="500" y="78" textAnchor="middle" fill="#22c55e" fontSize="10">Email 1: Alice → AI</text>
            <text x="500" y="91" textAnchor="middle" fill="#64748b" fontSize="8">Personalized output</text>

            <rect x="425" y="105" width="150" height="38" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
            <text x="500" y="123" textAnchor="middle" fill="#22c55e" fontSize="10">Email 2: Bob → ML</text>
            <text x="500" y="136" textAnchor="middle" fill="#64748b" fontSize="8">Personalized output</text>

            <rect x="425" y="150" width="150" height="38" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeOpacity="0.3" />
            <text x="500" y="168" textAnchor="middle" fill="#64748b" fontSize="10">Email 3: ...</text>

            <rect x="425" y="195" width="150" height="38" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" strokeOpacity="0.3" />
            <text x="500" y="213" textAnchor="middle" fill="#64748b" fontSize="10">...</text>

            {/* Right: aggregator */}
            <path d="M575 140 L620 140 L620 280 L580 280" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" fill="none" strokeDasharray="4" />
            <rect x="580" y="250" width="180" height="50" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="670" y="274" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Aggregated Result</text>
            <text x="670" y="292" textAnchor="middle" fill="#94a3b8" fontSize="9">500/500 emails generated</text>

            {/* Bottom detail */}
            <rect x="80" y="330" width="640" height="85" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
            <text x="400" y="356" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">One template, hundreds of personalized outputs</text>
            <text x="400" y="378" textAnchor="middle" fill="#94a3b8" fontSize="10">Prompt template variables auto-filled from CSV rows. Each row → one unique generation.</text>
            <text x="400" y="398" textAnchor="middle" fill="#64748b" fontSize="10">Batch processing with configurable concurrency, error handling, and progress tracking per row.</text>

            <defs>
                <linearGradient id="vf-bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                </linearGradient>
            </defs>
        </svg>
    )
}
