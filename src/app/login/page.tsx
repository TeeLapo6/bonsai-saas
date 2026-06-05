'use client'

import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_BONSAI_APP_URL || 'https://bonsai-app.taylorlaporte.engineer'

export default function LoginPage() {
    useEffect(() => {
        window.location.href = APP_URL
    }, [])

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <div className="text-center space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                <p className="text-muted-foreground">Redirecting to Bonsai App...</p>
                <p className="text-sm text-muted-foreground">
                    <a href={APP_URL} className="text-primary underline">Click here</a> if you are not redirected.
                </p>
            </div>
        </div>
    )
}
