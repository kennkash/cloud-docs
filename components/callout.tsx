import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle, HelpCircle, Lightbulb } from "lucide-react"

type CalloutType = "note" | "warning" | "tip" | "caution"

interface CalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
  className?: string
}

export function Callout({ type, title, children, className }: CalloutProps) {
  const icons = {
    note: <Info className="h-4 w-4" />,
    warning: <AlertTriangle className="h-4 w-4" />,
    tip: <Lightbulb className="h-4 w-4" />,
    caution: <HelpCircle className="h-4 w-4" />,
  }

  const variants = {
    note: "default",
    warning: "default",
    tip: "default",
    caution: "destructive",
  }

  const titles = {
    note: title || "Note",
    warning: title || "Warning",
    tip: title || "Tip",
    caution: title || "Caution",
  }

  return (
    <Alert variant={variants[type] as "default" | "destructive"} className={cn("my-6", className)}>
      {icons[type]}
      <AlertTitle>{titles[type]}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
