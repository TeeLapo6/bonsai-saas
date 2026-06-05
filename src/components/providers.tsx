'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
// Initialize PostHog on module load (client-side only)
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        capture_pageview: false, // We capture manually for Next.js App Router
        capture_pageleave: true,
        persistence: 'localStorage',
    })
}

// Component to track page views on route changes
function PageViewTrackerInner() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname
            if (searchParams?.toString()) {
                url = url + `?${searchParams.toString()}`
            }
            posthog.capture('$pageview', { $current_url: url })
        }
    }, [pathname, searchParams])

    return null
}

// Wrap in Suspense to handle SSR/prerendering
function PageViewTracker() {
    return (
        <Suspense fallback={null}>
            <PageViewTrackerInner />
        </Suspense>
    )
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
            <PageViewTracker />
            {children}
        </PostHogProvider>
    )
}

// Export posthog for manual event tracking
export { posthog }

