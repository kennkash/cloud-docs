import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="container max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to the Application User Guide</h1>
          <p className="text-muted-foreground">
            This comprehensive guide will help you understand and use all the features of our full stack application.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>Learn the basics and get up and running quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                New to the application? Start here to learn about installation, setup, and basic navigation.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/getting-started" className="flex items-center">
                  Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Feature Documentation
              </CardTitle>
              <CardDescription>Detailed guides for each feature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Explore in-depth documentation for each feature and functionality in the application.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/user-management" className="flex items-center">
                  Browse Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              Quick Tips
            </CardTitle>
            <CardDescription>Get the most out of the application</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the sidebar navigation to quickly jump between different sections</li>
              <li>The search bar at the top helps you find specific features or topics</li>
              <li>Each feature page includes step-by-step instructions and screenshots</li>
              <li>Toggle between light and dark mode using the button in the top right</li>
              <li>Check the "Getting Started" section for a complete overview of the application</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
