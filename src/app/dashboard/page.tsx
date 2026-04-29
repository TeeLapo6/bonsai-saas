'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Package, LogOut, User, Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [publishing, setPublishing] = useState(false);
    const [publishStatus, setPublishStatus] = useState<string | null>(null);
    const [newBlock, setNewBlock] = useState({ name: '', description: '', type: 'agent' });
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
            } else {
                setUser(user);
            }
            setLoading(false);
        };

        getUser();
    }, [router]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    const handlePublish = async () => {
        setPublishing(true);
        setPublishStatus(null);

        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) throw new Error("No session");

            // Mock manifest for testing
            const manifest = {
                block: {
                    block_type: newBlock.type,
                    spec_version: "0.1.0",
                    metadata: {
                        name: newBlock.name,
                        version: "0.1.0",
                        description: newBlock.description,
                        author: user.email
                    },
                    content: {
                        instructions: "Placeholder content"
                    }
                }
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_HUB_URL || 'http://localhost:8000'}/api/packages/publish`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.access_token}`
                },
                body: JSON.stringify(manifest)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Publish failed: ${text}`);
            }

            const result = await response.json();
            setPublishStatus(`Success! Block ID: ${result.block_id}`);
            setNewBlock({ name: '', description: '', type: 'agent' });
        } catch (e: any) {
            setPublishStatus(`Error: ${e.message}`);
        } finally {
            setPublishing(false);
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/20">
            <header className="border-b bg-background px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Package className="h-6 w-6" />
                    <span>Bonsai Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {user?.email}
                    </div>
                    <Button variant="outline" size="sm" onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </header>

            <main className="container mx-auto p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">My Blocks</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Create your first block.</p>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="w-full">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create New Block
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Create Block</DialogTitle>
                                        <DialogDescription>
                                            Publish a new block to the Bonsai Hub.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                value={newBlock.name}
                                                onChange={(e) => setNewBlock({ ...newBlock, name: e.target.value })}
                                                className="col-span-3"
                                                placeholder="my-agent"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="type" className="text-right">
                                                Type
                                            </Label>
                                            <Input
                                                id="type"
                                                value={newBlock.type}
                                                onChange={(e) => setNewBlock({ ...newBlock, type: e.target.value })}
                                                className="col-span-3"
                                                placeholder="agent"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="desc" className="text-right">
                                                Desc
                                            </Label>
                                            <Input
                                                id="desc"
                                                value={newBlock.description}
                                                onChange={(e) => setNewBlock({ ...newBlock, description: e.target.value })}
                                                className="col-span-3"
                                                placeholder="A helpful agent..."
                                            />
                                        </div>
                                    </div>

                                    {publishStatus && (
                                        <div className={`text-sm mb-2 ${publishStatus.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                                            {publishStatus}
                                        </div>
                                    )}

                                    <DialogFooter>
                                        <Button type="submit" onClick={handlePublish} disabled={publishing}>
                                            {publishing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Publish
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Free Tier</div>
                            <p className="text-xs text-muted-foreground mb-4">
                                Upgrade for private blocks.
                            </p>
                            <Button variant="outline" className="w-full">Manage Subscription</Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
