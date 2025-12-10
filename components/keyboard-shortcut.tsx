import { cn } from "@/lib/utils"

interface KeyboardShortcutProps {
  keys: string[]
  description: string
  className?: string
}

export function KeyboardShortcut({ keys, description, className }: KeyboardShortcutProps) {
  return (
    <div className={cn("flex items-center justify-between py-2", className)}>
      <span className="text-sm">{description}</span>
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <kbd key={index} className="px-2 py-1 text-xs font-semibold bg-muted rounded border">
            {key}
          </kbd>
        ))}
      </div>
    </div>
  )
}
