import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, ShieldCheck, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UserManagementPage() {
  return (
    <div className="container max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Learn how to manage users, roles, permissions, and authentication in the application.
          </p>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 mt-4">
            <p>
              The User Management module allows administrators to create, update, and manage user accounts within the
              application. This includes managing user profiles, setting permissions, and configuring authentication
              methods.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    User Profiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage user information, contact details, and account settings.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/user-management/profiles" className="flex items-center">
                      View <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Set up roles and permissions to control access to features.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/user-management/permissions" className="flex items-center">
                      View <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <KeyRound className="mr-2 h-4 w-4" />
                    Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Configure login methods, MFA, and security settings.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/user-management/authentication" className="flex items-center">
                      View <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4 mt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Key Features</h2>

              <div className="grid gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">User Creation and Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Create new user accounts, update user information, and manage user status (active, inactive,
                    suspended).
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Role-Based Access Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Assign roles to users and define permissions for each role to control access to different parts of
                    the application.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Multi-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Enable additional security layers with SMS, email, or authenticator app verification.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">User Activity Logs</h3>
                  <p className="text-sm text-muted-foreground">
                    Track and monitor user actions and login history for security and compliance purposes.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-4 mt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">How do I add a new user?</h3>
                  <p className="text-sm text-muted-foreground">
                    Navigate to User Management > User Profiles and click the "Add User" button. Fill in the required
                    information and click "Save".
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Can I customize user roles?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can create custom roles with specific permissions in the User Management > Permissions
                    section.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">How do I reset a user's password?</h3>
                  <p className="text-sm text-muted-foreground">
                    Go to the user's profile page and click the "Reset Password" button. You can either set a temporary
                    password or send a password reset link to the user's email.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Is there a limit to the number of users I can add?</h3>
                  <p className="text-sm text-muted-foreground">
                    The number of users you can add depends on your subscription plan. Check the Settings > Subscription
                    page for details on your current limits.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
