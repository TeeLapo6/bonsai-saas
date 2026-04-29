'use client'

import { useState, useEffect } from 'react'

export interface DeepLinkOptions {
    type: string
    id: string
    source?: string
    [key: string]: any
}

export function useBonsaiDeepLink() {
    const [hasLocalInstance, setHasLocalInstance] = useState(false)
    const [isAttempting, setIsAttempting] = useState(false)

    const BONSAI_SCHEME = 'bonsai://'
    const BONSAI_WEB_FALLBACK = 'http://localhost:3000/import'

    useEffect(() => {
        const probeLocalInstance = async () => {
            try {
                const response = await fetch('http://localhost:3000/health', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'omit',
                })
                if (response.ok) {
                    setHasLocalInstance(true)
                }
            } catch (e) {
                // Not running or blocked
            }
        }

        probeLocalInstance()
    }, [])

    const getDeepLink = (options: DeepLinkOptions) => {
        const { type, id, source = 'hub', ...extra } = options
        const params = new URLSearchParams({ type, id, source, ...extra })
        return `${BONSAI_SCHEME}import?${params.toString()}`
    }

    const getWebFallback = (options: DeepLinkOptions) => {
        const { type, id, source = 'hub' } = options
        const params = new URLSearchParams({ type, id, source })
        return `${BONSAI_WEB_FALLBACK}?${params.toString()}`
    }

    const addToBonsai = (options: DeepLinkOptions) => {
        const deepLink = getDeepLink(options)
        setIsAttempting(true)

        // Hidden iframe trick
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = deepLink
        document.body.appendChild(iframe)

        const cleanup = () => {
            if (iframe.parentNode) document.body.removeChild(iframe)
            setIsAttempting(false)
        }

        // timeout for fallback
        const timeout = setTimeout(cleanup, 2000)

        // blur event trick to detect if app opened
        const handleBlur = () => {
            clearTimeout(timeout)
            cleanup()
            window.removeEventListener('blur', handleBlur)
        }
        window.addEventListener('blur', handleBlur)
    }

    return {
        hasLocalInstance,
        isAttempting,
        addToBonsai,
        getDeepLink,
        getWebFallback
    }
}
