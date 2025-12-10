"use client"

import { type ReactNode, useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageNavigation } from "@/components/page-navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

interface KnowledgeBaseTemplateProps {
  title: string
  description: string
  lastUpdated?: string
  breadcrumbs: BreadcrumbItem[]
  children?: ReactNode
}

export default function KnowledgeBaseTemplate({
  title = "Feature Name",
  description = "Description of this feature",
  lastUpdated = "April 9, 2024",
  breadcrumbs = [],
  children,
}: KnowledgeBaseTemplateProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    // Extract headings from the document for the table of contents
    const headingElements = document.querySelectorAll(".doc-content h2, .doc-content h3")
    const extractedHeadings = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: heading.tagName === "H2" ? 1 : 2,
    }))
    setHeadings(extractedHeadings)
  }, [])

  return (
    <div className="container max-w-7xl">
      <Breadcrumb items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                <Badge variant="outline" className="text-xs">
                  Last updated: {lastUpdated}
                </Badge>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Main Content */}
            <div className="doc-content">{children}</div>
          </div>
        </div>

        <div className="hidden lg:block">
          <PageNavigation headings={headings} />
        </div>
      </div>
    </div>
  )
}
