"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  Home,
  Users,
  Settings,
  BarChart,
  FileText,
  ShieldCheck,
  GitBranch,
  Globe,
  Code,
  Zap,
  Workflow,
  Layers,
  Building,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState, useEffect } from "react"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Getting Started",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Atlassian Cloud Guide",
    href: "/atlassian-cloud",
    icon: <Building className="h-4 w-4" />,
  },
  {
    title: "Core Features",
    href: "/core-features",
    icon: <Layers className="h-4 w-4" />,
    submenu: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: <BarChart className="h-4 w-4" />,
      },
      {
        title: "User Management",
        href: "/user-management",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Content Management",
        href: "/content-management",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Integrations",
    href: "/integrations",
    icon: <Zap className="h-4 w-4" />,
    submenu: [
      {
        title: "Git Integration",
        href: "/git-integration",
        icon: <GitBranch className="h-4 w-4" />,
      },
      {
        title: "API Usage",
        href: "/api-usage",
        icon: <Code className="h-4 w-4" />,
      },
      {
        title: "Third-Party Services",
        href: "/third-party-services",
        icon: <Globe className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Advanced Features",
    href: "/advanced-features",
    icon: <Workflow className="h-4 w-4" />,
    submenu: [
      {
        title: "Workflow Automation",
        href: "/workflow-automation",
      },
      {
        title: "Data Pipelines",
        href: "/data-pipelines",
      },
      {
        title: "Custom Scripting",
        href: "/custom-scripting",
      },
    ],
  },
  {
    title: "Administration",
    href: "/administration",
    icon: <Settings className="h-4 w-4" />,
    submenu: [
      {
        title: "System Settings",
        href: "/system-settings",
      },
      {
        title: "Security",
        href: "/security",
        icon: <ShieldCheck className="h-4 w-4" />,
      },
      {
        title: "Audit Logs",
        href: "/audit-logs",
      },
    ],
  },
]

export function SiteSidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  // Auto-expand the section containing the current page
  useEffect(() => {
    const newOpenSections = { ...openSections }

    navItems.forEach((item) => {
      if (
        item.submenu &&
        item.submenu.some((subItem) => pathname === subItem.href || pathname.startsWith(`${subItem.href}/`))
      ) {
        newOpenSections[item.title] = true
      }
    })

    setOpenSections(newOpenSections)
  }, [pathname])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="hidden md:block border-r w-64 shrink-0 h-[calc(100vh-4rem)]">
      <ScrollArea className="h-full py-6 pr-6">
        <nav className="grid gap-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

            if (item.submenu) {
              return (
                <Collapsible
                  key={item.href}
                  open={openSections[item.title] || isActive}
                  onOpenChange={() => toggleSection(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn("w-full justify-between font-normal", isActive && "bg-accent font-medium")}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-200",
                          openSections[item.title] && "rotate-180",
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 pt-1">
                    <div className="grid gap-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent",
                            pathname === subItem.href && "bg-accent font-medium",
                          )}
                        >
                          {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent",
                  isActive && "bg-accent font-medium",
                )}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )
}
