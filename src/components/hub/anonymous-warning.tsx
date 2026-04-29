
import { Shield, Lock, EyeOff } from 'lucide-react'

export function AnonymousWarning() {
    return (
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Shield className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-300">Privacy-First Marketplace</h3>
                    <p className="text-sm text-blue-800/80 dark:text-blue-400/80 mt-1">
                        You are browsing anonymously. No account is required to browse, search, or import blocks.
                        All deep-links execute locally in your Bonsai instance.
                    </p>
                </div>
            </div>
        </div>
    )
}
