"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Search,
  Zap,
  Rocket,
  Users,
  Lock,
  LinkIcon,
  CreditCard,
  HelpCircle,
  BarChart3,
  Settings,
  GitBranch,
  Code,
  Shield,
  FileText,
  Globe,
  Database,
  Workflow,
  Layers,
  UserCheck,
  Building,
  BookOpen,
  MessageSquare,
  GraduationCap,
  Star,
  Bell,
  Download,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AtlassianCloudGuide() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container max-w-7xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-lg -mx-4">
          <h1 className="text-4xl font-bold">Atlassian Cloud User Guide</h1>
          <p className="text-xl opacity-90">Your comprehensive guide to managing and using Atlassian Cloud services</p>
        </div>

        {/* Search Section */}
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Find what you're looking for</h3>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search guides, features, or topics..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              Quick Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link
                href="#getting-started"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <Rocket className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">Getting Started</span>
                <span className="text-xs text-gray-500">New to Atlassian Cloud?</span>
              </Link>
              <Link
                href="/user-management"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">User Management</span>
                <span className="text-xs text-gray-500">Manage users & permissions</span>
              </Link>
              <Link
                href="#security"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <Lock className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">Security Settings</span>
                <span className="text-xs text-gray-500">Configure security policies</span>
              </Link>
              <Link
                href="#integrations"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <LinkIcon className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">Integrations</span>
                <span className="text-xs text-gray-500">Connect external tools</span>
              </Link>
              <Link
                href="#billing"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">Billing & Plans</span>
                <span className="text-xs text-gray-500">Manage subscriptions</span>
              </Link>
              <Link
                href="#troubleshooting"
                className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <HelpCircle className="h-8 w-8 text-blue-600 mb-2" />
                <span className="font-medium text-sm">Troubleshooting</span>
                <span className="text-xs text-gray-500">Common issues & solutions</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Jira Section */}
        <div className="space-y-6" id="jira">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Layers className="h-5 w-5 text-white" />
            </div>
            Jira
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Project Management
                </CardTitle>
                <CardDescription>Learn how to create, configure, and manage Jira projects effectively.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/jira-project-dashboard"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span>Project Dashboard</span>
                  <Badge variant="secondary" className="ml-auto">
                    Popular
                  </Badge>
                </Link>
                <Link
                  href="/jira-project-admins"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>Project Admins</span>
                </Link>
                <Link
                  href="/jira-project-settings"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Project Settings</span>
                </Link>
                <Link
                  href="/jira-workflows"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Workflow className="h-4 w-4 text-blue-600" />
                  <span>Workflows & Schemes</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-blue-600" />
                  Development Tools
                </CardTitle>
                <CardDescription>Integrate development tools and manage code repositories within Jira.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/git-integration"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <GitBranch className="h-4 w-4 text-blue-600" />
                  <span>Git Integration</span>
                  <Badge variant="outline" className="ml-auto">
                    New
                  </Badge>
                </Link>
                <Link
                  href="/jira-code-reviews"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Code className="h-4 w-4 text-blue-600" />
                  <span>Code Reviews</span>
                </Link>
                <Link
                  href="/jira-deployments"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Rocket className="h-4 w-4 text-blue-600" />
                  <span>Deployments</span>
                </Link>
                <Link
                  href="/jira-automation"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span>Automation Rules</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Issue Management
                </CardTitle>
                <CardDescription>Master issue creation, tracking, and resolution in Jira projects.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/jira-issue-types"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Issue Types & Fields</span>
                </Link>
                <Link
                  href="/jira-agile-boards"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Layers className="h-4 w-4 text-blue-600" />
                  <span>Agile Boards</span>
                </Link>
                <Link
                  href="/jira-reporting"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span>Reports & Analytics</span>
                </Link>
                <Link
                  href="/jira-filters"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Search className="h-4 w-4 text-blue-600" />
                  <span>Filters & JQL</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Confluence Section */}
        <div className="space-y-6" id="confluence">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            Confluence
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  Space Management
                </CardTitle>
                <CardDescription>Create and manage Confluence spaces for organized documentation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/confluence-space-admins"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>Space Admins</span>
                  <Badge variant="secondary" className="ml-auto">
                    Popular
                  </Badge>
                </Link>
                <Link
                  href="/confluence-space-permissions"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Lock className="h-4 w-4 text-blue-600" />
                  <span>Space Permissions</span>
                </Link>
                <Link
                  href="/confluence-space-templates"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Space Templates</span>
                </Link>
                <Link
                  href="/confluence-space-settings"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Space Settings</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  User & Group Management
                </CardTitle>
                <CardDescription>Manage user access and organize teams with groups in Confluence.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/confluence-groups"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>Groups</span>
                  <Badge variant="outline" className="ml-auto">
                    Updated
                  </Badge>
                </Link>
                <Link
                  href="/user-management/profiles"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>User Profiles</span>
                </Link>
                <Link
                  href="/confluence-global-permissions"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Lock className="h-4 w-4 text-blue-600" />
                  <span>Global Permissions</span>
                </Link>
                <Link
                  href="/confluence-user-directories"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Database className="h-4 w-4 text-blue-600" />
                  <span>User Directories</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Content Management
                </CardTitle>
                <CardDescription>Create, edit, and organize content effectively in Confluence.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/confluence-page-templates"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Page Templates</span>
                </Link>
                <Link
                  href="/confluence-macros"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Code className="h-4 w-4 text-blue-600" />
                  <span>Macros & Apps</span>
                </Link>
                <Link
                  href="/confluence-labels"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Labels & Organization</span>
                </Link>
                <Link
                  href="/confluence-attachments"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-4 w-4 text-blue-600" />
                  <span>File Management</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Admin Actions Section */}
        <div className="space-y-6" id="admin-actions">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            Admin Actions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  User Administration
                </CardTitle>
                <CardDescription>
                  Comprehensive user management and access control for your organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/user-management"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>User Provisioning</span>
                </Link>
                <Link
                  href="/admin-bulk-operations"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Database className="h-4 w-4 text-blue-600" />
                  <span>Bulk Operations</span>
                </Link>
                <Link
                  href="/admin-access-logs"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Access Logs</span>
                </Link>
                <Link
                  href="/admin-deactivation"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <UserCheck className="h-4 w-4 text-blue-600" />
                  <span>User Deactivation</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  Security & Compliance
                </CardTitle>
                <CardDescription>
                  Configure security policies and ensure compliance across your organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/admin-sso-configuration"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Lock className="h-4 w-4 text-blue-600" />
                  <span>SSO Configuration</span>
                </Link>
                <Link
                  href="/admin-2fa-policies"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>2FA Policies</span>
                </Link>
                <Link
                  href="/admin-ip-allowlisting"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>IP Allowlisting</span>
                </Link>
                <Link
                  href="/admin-audit-logs"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Audit Logs</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  System Configuration
                </CardTitle>
                <CardDescription>Configure global settings and manage your Atlassian Cloud instance.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/admin-global-settings"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Global Settings</span>
                </Link>
                <Link
                  href="/admin-app-management"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Code className="h-4 w-4 text-blue-600" />
                  <span>App Management</span>
                </Link>
                <Link
                  href="/admin-backup-restore"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Database className="h-4 w-4 text-blue-600" />
                  <span>Backup & Restore</span>
                </Link>
                <Link
                  href="/admin-site-access"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>Site Access</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Miscellaneous Section */}
        <div className="space-y-6" id="miscellaneous">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Workflow className="h-5 w-5 text-white" />
            </div>
            Miscellaneous
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-blue-600" />
                  Integrations & APIs
                </CardTitle>
                <CardDescription>Connect external tools and leverage APIs for custom integrations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/api-usage"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Code className="h-4 w-4 text-blue-600" />
                  <span>REST API Usage</span>
                </Link>
                <Link
                  href="/misc-webhooks"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span>Webhooks Setup</span>
                </Link>
                <Link
                  href="/misc-marketplace-apps"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Building className="h-4 w-4 text-blue-600" />
                  <span>Marketplace Apps</span>
                </Link>
                <Link
                  href="/misc-custom-fields"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Custom Fields</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-600" />
                  Migration & Import
                </CardTitle>
                <CardDescription>Tools and guides for migrating data and importing content.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/misc-server-to-cloud"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-4 w-4 text-blue-600" />
                  <span>Server to Cloud Migration</span>
                </Link>
                <Link
                  href="/misc-data-import"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Database className="h-4 w-4 text-blue-600" />
                  <span>Data Import Tools</span>
                </Link>
                <Link
                  href="/misc-csv-import"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>CSV Import</span>
                </Link>
                <Link
                  href="/misc-content-migration"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span>Content Migration</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  Support & Resources
                </CardTitle>
                <CardDescription>Additional resources, training materials, and support options.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/misc-training-resources"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                  <span>Training Resources</span>
                </Link>
                <Link
                  href="/misc-best-practices"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Star className="h-4 w-4 text-blue-600" />
                  <span>Best Practices</span>
                </Link>
                <Link
                  href="/misc-community"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span>Community Forums</span>
                </Link>
                <Link
                  href="/misc-release-notes"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors"
                >
                  <Bell className="h-4 w-4 text-blue-600" />
                  <span>Release Notes</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <HelpCircle className="h-5 w-5" />
              Need Additional Help?
            </CardTitle>
            <CardDescription className="text-green-700">
              Can't find what you're looking for? Here are additional resources to get the help you need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="mailto:support@company.com"
                className="flex items-center gap-2 p-3 rounded-lg bg-white border hover:bg-green-50 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-medium">Contact Support</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-3 rounded-lg bg-white border hover:bg-green-50 transition-colors"
              >
                <GraduationCap className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-medium">Video Tutorials</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-3 rounded-lg bg-white border hover:bg-green-50 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-medium">Community Forum</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 p-3 rounded-lg bg-white border hover:bg-green-50 transition-colors"
              >
                <Star className="h-4 w-4 text-green-600" />
                <span className="text-green-800 font-medium">Submit Feedback</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
