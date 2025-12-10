<template>
  <v-container class="max-w-7xl py-8">
    <div class="d-flex flex-column ga-8">
      <div
        class="text-center pa-12 rounded-lg"
        style="margin: -16px; background: linear-gradient(90deg, #2563eb, #1d4ed8); color: white"
      >
        <h1 class="text-h3 font-weight-bold">Atlassian Cloud User Guide</h1>
        <p class="text-h6 opacity-90">
          Your comprehensive guide to managing and using Atlassian Cloud services
        </p>
      </div>

      <v-card>
        <v-card-text class="py-6 text-center">
          <h3 class="text-subtitle-1 font-weight-semibold mb-4">Find what you're looking for</h3>
          <div class="position-relative mx-auto" style="max-width: 420px">
            <v-text-field
              v-model="searchTerm"
              density="comfortable"
              variant="outlined"
              hide-details
              placeholder="Search guides, features, or topics..."
              prepend-inner-icon="mdi-magnify"
            />
          </div>
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title class="d-flex align-center gap-2">
          <v-icon icon="mdi-flash" color="primary" size="20" />
          Quick Access
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col
              v-for="item in quickAccess"
              :key="item.title"
              cols="12"
              sm="6"
              md="4"
              lg="2"
            >
              <a :href="item.href" class="d-flex flex-column align-center pa-4 rounded-lg border" style="text-decoration: none">
                <v-icon :icon="item.icon" color="primary" size="32" class="mb-2" />
                <span class="font-weight-medium text-body-2">{{ item.title }}</span>
                <span class="text-caption text-medium-emphasis">{{ item.subtitle }}</span>
              </a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <section v-for="section in filteredSections" :key="section.id" :id="section.id" class="d-flex flex-column ga-4">
        <div class="d-flex align-center gap-3">
          <div class="d-flex align-center justify-center" style="width: 40px; height: 40px; border-radius: 12px; background-color: #2563eb">
            <v-icon :icon="section.icon" color="white" size="22" />
          </div>
          <h2 class="text-h5 font-weight-bold">{{ section.title }}</h2>
        </div>

        <v-row dense>
          <v-col v-for="card in section.cards" :key="card.title" cols="12" md="6" lg="4">
            <v-card>
              <v-card-title class="d-flex align-center gap-2 pb-1">
                <v-icon :icon="card.icon" color="primary" size="20" />
                {{ card.title }}
              </v-card-title>
              <v-card-subtitle class="pb-0 text-medium-emphasis">{{ card.description }}</v-card-subtitle>
              <v-card-text class="pt-3">
                <div class="d-flex flex-column ga-2">
                  <a
                    v-for="link in filteredLinks(card.links)"
                    :key="link.title"
                    :href="link.href"
                    class="d-flex align-center ga-2 pa-2 rounded hover:bg-grey-lighten-4"
                    style="text-decoration: none"
                  >
                    <v-icon :icon="link.icon" color="primary" size="18" />
                    <span class="text-body-2">{{ link.title }}</span>
                    <v-chip
                      v-if="link.badge"
                      :variant="link.badge.variant"
                      size="small"
                      class="ml-auto"
                    >
                      {{ link.badge.label }}
                    </v-chip>
                  </a>
                  <div v-if="!filteredLinks(card.links).length" class="text-caption text-medium-emphasis pa-2">
                    No matches for "{{ searchTerm }}" in this category.
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-card class="bg-green-lighten-5 border-green-lighten-2">
        <v-card-title class="d-flex align-center gap-2 text-green-darken-3">
          <v-icon icon="mdi-help-circle" color="green" size="20" />
          Need Additional Help?
        </v-card-title>
        <v-card-subtitle class="text-green-darken-2">
          Can't find what you're looking for? Here are additional resources to get the help you need.
        </v-card-subtitle>
        <v-card-text>
          <v-row dense>
            <v-col v-for="item in helpLinks" :key="item.title" cols="12" sm="6" md="3">
              <a
                :href="item.href"
                class="d-flex align-center ga-2 pa-3 rounded-lg bg-white border"
                style="text-decoration: none"
              >
                <v-icon :icon="item.icon" color="green" size="18" />
                <span class="text-body-2 font-weight-medium text-green-darken-3">{{ item.title }}</span>
              </a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'

const searchTerm = ref('')

