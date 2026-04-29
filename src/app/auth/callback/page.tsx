'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        const handleCallback = async () => {
            if (code) {
                const { error } = await supabase.auth.exchangeCodeForSession(code);
                if (!error) {
                    router.push('/dashboard');
                } else {
                    router.push('/login?error=auth-code-error');
                }
            } else {
                // If no code, maybe we are already logged in or implicit flow?
                // Just check session
                const { data } = await supabase.auth.getSession();
                if (data.session) {
                    router.push('/dashboard');
                } else {
                    router.push('/login');
                }
            }
        };

        handleCallback();
    }, [code, router]);

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Verifying login...</span>
        </div>
    );
}
