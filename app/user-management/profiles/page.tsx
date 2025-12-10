import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function UserProfilesPage() {
  return (
    <div className="container max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">User Profiles</h1>
          <p className="text-muted-foreground">
            Learn how to manage user profiles, including creating, editing, and viewing user information.
          </p>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            User profiles contain personal information. Make sure you have the necessary permissions and follow data
            protection regulations when managing user data.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="creating">Creating Users</TabsTrigger>
            <TabsTrigger value="editing">Editing Users</TabsTrigger>
            <TabsTrigger value="viewing">Viewing Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <p>
              The User Profiles section allows administrators to manage all aspects of user accounts. This includes
              personal information, contact details, account settings, and profile pictures.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>What you can do with user profiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Create new user accounts with all necessary information</li>
                  <li>Edit existing user profiles to update information</li>
                  <li>View detailed user information including activity history</li>
                  <li>Manage profile pictures and avatars</li>
                  <li>Set user preferences and notification settings</li>
                  <li>Activate or deactivate user accounts</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="creating" className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Creating New Users</h2>
            <p className="mb-4">Follow these steps to create a new user account in the system:</p>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 1: Access the User Creation Form</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate to the User Management section and click on "User Profiles". Then click the "Add New User"
                  button in the top right corner.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=600"
                    alt="Add New User Button"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 2: Fill in User Information</h3>
                <p className="text-sm text-muted-foreground">
                  Complete all required fields in the form. Required fields are marked with an asterisk (*).
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
                  <li>Full Name</li>
                  <li>Email Address (used for login)</li>
                  <li>User Role</li>
                  <li>Department/Team</li>
                  <li>Initial Password (or select "Send password reset email")</li>
                </ul>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="User Information Form"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 3: Set Permissions</h3>
                <p className="text-sm text-muted-foreground">
                  Assign the appropriate role to the user. Each role comes with predefined permissions, but you can
                  customize them if needed.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=600"
                    alt="Permission Settings"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 4: Save the New User</h3>
                <p className="text-sm text-muted-foreground">
                  Review all information and click the "Create User" button. The system will create the account and send
                  a welcome email to the user if that option was selected.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="editing" className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Editing User Profiles</h2>
            <p className="mb-4">To edit an existing user's profile, follow these steps:</p>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 1: Find the User</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate to User Profiles and use the search function to find the user you want to edit. You can
                  search by name, email, or user ID.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img src="/placeholder.svg?height=150&width=600" alt="User Search" className="w-full object-cover" />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 2: Access the Edit Form</h3>
                <p className="text-sm text-muted-foreground">
                  Click on the user's name to view their profile, then click the "Edit" button in the top right corner.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 3: Update Information</h3>
                <p className="text-sm text-muted-foreground">
                  Make the necessary changes to the user's information. You can update any field except for the user ID.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Edit User Form"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Step 4: Save Changes</h3>
                <p className="text-sm text-muted-foreground">
                  After making all necessary changes, click the "Save Changes" button at the bottom of the form. The
                  system will update the user's profile immediately.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="viewing" className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Viewing User Profiles</h2>
            <p className="mb-4">The user profile view provides comprehensive information about each user:</p>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">User Information Tab</h3>
                <p className="text-sm text-muted-foreground">
                  Displays basic user information including name, email, department, and contact details.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=250&width=600"
                    alt="User Information Tab"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Activity History Tab</h3>
                <p className="text-sm text-muted-foreground">
                  Shows a log of the user's recent activities in the system, including login times, actions performed,
                  and changes made.
                </p>
                <div className="mt-2 rounded-md border overflow-hidden">
                  <img
                    src="/placeholder.svg?height=250&width=600"
                    alt="Activity History Tab"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Permissions Tab</h3>
                <p className="text-sm text-muted-foreground">
                  Displays the user's current role and all associated permissions. You can also see any custom
                  permissions that have been assigned.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Account Settings Tab</h3>
                <p className="text-sm text-muted-foreground">
                  Shows account-related settings such as password reset history, two-factor authentication status, and
                  account creation date.
                </p>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                You can export a user's profile information as a PDF by clicking the "Export" button in the top right
                corner of the profile view.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
