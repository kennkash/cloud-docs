import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StepProps {
  number: number
  title: string
  children: ReactNode
  className?: string
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn("flex gap-4 mb-8", className)}>
      <div className="step-number">{number}</div>
      <div className="space-y-2 flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  )
}

interface StepByStepProps {
  children: ReactNode
  className?: string
}

export function StepByStep({ children, className }: StepByStepProps) {
  return <div className={cn("space-y-6", className)}>{children}</div>
}
