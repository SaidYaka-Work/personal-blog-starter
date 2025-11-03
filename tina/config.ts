import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Information",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Site Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Site Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "url",
                label: "Site URL",
                required: true,
                description: "e.g., https://johnsmith.com",
              },
              {
                type: "string",
                name: "locale",
                label: "Locale",
                options: ["en_US", "en_GB", "es_ES", "fr_FR", "de_DE"],
              },
            ],
          },
          {
            type: "object",
            name: "author",
            label: "Author Information",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "bio",
                label: "Bio",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "image",
                name: "image",
                label: "Profile Image",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            fields: [
              {
                type: "string",
                name: "twitter",
                label: "Twitter Username",
                description: "Without the @ symbol",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn Username",
              },
              {
                type: "string",
                name: "github",
                label: "GitHub Username",
              },
            ],
          },
          {
            type: "object",
            name: "theme",
            label: "Theme Colors",
            fields: [
              {
                type: "string",
                name: "primaryColor",
                label: "Primary Color",
                description: "Main brand color (hex code)",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "backgroundColor",
                label: "Background Color",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "textColor",
                label: "Text Color",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "accentColor",
                label: "Accent Color",
                description: "For highlights and CTAs",
                ui: {
                  component: "color",
                },
              },
            ],
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
                list: true,
                ui: {
                  component: "tags",
                },
              },
              {
                type: "image",
                name: "ogImage",
                label: "Default Open Graph Image",
              },
              {
                type: "string",
                name: "twitterCard",
                label: "Twitter Card Type",
                options: ["summary", "summary_large_image"],
              },
            ],
          },
        ],
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            description: "URL-friendly version of the title (e.g., 'my-blog-post')",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publication Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "canonical_url",
            label: "Canonical URL",
          },
          {
            type: "string",
            name: "keywords",
            label: "Keywords",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "og_title",
            label: "Open Graph Title",
          },
          {
            type: "string",
            name: "og_description",
            label: "Open Graph Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "og_image",
            label: "Open Graph Image",
          },
          {
            type: "string",
            name: "twitter_card",
            label: "Twitter Card Type",
            options: ["summary", "summary_large_image"],
          },
          {
            type: "string",
            name: "twitter_site",
            label: "Twitter Handle",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Blog Post Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
