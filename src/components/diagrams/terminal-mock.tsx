export function TerminalMock({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 800 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="320" rx="12" fill="#0f172a" />
            {/* Title bar */}
            <rect x="0" y="0" width="800" height="34" rx="12" fill="#1e293b" />
            <rect x="0" y="24" width="800" height="10" fill="#1e293b" />
            <circle cx="16" cy="17" r="4" fill="#ef4444" />
            <circle cx="30" cy="17" r="4" fill="#f59e0b" />
            <circle cx="44" cy="17" r="4" fill="#22c55e" />
            <text x="400" y="21" textAnchor="middle" fill="#64748b" fontSize="10">terminal — mcpify</text>

            {/* Terminal lines */}
            <text x="20" y="60" fill="#22c55e" fontSize="11" fontFamily="monospace">$</text>
            <text x="34" y="60" fill="#e2e8f0" fontSize="11" fontFamily="monospace">bonsai mcpify ./blocks/my-tool.yaml</text>

            <text x="20" y="84" fill="#64748b" fontSize="10" fontFamily="monospace">Reading block manifest...</text>
            <text x="20" y="104" fill="#64748b" fontSize="10" fontFamily="monospace">Detected tool input schema with 3 parameters:</text>
            <text x="34" y="124" fill="#94a3b8" fontSize="10" fontFamily="monospace">- input_text (string) — User prompt</text>
            <text x="34" y="144" fill="#94a3b8" fontSize="10" fontFamily="monospace">- max_length (integer) — Max response length</text>
            <text x="34" y="164" fill="#94a3b8" fontSize="10" fontFamily="monospace">- format (enum: json|text|markdown) — Output format</text>

            <text x="20" y="188" fill="#64748b" fontSize="10" fontFamily="monospace">Generating MCP server...</text>
            <text x="20" y="208" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ MCP manifest written to ./mcp/my-tool-server.yaml</text>
            <text x="20" y="228" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Server scaffold: ./mcp/server.ts</text>
            <text x="20" y="248" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Transport config: ./mcp/transport.json</text>
            <text x="20" y="268" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Dockerfile: ./mcp/Dockerfile</text>

            <text x="20" y="296" fill="#f59e0b" fontSize="10" fontFamily="monospace">Run: bonsai block install ./mcp/my-tool-server.yaml</text>
        </svg>
    )
}
