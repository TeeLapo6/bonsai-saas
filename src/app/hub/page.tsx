'use client'

import { useEffect } from 'react'

export default function HubRedirect() {
    const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || 'https://hub.bonsai-app.taylorlaporte.engineer'

    useEffect(() => {
        window.location.href = hubUrl
    }, [hubUrl])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="text-center space-y-4">
                <div className="animate-spin w-8 h-8 border-3 border-green-500 border-t-transparent rounded-full mx-auto" />
                <p className="text-muted-foreground">Redirecting to Bonsai Hub...</p>
                <a href={hubUrl} className="text-green-500 underline text-sm">
                    Click here if not redirected
                </a>
            </div>
        </div>
    )
}
