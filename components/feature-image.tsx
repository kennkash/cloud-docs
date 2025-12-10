"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { useState } from "react"

interface FeatureImageProps {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  className?: string
}

export function FeatureImage({ src, alt, width, height, caption, className }: FeatureImageProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <figure className={cn("my-6", className)}>
      <div className="screenshot relative group">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full object-cover"
        />
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setIsExpanded(true)}
        >
          <Maximize2 className="h-4 w-4 mr-1" />
          Expand
        </Button>
      </div>
      {caption && <figcaption className="text-sm text-center text-muted-foreground mt-2">{caption}</figcaption>}

      {isExpanded && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-auto bg-card rounded-lg shadow-lg p-2">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width * 1.5}
              height={height * 1.5}
              className="w-full object-contain"
            />
            {caption && <div className="text-sm text-center text-muted-foreground mt-2 p-2">{caption}</div>}
          </div>
        </div>
      )}
    </figure>
  )
}
