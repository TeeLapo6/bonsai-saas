'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2, Mail, Lock, AlertCircle, CheckCircle2, Chrome, Github } from 'lucide-react';

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [oauthLoading, setOauthLoading] = useState<'google' | 'github' | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [view, setView] = useState<'signin' | 'signup'>('signin');

    const router = useRouter();

    const handleOAuth = async (provider: 'google' | 'github') => {
        setOauthLoading(provider);
        setError(null);
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
            setOauthLoading(null);
        }
    };

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            if (view === 'signin') {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                router.push('/dashboard');
                router.refresh();
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/auth/callback`,
                    },
                });
                if (error) throw error;
                setMessage('Check your email for the confirmation link.');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>{view === 'signin' ? 'Welcome Back' : 'Create Account'}</CardTitle>
                <CardDescription>
                    {view === 'signin'
                        ? 'Enter your credentials or continue with a provider'
                        : 'Sign up to start publishing blocks to the Hub'}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* OAuth Buttons */}
                <div className="space-y-2">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleOAuth('google')}
                        disabled={!!oauthLoading}
                    >
                        {oauthLoading === 'google' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Chrome className="mr-2 h-4 w-4" />
                        )}
                        Continue with Google
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleOAuth('github')}
                        disabled={!!oauthLoading}
                    >
                        {oauthLoading === 'github' ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Github className="mr-2 h-4 w-4" />
                        )}
                        Continue with GitHub
                    </Button>
                </div>

                <div className="relative">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                        or continue with email
                    </span>
                </div>

                <form onSubmit={handleAuth} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="pl-9"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-9"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center p-3 text-sm text-red-500 bg-red-50 rounded-md">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="flex items-center p-3 text-sm text-green-500 bg-green-50 rounded-md">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            {message}
                        </div>
                    )}

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {view === 'signin' ? 'Sign In' : 'Sign Up'}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button
                    variant="link"
                    onClick={() => {
                        setView(view === 'signin' ? 'signup' : 'signin');
                        setError(null);
                        setMessage(null);
                    }}
                >
                    {view === 'signin'
                        ? "Don't have an account? Sign up"
                        : "Already have an account? Sign in"}
                </Button>
            </CardFooter>
        </Card>
    );
}
