"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PageNavigationProps {
  headings: { id: string; text: string; level: number }[]
}

export function PageNavigation({ headings }: PageNavigationProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
      window.removeEventListener("scroll", handleScroll)
    }
  }, [headings])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div className="table-of-contents">
        <div className="text-sm font-medium mb-4">On This Page</div>
        <nav>
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "table-of-contents-link",
                `table-of-contents-link-l${heading.level}`,
                activeId === heading.id && "active",
              )}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>

      {showScrollTop && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  )
}