const quickAccess = [
  { href: '#getting-started', title: 'Getting Started', subtitle: 'New to Atlassian Cloud?', icon: 'mdi-rocket' },
  { href: '/user-management', title: 'User Management', subtitle: 'Manage users & permissions', icon: 'mdi-account-group' },
  { href: '#security', title: 'Security Settings', subtitle: 'Configure security policies', icon: 'mdi-lock' },
  { href: '#integrations', title: 'Integrations', subtitle: 'Connect external tools', icon: 'mdi-link-variant' },
  { href: '#billing', title: 'Billing & Plans', subtitle: 'Manage subscriptions', icon: 'mdi-credit-card-outline' },
  { href: '#troubleshooting', title: 'Troubleshooting', subtitle: 'Common issues & solutions', icon: 'mdi-help-circle-outline' },
]

const sections = [
  {
    id: 'jira',
    title: 'Jira',
    icon: 'mdi-layers',
    cards: [
      {
        title: 'Project Management',
        icon: 'mdi-chart-bar',
        description: 'Learn how to create, configure, and manage Jira projects effectively.',
        links: [
          { title: 'Project Dashboard', href: '/jira-project-dashboard', icon: 'mdi-chart-bar', badge: { label: 'Popular', variant: 'flat' } },
          { title: 'Project Admins', href: '/jira-project-admins', icon: 'mdi-account-check' },
          { title: 'Project Settings', href: '/jira-project-settings', icon: 'mdi-cog' },
          { title: 'Workflows & Schemes', href: '/jira-workflows', icon: 'mdi-animation-outline' },
        ],
      },
      {
        title: 'Development Tools',
        icon: 'mdi-source-branch',
        description: 'Integrate development tools and manage code repositories within Jira.',
        links: [
          { title: 'Git Integration', href: '/git-integration', icon: 'mdi-source-branch', badge: { label: 'New', variant: 'outlined' } },
          { title: 'Code Reviews', href: '/jira-code-reviews', icon: 'mdi-code-tags' },
          { title: 'Deployments', href: '/jira-deployments', icon: 'mdi-rocket-launch' },
          { title: 'Automation Rules', href: '/jira-automation', icon: 'mdi-flash' },
        ],
      },
      {
        title: 'Issue Management',
        icon: 'mdi-file-document',
        description: 'Master issue creation, tracking, and resolution in Jira projects.',
        links: [
          { title: 'Issue Types & Fields', href: '/jira-issue-types', icon: 'mdi-file-document-outline' },
          { title: 'Agile Boards', href: '/jira-agile-boards', icon: 'mdi-view-dashboard' },
          { title: 'Reports & Analytics', href: '/jira-reporting', icon: 'mdi-chart-bar' },
          { title: 'Filters & JQL', href: '/jira-filters', icon: 'mdi-magnify' },
        ],
      },
    ],
  },
  {
    id: 'confluence',
    title: 'Confluence',
    icon: 'mdi-book-open-variant',
    cards: [
      {
        title: 'Space Management',
        icon: 'mdi-office-building',
        description: 'Create and manage Confluence spaces for organized documentation.',
        links: [
          { title: 'Space Admins', href: '/confluence-space-admins', icon: 'mdi-account-check', badge: { label: 'Popular', variant: 'flat' } },
          { title: 'Space Permissions', href: '/confluence-space-permissions', icon: 'mdi-lock-outline' },
          { title: 'Space Templates', href: '/confluence-space-templates', icon: 'mdi-file-document-outline' },
          { title: 'Space Settings', href: '/confluence-space-settings', icon: 'mdi-cog' },
        ],
      },
      {
        title: 'User & Group Management',
        icon: 'mdi-account-group',
        description: 'Manage user access and organize teams with groups in Confluence.',
        links: [
          { title: 'Groups', href: '/confluence-groups', icon: 'mdi-account-group', badge: { label: 'Updated', variant: 'outlined' } },
          { title: 'User Profiles', href: '/user-management/profiles', icon: 'mdi-account-check' },
          { title: 'Global Permissions', href: '/confluence-global-permissions', icon: 'mdi-lock-outline' },
          { title: 'User Directories', href: '/confluence-user-directories', icon: 'mdi-database' },
        ],
      },
      {
        title: 'Content Management',
        icon: 'mdi-file-document-edit',
        description: 'Create, edit, and organize content effectively in Confluence.',
        links: [
          { title: 'Page Templates', href: '/confluence-page-templates', icon: 'mdi-file-document-edit-outline' },
          { title: 'Macros & Apps', href: '/confluence-macros', icon: 'mdi-code-tags' },
          { title: 'Labels & Organization', href: '/confluence-labels', icon: 'mdi-star-outline' },
          { title: 'File Management', href: '/confluence-attachments', icon: 'mdi-cloud-download' },
        ],
      },
    ],
  },
  {
    id: 'admin-actions',
    title: 'Admin Actions',
    icon: 'mdi-shield-account',
    cards: [
      {
        title: 'User Administration',
        icon: 'mdi-account-group',
        description: 'Comprehensive user management and access control for your organization.',
        links: [
          { title: 'User Provisioning', href: '/user-management', icon: 'mdi-account-group' },
          { title: 'Bulk Operations', href: '/admin-bulk-operations', icon: 'mdi-database' },
          { title: 'Access Logs', href: '/admin-access-logs', icon: 'mdi-file-document-outline' },
          { title: 'User Deactivation', href: '/admin-deactivation', icon: 'mdi-account-check' },
        ],
      },
      {
        title: 'Security & Compliance',
        icon: 'mdi-lock',
        description: 'Configure security policies and ensure compliance across your organization.',
        links: [
          { title: 'SSO Configuration', href: '/admin-sso-configuration', icon: 'mdi-lock-outline' },
          { title: '2FA Policies', href: '/admin-2fa-policies', icon: 'mdi-shield' },
          { title: 'IP Allowlisting', href: '/admin-ip-allowlisting', icon: 'mdi-earth' },
          { title: 'Audit Logs', href: '/admin-audit-logs', icon: 'mdi-file-document-outline' },
        ],
      },
      {
        title: 'System Configuration',
        icon: 'mdi-cog',
        description: 'Configure global settings and manage your Atlassian Cloud instance.',
        links: [
          { title: 'Global Settings', href: '/admin-global-settings', icon: 'mdi-cog-outline' },
          { title: 'App Management', href: '/admin-app-management', icon: 'mdi-code-tags' },
          { title: 'Backup & Restore', href: '/admin-backup-restore', icon: 'mdi-database-refresh' },
          { title: 'Site Access', href: '/admin-site-access', icon: 'mdi-earth' },
        ],
      },
    ],
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous',
    icon: 'mdi-shape',
    cards: [
      {
        title: 'Integrations & APIs',
        icon: 'mdi-link-variant',
        description: 'Connect external tools and leverage APIs for custom integrations.',
        links: [
          { title: 'REST API Usage', href: '/api-usage', icon: 'mdi-code-braces' },
          { title: 'Webhooks Setup', href: '/misc-webhooks', icon: 'mdi-flash' },
          { title: 'Marketplace Apps', href: '/misc-marketplace-apps', icon: 'mdi-office-building' },
          { title: 'Custom Fields', href: '/misc-custom-fields', icon: 'mdi-file-document-outline' },
        ],
      },
      {
        title: 'Migration & Import',
        icon: 'mdi-download',
        description: 'Tools and guides for migrating data and importing content.',
        links: [
          { title: 'Server to Cloud Migration', href: '/misc-server-to-cloud', icon: 'mdi-cloud-download' },
          { title: 'Data Import Tools', href: '/misc-data-import', icon: 'mdi-database' },
          { title: 'CSV Import', href: '/misc-csv-import', icon: 'mdi-file-delimited-outline' },
          { title: 'Content Migration', href: '/misc-content-migration', icon: 'mdi-book-open-variant' },
        ],
      },
      {
        title: 'Support & Resources',
        icon: 'mdi-help-circle',
        description: 'Additional resources, training materials, and support options.',
        links: [
          { title: 'Training Resources', href: '/misc-training-resources', icon: 'mdi-school' },
          { title: 'Best Practices', href: '/misc-best-practices', icon: 'mdi-star-outline' },
          { title: 'Community Forums', href: '/misc-community', icon: 'mdi-message-text' },
          { title: 'Release Notes', href: '/misc-release-notes', icon: 'mdi-bell-outline' },
        ],
      },
    ],
  },
]

const helpLinks = [
  { title: 'Contact Support', href: 'mailto:support@company.com', icon: 'mdi-message-text' },
  { title: 'Video Tutorials', href: '#', icon: 'mdi-school' },
  { title: 'Community Forum', href: '#', icon: 'mdi-message-text-outline' },
  { title: 'Submit Feedback', href: '#', icon: 'mdi-star-outline' },
]

const filteredLinks = (links) => {
  const query = searchTerm.value.trim().toLowerCase()
  if (!query) return links

  return links.filter((link) => link.title.toLowerCase().includes(query))
}

const filteredSections = computed(() =>
  sections.map((section) => ({
    ...section,
    cards: section.cards.map((card) => ({ ...card, links: filteredLinks(card.links) })),
  })),
)
</script>
