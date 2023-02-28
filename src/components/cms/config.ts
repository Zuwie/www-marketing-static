import type { Config } from "@staticcms/core";

const config: Config = {
  backend: { name: "git-gateway", branch: "main" },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "config",
      label: "Config",
      icon: "settings",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "general",
          label: "Site Config",
          file: "config.json",
          description: "General site settings",
          fields: [
            { label: "URL", name: "base_url", widget: "string", hint: "Do not enter the trailing slash of the URL" },
            { label: "Site title", name: "site_title", widget: "string" },
            { label: "Site description", name: "site_description", widget: "string" },
            {
              label: "Site keywords",
              name: "site_keywords",
              widget: "list",
              summary: "{{fields.keyword.keyword}}",
              fields: [{ label: "Keyword", name: "keyword", widget: "string" }],
            },
            { label: "Discord", name: "discord_server", widget: "string" },
          ],
        },
      ],
    },
    {
      name: "meta",
      label: "Meta",
      icon: "cube",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "authors",
          label: "Authors",
          file: "meta/authors.yml",
          description: "Author descriptions",
          fields: [
            {
              name: "authors",
              label: "Authors",
              label_singular: "Author",
              widget: "list",
              fields: [
                { label: "Slug", name: "slug", widget: "string", hint: "The part of a URL identifies the author" },
                { label: "Name", name: "name", widget: "string", hint: "First and Last" },
                { label: "Introduction", name: "introduction", widget: "text" },
              ],
            },
          ],
        },
        {
          name: "tags",
          label: "Tags",
          file: "meta/tags.yml",
          description: "List of tags",
          fields: [
            {
              name: "tags",
              label: "Tags",
              label_singular: "Tag",
              widget: "list",
              fields: [
                { label: "Slug", name: "slug", widget: "string", hint: "The part of a URL identifies the tag" },
                { label: "Display Name", name: "name", widget: "string", hint: "Tag name for displaying on the site" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      files: [
        {
          name: 'hero',
          label: 'Hero',
          file: 'content/hero.yml',
          fields: [
            { name: 'banner', label: 'Banner', widget: 'image', hint: '2830×1857 or similar. Keep file-size small (~50kb)' },
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
          ]
        },
        {
          name: 'firstSection',
          label: 'First Section',
          file: 'content/landing_first.yml',
          fields: [
            { name: 'image', label: 'Image', widget: 'image' },
            { name: 'subTitle', label: 'Subtitle', widget: 'string' },
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
            {
              name: 'list',
              label: 'List',
              widget: 'list',
              fields: [
                { name: 'title', label: 'Title', widget: 'string' },
                { name: 'body', label: 'Body', widget: 'string' },
              ]
            }
          ]
        },
        {
          name: 'secondSection',
          label: 'Second Section',
          file: 'content/landing_second.yml',
          fields: [
            { name: 'image', label: 'Image', widget: 'image' },
            { name: 'subTitle', label: 'Subtitle', widget: 'string' },
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
            {
              name: 'list',
              label: 'List',
              widget: 'list',
              fields: [
                { name: 'title', label: 'Title', widget: 'string' },
                { name: 'body', label: 'Body', widget: 'string' },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'members',
      label: 'Members',
      icon: "users",
      files: [
        {
          name: 'members',
          label: 'Members Page',
          file: 'content/members.yml',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
            {
              name: 'member',
              label: 'Member',
              widget: 'list',
              fields: [
                { label: "Name", name: "name", widget: "string" },
                { label: "Role", name: "role", widget: "string" },
                { label: 'Profile Picture', name: 'profilePicture', widget: 'image' },
                { label: "Body", name: "body", widget: "markdown" },
              ],
            },
          ],
        }],
    },
    {
      name: "events",
      label: "Events",
      icon: "calender",
      files: [
        {
          name: 'events',
          label: 'Events Page',
          file: 'content/events.yml',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
            {
              name: 'events',
              label: 'Events',
              widget: 'list',
              fields: [
                { label: "Name", name: "name", widget: "string" },
                { label: "Address", name: "address", widget: "string" },
                { label: "Date", name: "date", widget: "datetime" },
                { label: 'Banner', name: 'banner', widget: 'image' },
                {
                  label: "Tag",
                  name: "tag",
                  widget: "relation",
                  collection: "meta",
                  file: "tags",
                  search_fields: ["tags.*.name"],
                  display_fields: ["tags.*.name"],
                  value_field: "tags.*.slug",
                },
                { label: "Body", name: "body", widget: "markdown" },
                { label: "Details", name: "details", widget: "markdown", hint: "Der Inhalt wird im Modal angezeigt wenn auf ein Event geklickt wird." }
              ],
            },
          ],
        }],
    },
    {
      name: "contact",
      label: "Contact",
      icon: "calender",
      files: [
        {
          name: 'contact',
          label: 'Contact Page',
          file: 'content/contact.yml',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
          ],
        }],
    },
    {
      hide: true,
      name: "posts",
      label: "Posts",
      folder: "content/posts/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{slug}}",
      identifier_field: "slug",
      summary: "{{title}}",
      fields: [
        { label: "Slug", name: "slug", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          format: "yyyy-MM-dd",
          date_format: "yyyy-MM-dd",
          time_format: false,
        },
        {
          label: "Author",
          name: "author",
          widget: "relation",
          collection: "meta",
          file: "authors",
          search_fields: ["authors.*.name"],
          display_fields: ["authors.*.name"],
          value_field: "authors.*.slug",
        },
        {
          label: "Tags",
          label_singular: "Tag",
          name: "tags",
          widget: "list",
          summary: "{{fields.tag}}",
          fields: [
            {
              label: "Tag",
              name: "tag",
              widget: "relation",
              collection: "meta",
              file: "tags",
              search_fields: ["tags.*.name"],
              display_fields: ["tags.*.name"],
              value_field: "tags.*.slug",
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};

export default config;
