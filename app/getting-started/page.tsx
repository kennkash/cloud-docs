import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Users, Settings, Zap, Shield, Globe, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react"
import { SupportTicketModal } from "@/components/support-ticket-modal"

export default function GettingStarted() {
  return (
    <div className="container max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Welcome to our comprehensive application guide. This section will help you understand the basics and get you
            up and running quickly with all the essential features.
          </p>
        </div>

        {/* Quick Start Guide */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-yellow-500" />
              Quick Start Guide
            </CardTitle>
            <CardDescription>Follow these essential steps to get started with the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    1
                  </span>
                  Account Setup
                </h4>
                <p className="text-sm text-muted-foreground pl-8">
                  Create your account and complete your profile information to get started.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    2
                  </span>
                  Navigation Overview
                </h4>
                <p className="text-sm text-muted-foreground pl-8">
                  Learn how to navigate through the main sections and features of the application.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    3
                  </span>
                  Basic Configuration
                </h4>
                <p className="text-sm text-muted-foreground pl-8">
                  Set up your preferences and configure basic settings for optimal experience.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    4
                  </span>
                  First Project
                </h4>
                <p className="text-sm text-muted-foreground pl-8">
                  Create your first project and explore the core functionality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features Overview</CardTitle>
            <CardDescription>Explore the main features available in the application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold">User Management</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Manage users, roles, and permissions across your organization.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold">Configuration</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Customize settings and configure the application to your needs.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold">Security</h4>
                </div>
                <p className="text-sm text-muted-foreground">Implement security measures and access controls.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="mr-2 h-5 w-5 text-purple-600" />
              Need Help?
            </CardTitle>
            <CardDescription>Get support when you need it most</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you encounter any issues or have questions while using the application, we're here to help. Choose from
              the support options below:
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-4 border rounded-lg">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <h4 className="font-semibold">Submit a Ticket</h4>
                <p className="text-xs text-muted-foreground">Get detailed help with step-by-step guidance</p>
                <SupportTicketModal />
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 border rounded-lg">
                <Phone className="h-8 w-8 text-green-600" />
                <h4 className="font-semibold">Phone Support</h4>
                <p className="text-xs text-muted-foreground">Call us for immediate assistance</p>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 border rounded-lg">
                <Mail className="h-8 w-8 text-orange-600" />
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-xs text-muted-foreground">Send us an email for non-urgent matters</p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Tips to get the most out of the application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  Tip
                </Badge>
                <div>
                  <h4 className="font-semibold">Regular Backups</h4>
                  <p className="text-sm text-muted-foreground">
                    Always maintain regular backups of your important data and configurations.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  Tip
                </Badge>
                <div>
                  <h4 className="font-semibold">User Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure all team members are properly trained on the features they'll be using.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  Tip
                </Badge>
                <div>
                  <h4 className="font-semibold">Security Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep your application updated and review security settings regularly.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-indigo-600" />
              Next Steps
            </CardTitle>
            <CardDescription>Continue your journey with these recommended actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-semibold">Explore User Management</div>
                  <div className="text-sm text-muted-foreground">Learn how to manage users and permissions</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-semibold">Configure Git Integration</div>
                  <div className="text-sm text-muted-foreground">Set up version control integration</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-semibold">API Documentation</div>
                  <div className="text-sm text-muted-foreground">Learn about API usage and integration</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-semibold">Mobile Access Setup</div>
                  <div className="text-sm text-muted-foreground">Configure mobile access and apps</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
