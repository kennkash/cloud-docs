import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Info,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  Settings,
  PlusCircle,
  Trash,
  RotateCcw,
  ArrowRight,
} from "lucide-react"

interface FeatureGuideProps {
  title: string
  description: string
  videoLink?: string
  lastUpdated?: string
}

export default function FeatureGuideTemplate({
  title = "Feature Name",
  description = "Description of this feature",
  videoLink = "",
  lastUpdated = "April 9, 2024",
}: FeatureGuideProps) {
  return (
    <div className="container max-w-4xl">
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

        {/* Quick Links Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Quick Links</CardTitle>
            <CardDescription>Jump to specific sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="#overview">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Overview
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="#getting-started">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="#configuration">
                  <Settings className="mr-2 h-4 w-4" />
                  Configure
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="#troubleshooting">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="common-tasks">Common Tasks</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div id="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>

              <p>
                This section provides an overview of the {title} feature, its purpose, and key functionality. Replace
                this text with a general description of what this feature does and why it's important.
              </p>

              {videoLink && (
                <div className="my-6">
                  <h3 className="text-lg font-medium mb-2">Feature Overview Video</h3>
                  <div className="screenshot aspect-video bg-muted flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="Feature video thumbnail"
                      width={700}
                      height={400}
                      className="object-cover"
                    />
                    {/* Replace with actual video embed */}
                    <Button className="absolute">Watch Video</Button>
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Benefit one of using this feature</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Benefit two of using this feature</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Benefit three of using this feature</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Common use case one</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Common use case two</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Common use case three</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  Add any important notes or prerequisites here. For example: This feature requires administrative
                  privileges.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          {/* Getting Started Tab */}
          <TabsContent value="getting-started" className="space-y-4">
            <div id="getting-started" className="space-y-4">
              <h2 className="text-2xl font-bold">Getting Started</h2>

              <p>
                This section guides you through the basic setup and first-time use of the {title} feature. Follow these
                steps to get started quickly.
              </p>

              <div className="space-y-6 mt-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="step-number">1</div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">Accessing the Feature</h3>
                    <p>Describe how to navigate to this feature in the application.</p>
                    <div className="screenshot">
                      <Image
                        src="/placeholder.svg?height=250&width=600"
                        alt="Navigation to feature"
                        width={600}
                        height={250}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="step-number">2</div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">Configure Basic Settings</h3>
                    <p>Explain initial configuration steps with clear instructions.</p>
                    <div className="screenshot">
                      <Image
                        src="/placeholder.svg?height=250&width=600"
                        alt="Configuration screen"
                        width={600}
                        height={250}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="step-number">3</div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">Adding Your First Item</h3>
                    <p>Guide the user through creating their first item or entry.</p>
                    <Alert variant="default">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Tip</AlertTitle>
                      <AlertDescription>
                        Add helpful tips or shortcuts that will make the process easier.
                      </AlertDescription>
                    </Alert>
                    <div className="screenshot">
                      <Image
                        src="/placeholder.svg?height=250&width=600"
                        alt="Adding first item"
                        width={600}
                        height={250}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Common Tasks Tab */}
          <TabsContent value="common-tasks" className="space-y-4">
            <div id="common-tasks" className="space-y-4">
              <h2 className="text-2xl font-bold">Common Tasks</h2>

              <p>
                This section covers the most common tasks and operations you'll perform with the {title} feature. Each
                task includes step-by-step instructions.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {/* Task 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <PlusCircle className="h-4 w-4" />
                      <span>Adding a New Integration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>Guide the user through the process of adding a new integration.</p>

                    <div className="space-y-4 pl-4 border-l-2 border-muted">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Navigate to Integrations</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe how to access the integrations section.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">2. Select "Add New Integration"</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe where to find the add button and what it looks like.
                        </p>
                        <div className="screenshot">
                          <Image
                            src="/placeholder.svg?height=200&width=500"
                            alt="Add integration button"
                            width={500}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">3. Select Integration Type</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain how to choose the correct integration type.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">4. Configure Settings</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide details on the required configuration settings.
                        </p>
                        <div className="screenshot">
                          <Image
                            src="/placeholder.svg?height=200&width=500"
                            alt="Configuration settings"
                            width={500}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">5. Complete Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain how to finalize the integration process.
                        </p>
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Note</AlertTitle>
                      <AlertDescription>
                        Add any relevant notes about limitations, requirements, or best practices for this task.
                      </AlertDescription>
                    </Alert>
                  </AccordionContent>
                </AccordionItem>

                {/* Task 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Modifying an Existing Integration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>Explain how to modify settings for an existing integration.</p>

                    <div className="space-y-4 pl-4 border-l-2 border-muted">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Find the Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe how to locate the specific integration in the list.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">2. Access Settings</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain how to open the settings for modification.
                        </p>
                        <div className="screenshot">
                          <Image
                            src="/placeholder.svg?height=200&width=500"
                            alt="Edit integration"
                            width={500}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">3. Update Configuration</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe which settings can be modified and how.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">4. Save Changes</h4>
                        <p className="text-sm text-muted-foreground">Explain how to save the updated configuration.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Task 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Trash className="h-4 w-4" />
                      <span>Removing an Integration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>Guide the user through safely removing an integration when it's no longer needed.</p>

                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Warning</AlertTitle>
                      <AlertDescription>
                        Removing an integration will delete all associated data and cannot be undone. Make sure to
                        export any important data before proceeding.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4 pl-4 border-l-2 border-muted">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Select the Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe how to select the integration to be removed.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">2. Access Remove Option</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain where to find the remove or delete option.
                        </p>
                        <div className="screenshot">
                          <Image
                            src="/placeholder.svg?height=200&width=500"
                            alt="Remove integration option"
                            width={500}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">3. Confirm Removal</h4>
                        <p className="text-sm text-muted-foreground">
                          Describe the confirmation process and any additional verification steps.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">4. Verify Removal</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain how to verify that the integration has been successfully removed.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Task 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      <span>Refreshing Integration Status</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p>Explain how to check and refresh the status of an integration.</p>

                    <div className="space-y-4 pl-4 border-l-2 border-muted">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. View Integration Status</h4>
                        <p className="text-sm text-muted-foreground">Describe where the current status is displayed.</p>
                        <div className="screenshot">
                          <Image
                            src="/placeholder.svg?height=200&width=500"
                            alt="Integration status"
                            width={500}
                            height={200}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">2. Refresh Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain how to manually refresh the integration status.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">3. Understand Status Indicators</h4>
                        <p className="text-sm text-muted-foreground">
                          Explain what different status icons or messages mean.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Troubleshooting Tab */}
          <TabsContent value="troubleshooting" className="space-y-4">
            <div id="troubleshooting" className="space-y-4">
              <h2 className="text-2xl font-bold">Troubleshooting</h2>

              <p>
                This section helps you diagnose and resolve common problems you might encounter when using the {title}{" "}
                feature.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Common Issues</CardTitle>
                  <CardDescription>Solutions to frequently encountered problems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Issue 1 */}
                  <div className="space-y-2 border-b pb-4">
                    <h3 className="font-medium">Integration Connection Fails</h3>
                    <p className="text-sm text-muted-foreground">
                      If your integration fails to connect, try these steps:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Verify your credentials are correct</li>
                      <li>Check your network connection</li>
                      <li>Ensure the integration service is online</li>
                      <li>Verify firewall settings aren't blocking the connection</li>
                    </ul>
                  </div>

                  {/* Issue 2 */}
                  <div className="space-y-2 border-b pb-4">
                    <h3 className="font-medium">Data Not Syncing</h3>
                    <p className="text-sm text-muted-foreground">If data isn't syncing properly between systems:</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Check sync settings and schedules</li>
                      <li>Verify data mapping configuration</li>
                      <li>Look for sync errors in the logs</li>
                      <li>Try triggering a manual sync</li>
                    </ul>
                  </div>

                  {/* Issue 3 */}
                  <div className="space-y-2">
                    <h3 className="font-medium">Permission Errors</h3>
                    <p className="text-sm text-muted-foreground">If you're encountering permission errors:</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Verify you have the correct permissions in both systems</li>
                      <li>Check if OAuth tokens need refreshing</li>
                      <li>Ensure API keys have the necessary scopes</li>
                      <li>Contact your system administrator for additional access</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Still Having Issues?</h3>
                <p>If you're still experiencing problems after trying the troubleshooting steps above, you can:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check the detailed logs (Settings → Logs → Integration Logs)</li>
                  <li>
                    Visit our{" "}
                    <Link href="#" className="text-primary underline">
                      knowledge base
                    </Link>{" "}
                    for advanced troubleshooting
                  </li>
                  <li>Contact support through the Help menu or email support@example.com</li>
                </ul>
              </div>

              <Alert>
                <HelpCircle className="h-4 w-4" />
                <AlertTitle>Support Information</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p>When contacting support about an integration issue, please include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The exact error message</li>
                    <li>Steps to reproduce the issue</li>
                    <li>Integration type and version</li>
                    <li>Any recent changes made to the integration</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>

        {/* Reference Section */}
        <div className="space-y-4 pt-6 border-t">
          <h2 className="text-2xl font-bold">Reference</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Related Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <span>Authentication Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <span>Workflow Automation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <span>API Configuration</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Glossary</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium">Integration</dt>
                    <dd className="text-sm text-muted-foreground">
                      A connection between two systems that allows them to share data and functionality.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">API Key</dt>
                    <dd className="text-sm text-muted-foreground">
                      A unique identifier used to authenticate requests to an API.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Webhook</dt>
                    <dd className="text-sm text-muted-foreground">
                      An automated message sent from one application to another when a specific event occurs.
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
