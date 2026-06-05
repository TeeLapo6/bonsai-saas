import { Image } from 'lucide-react'

export function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
    return (
        <div className={`rounded-xl border-2 border-dashed border-muted bg-muted/30 flex flex-col items-center justify-center gap-2 p-8 ${className ?? ''}`}>
            <Image className="w-10 h-10 text-muted-foreground/40" />
            <span className="text-xs text-muted-foreground text-center">{label}</span>
        </div>
    )
}
