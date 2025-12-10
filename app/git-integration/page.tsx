import KnowledgeBaseTemplate from "@/templates/knowledge-base-template"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Callout } from "@/components/callout"
import { FeatureImage } from "@/components/feature-image"
import { Step, StepByStep } from "@/components/step-by-step"
import { KeyboardShortcut } from "@/components/keyboard-shortcut"
import Link from "next/link"
import {
  GitBranch,
  GitPullRequest,
  GitCommit,
  Trash,
  Settings,
  RotateCcw,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export default function GitIntegrationPage() {
  return (
    <KnowledgeBaseTemplate
      title="Git Integration"
      description="Learn how to connect, configure, and manage Git repositories with our application."
      lastUpdated="April 9, 2024"
      breadcrumbs={[
        { label: "Integrations", href: "/integrations" },
        { label: "Git Integration", href: "/git-integration" },
      ]}
    >
      <h2 id="overview">Overview</h2>
      <p>
        The Git Integration feature allows you to connect your application to Git repositories, enabling seamless
        version control and collaboration. This integration supports GitHub, GitLab, Bitbucket, and Azure DevOps
        repositories.
      </p>

      <FeatureImage
        src="/placeholder.svg?height=400&width=800"
        alt="Git Integration Dashboard"
        width={800}
        height={400}
        caption="Git Integration Dashboard showing connected repositories and recent activity"
      />

      <p>With Git Integration, you can perform the following actions directly from within the application:</p>

      <div className="grid gap-4 md:grid-cols-2 my-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <GitCommit className="mr-2 h-4 w-4" />
              Repository Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Connect to multiple Git repositories</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>View repository structure and files</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Track changes and commit history</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <GitPullRequest className="mr-2 h-4 w-4" />
              Workflow Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Create and manage branches</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Review and approve pull requests</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Trigger automated workflows on Git events</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Callout type="note">
        <p>
          Git Integration requires appropriate permissions to access your repositories. Make sure you have the necessary
          access rights before setting up the integration.
        </p>
      </Callout>

      <h2 id="accessing-git-integration">Accessing Git Integration</h2>
      <p>
        The Git Integration feature can be accessed from the main navigation menu. Here's how to navigate to the Git
        Integration page:
      </p>

      <StepByStep>
        <Step number={1} title="Open the Main Menu">
          <p>Click on the "Integrations" item in the main navigation sidebar.</p>
          <FeatureImage
            src="/placeholder.svg?height=300&width=600"
            alt="Navigating to Integrations menu"
            width={600}
            height={300}
          />
        </Step>

        <Step number={2} title="Select Git Integration">
          <p>From the Integrations submenu, click on "Git Integration" to access the Git management dashboard.</p>
          <FeatureImage
            src="/placeholder.svg?height=300&width=600"
            alt="Selecting Git Integration"
            width={600}
            height={300}
          />
        </Step>
      </StepByStep>

      <p>
        Alternatively, you can use the following keyboard shortcut to quickly access the Git Integration page from
        anywhere in the application:
      </p>

      <KeyboardShortcut keys={["Ctrl", "G"]} description="Open Git Integration dashboard" />

      <h2 id="git-dashboard-interface">Git Dashboard Interface</h2>
      <p>
        The Git Integration dashboard provides a comprehensive overview of all your connected repositories and recent
        activity. Here's a breakdown of the main components:
      </p>

      <Tabs defaultValue="repositories" className="my-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="repositories">Repositories</TabsTrigger>
          <TabsTrigger value="activity">Activity Feed</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="repositories" className="space-y-4 mt-4">
          <p>
            The Repositories tab displays all connected Git repositories. Each repository card shows key information and
            provides quick access to common actions.
          </p>

          <FeatureImage src="/placeholder.svg?height=400&width=800" alt="Repositories Tab" width={800} height={400} />

          <h3 id="repository-card">Repository Card</h3>
          <p>Each repository card displays the following information:</p>

          <ul>
            <li>
              <strong>Repository Name:</strong> The name of the repository
            </li>
            <li>
              <strong>Provider Icon:</strong> Indicates whether it's GitHub, GitLab, etc.
            </li>
            <li>
              <strong>Default Branch:</strong> Shows the default branch (usually main or master)
            </li>
            <li>
              <strong>Last Commit:</strong> Timestamp of the most recent commit
            </li>
            <li>
              <strong>Status Indicator:</strong> Shows if the connection is active
            </li>
          </ul>

          <h3 id="repository-actions">Repository Actions</h3>
          <p>From each repository card, you can perform the following actions:</p>

          <ul>
            <li>
              <strong>View Repository:</strong> Open the repository details page
            </li>
            <li>
              <strong>Sync Now:</strong> Manually trigger a sync with the remote repository
            </li>
            <li>
              <strong>Settings:</strong> Configure repository-specific settings
            </li>
            <li>
              <strong>Remove:</strong> Disconnect the repository from the application
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4 mt-4">
          <p>
            The Activity Feed tab shows recent Git events across all connected repositories, helping you stay updated on
            the latest changes.
          </p>

          <FeatureImage src="/placeholder.svg?height=400&width=800" alt="Activity Feed Tab" width={800} height={400} />

          <h3 id="activity-types">Activity Types</h3>
          <p>The activity feed tracks various types of Git events:</p>

          <ul>
            <li>
              <strong>Commits:</strong> New code commits to any branch
            </li>
            <li>
              <strong>Pull Requests:</strong> New, updated, or merged pull requests
            </li>
            <li>
              <strong>Branch Events:</strong> Creation or deletion of branches
            </li>
            <li>
              <strong>Comments:</strong> Comments on commits or pull requests
            </li>
            <li>
              <strong>CI/CD Events:</strong> Build and deployment status updates
            </li>
          </ul>

          <h3 id="activity-filters">Activity Filters</h3>
          <p>You can filter the activity feed using the following options:</p>

          <ul>
            <li>
              <strong>Repository:</strong> Show events from specific repositories
            </li>
            <li>
              <strong>Event Type:</strong> Filter by commit, PR, branch, etc.
            </li>
            <li>
              <strong>Time Range:</strong> Show events from today, this week, etc.
            </li>
            <li>
              <strong>User:</strong> Filter by the user who performed the action
            </li>
          </ul>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-4">
          <p>The Settings tab allows you to configure global settings for the Git Integration feature.</p>

          <FeatureImage src="/placeholder.svg?height=400&width=800" alt="Settings Tab" width={800} height={400} />

          <h3 id="global-settings">Global Settings</h3>
          <p>The following global settings can be configured:</p>

          <ul>
            <li>
              <strong>Default Provider:</strong> Set your preferred Git provider
            </li>
            <li>
              <strong>Sync Frequency:</strong> How often to sync with remote repositories
            </li>
            <li>
              <strong>Webhook Settings:</strong> Configure webhook endpoints
            </li>
            <li>
              <strong>Notification Preferences:</strong> Configure email or in-app notifications for Git events
            </li>
          </ul>

          <h3 id="authentication">Authentication</h3>
          <p>Manage authentication for different Git providers:</p>

          <ul>
            <li>
              <strong>OAuth Connections:</strong> Connect or disconnect OAuth applications
            </li>
            <li>
              <strong>Personal Access Tokens:</strong> Manage PATs for different providers
            </li>
            <li>
              <strong>SSH Keys:</strong> Add or remove SSH keys for secure connections
            </li>
          </ul>
        </TabsContent>
      </Tabs>

      <h2 id="adding-git-repository">Adding a Git Repository</h2>
      <p>To connect a new Git repository to your application, follow these steps:</p>

      <StepByStep>
        <Step number={1} title="Access the Git Integration Dashboard">
          <p>Navigate to the Git Integration page as described in the "Accessing Git Integration" section above.</p>
        </Step>

        <Step number={2} title="Initiate Repository Connection">
          <p>Click the "Add Repository" button in the top-right corner of the Repositories tab.</p>
          <FeatureImage
            src="/placeholder.svg?height=300&width=600"
            alt="Add Repository Button"
            width={600}
            height={300}
          />
        </Step>

        <Step number={3} title="Select Git Provider">
          <p>Choose your Git provider from the available options (GitHub, GitLab, Bitbucket, or Azure DevOps).</p>
          <FeatureImage
            src="/placeholder.svg?height=300&width=600"
            alt="Select Git Provider"
            width={600}
            height={300}
          />

          <Callout type="tip">
            <p>
              If this is your first time connecting to a particular Git provider, you'll need to authenticate and
              authorize the application to access your repositories.
            </p>
          </Callout>
        </Step>

        <Step number={4} title="Select Repository">
          <p>
            After authentication, you'll see a list of available repositories from your account. Select the repository
            you want to connect.
          </p>
          <FeatureImage src="/placeholder.svg?height=300&width=600" alt="Select Repository" width={600} height={300} />
        </Step>

        <Step number={5} title="Configure Repository Settings">
          <p>Configure the following settings for your repository:</p>
          <ul>
            <li>
              <strong>Display Name:</strong> A custom name for the repository (optional)
            </li>
            <li>
              <strong>Default Branch:</strong> The branch to use by default
            </li>
            <li>
              <strong>Sync Frequency:</strong> How often to sync with the remote repository
            </li>
            <li>
              <strong>Webhook Integration:</strong> Enable/disable webhook notifications
            </li>
          </ul>
          <FeatureImage
            src="/placeholder.svg?height=300&width=600"
            alt="Configure Repository Settings"
            width={600}
            height={300}
          />
        </Step>

        <Step number={6} title="Complete Connection">
          <p>Click the "Connect Repository" button to finalize the connection.</p>
          <p>
            The system will perform an initial sync with the repository, which may take a few moments depending on the
            repository size.
          </p>
        </Step>
      </StepByStep>

      <Callout type="note">
        <p>
          For private repositories, ensure that your Git provider account has the necessary permissions to access the
          repository. If you're using a personal access token, make sure it has the required scopes.
        </p>
      </Callout>

      <h2 id="managing-repositories">Managing Repositories</h2>
      <p>
        Once you've connected repositories, you can manage them through the Git Integration dashboard. Here are the
        common management tasks:
      </p>

      <Accordion type="single" collapsible className="w-full my-6">
        <AccordionItem value="viewing-details">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              <span>Viewing Repository Details</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <p>To view detailed information about a repository:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Click on the repository card in the Repositories tab</li>
              <li>The repository details page will open, showing:</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>File Browser:</strong> Navigate through the repository file structure
              </li>
              <li>
                <strong>Branches:</strong> View and manage branches
              </li>
              <li>
                <strong>Commit History:</strong> See recent commits with details
              </li>
              <li>
                <strong>Pull Requests:</strong> View open and recently closed PRs
              </li>
              <li>
                <strong>Issues:</strong> Track repository issues (if supported by the provider)
              </li>
            </ul>

            <FeatureImage
              src="/placeholder.svg?height=300&width=600"
              alt="Repository Details Page"
              width={600}
              height={300}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="updating-settings">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Updating Repository Settings</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <p>To update the settings for a connected repository:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Find the repository in the Repositories tab</li>
              <li>Click the "Settings" icon (gear) on the repository card</li>
              <li>Modify any of the following settings:</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Display Name:</strong> Change how the repository is labeled in the application
              </li>
              <li>
                <strong>Default Branch:</strong> Update which branch is used by default
              </li>
              <li>
                <strong>Sync Settings:</strong> Adjust how often the repository syncs
              </li>
              <li>
                <strong>Webhook Configuration:</strong> Modify webhook settings
              </li>
              <li>
                <strong>Access Permissions:</strong> Control which users can access this repository
              </li>
            </ul>

            <FeatureImage
              src="/placeholder.svg?height=300&width=600"
              alt="Repository Settings"
              width={600}
              height={300}
            />

            <p>Click "Save Changes" to apply your updates.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="manual-sync">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              <span>Manually Syncing a Repository</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <p>
              While repositories sync automatically based on your settings, you can trigger a manual sync at any time:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Find the repository in the Repositories tab</li>
              <li>Click the "Sync Now" button (circular arrow icon) on the repository card</li>
              <li>The system will immediately sync with the remote repository</li>
            </ol>

            <FeatureImage
              src="/placeholder.svg?height=200&width=500"
              alt="Manual Sync Button"
              width={500}
              height={200}
            />

            <Callout type="tip">
              <p>
                Manual sync is useful after making significant changes in the remote repository that you want to
                immediately reflect in the application.
              </p>
            </Callout>

            <p>
              During the sync process, you'll see a progress indicator. Once complete, the "Last Synced" timestamp will
              update.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="removing-repository">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Trash className="h-4 w-4" />
              <span>Removing a Repository</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <p>To disconnect a repository from your application:</p>

            <Callout type="warning">
              <p>
                Removing a repository will disconnect it from your application but will not affect the actual repository
                in your Git provider. However, any application-specific configurations related to this repository will
                be lost.
              </p>
            </Callout>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Find the repository in the Repositories tab</li>
              <li>Click the "Settings" icon (gear) on the repository card</li>
              <li>Scroll to the bottom of the settings page and click "Remove Repository"</li>
              <li>Confirm the removal in the dialog that appears</li>
            </ol>

            <FeatureImage
              src="/placeholder.svg?height=200&width=500"
              alt="Remove Repository Confirmation"
              width={500}
              height={200}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 id="working-with-branches">Working with Branches</h2>
      <p>
        The Git Integration allows you to view and manage branches directly from the application. Here's how to work
        with branches:
      </p>

      <h3 id="viewing-branches">Viewing Branches</h3>
      <p>To view all branches in a repository:</p>
      <ol>
        <li>Open the repository details page by clicking on a repository card</li>
        <li>Select the "Branches" tab</li>
        <li>You'll see a list of all branches, with the default branch highlighted</li>
      </ol>

      <FeatureImage src="/placeholder.svg?height=300&width=600" alt="Branches Tab" width={600} height={300} />

      <h3 id="creating-branch">Creating a New Branch</h3>
      <p>To create a new branch:</p>
      <ol>
        <li>Navigate to the "Branches" tab in the repository details</li>
        <li>Click the "New Branch" button</li>
        <li>Enter a name for the new branch</li>
        <li>Select the source branch (the branch to base the new branch on)</li>
        <li>Click "Create Branch"</li>
      </ol>

      <FeatureImage src="/placeholder.svg?height=300&width=600" alt="Create New Branch" width={600} height={300} />

      <h3 id="comparing-branches">Comparing Branches</h3>
      <p>To compare two branches:</p>
      <ol>
        <li>Navigate to the "Branches" tab</li>
        <li>Click the "Compare" button</li>
        <li>Select the base branch and the compare branch</li>
        <li>View the differences, including:</li>
        <ul>
          <li>Files changed</li>
          <li>Commits that differ</li>
          <li>Line-by-line changes</li>
        </ul>
      </ol>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <p>If you encounter issues with the Git Integration, here are some common problems and their solutions:</p>

      <Card className="my-6">
        <CardHeader>
          <CardTitle>Common Issues</CardTitle>
          <CardDescription>Solutions to frequently encountered problems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 border-b pb-4">
            <h3 className="font-medium">Authentication Failures</h3>
            <p className="text-sm text-muted-foreground">
              If you're unable to connect to a repository due to authentication issues:
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Verify your Git provider credentials are correct</li>
              <li>Check if your personal access token has expired</li>
              <li>Ensure your token has the necessary permissions (repo, read:org, etc.)</li>
              <li>Try reconnecting the Git provider in the Settings tab</li>
            </ul>
          </div>

          <div className="space-y-2 border-b pb-4">
            <h3 className="font-medium">Repository Not Syncing</h3>
            <p className="text-sm text-muted-foreground">If a repository isn't syncing properly:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Try a manual sync to see if there are specific errors</li>
              <li>Check if the repository still exists in your Git provider</li>
              <li>Verify you still have access to the repository</li>
              <li>Check webhook configurations if enabled</li>
              <li>Look for sync errors in the activity log</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Webhook Issues</h3>
            <p className="text-sm text-muted-foreground">If webhooks aren't triggering properly:</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Verify webhook settings in both the application and Git provider</li>
              <li>Check webhook delivery logs in your Git provider</li>
              <li>Ensure your application is accessible from the internet</li>
              <li>Check if webhook secret tokens match (if applicable)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <h2 id="additional-resources">Additional Resources</h2>
      <p>For more information about using Git Integration, check out these resources:</p>

      <div className="grid gap-4 md:grid-cols-2 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Related Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/workflow-automation" className="flex items-center text-primary">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>Workflow Automation with Git</span>
                </Link>
              </li>
              <li>
                <Link href="/ci-cd-pipelines" className="flex items-center text-primary">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>CI/CD Pipeline Integration</span>
                </Link>
              </li>
              <li>
                <Link href="/security/access-control" className="flex items-center text-primary">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>Repository Access Control</span>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>External Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://docs.github.com/en/github/authenticating-to-github"
                  className="flex items-center text-primary"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>GitHub Authentication Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"
                  className="flex items-center text-primary"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>GitLab Personal Access Tokens</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/"
                  className="flex items-center text-primary"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>Bitbucket App Passwords</span>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Callout type="tip">
        <p>
          If you need further assistance with Git Integration, contact our support team at{" "}
          <Link href="mailto:support@example.com" className="text-primary">
            support@example.com
          </Link>
          .
        </p>
      </Callout>
    </KnowledgeBaseTemplate>
  )
}
