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
                { label: "Name", name: "name", widget: "string", hint: "Vor- & Nachname" },
                { label: "Image", name: "image", widget: "image" },
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
            {
              name: 'images',
              label: 'Images',
              widget: 'list',
              fields: [
                { name: 'image', label: 'Image', widget: 'image' },
              ]},
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
            { name: 'image', label: 'Images', widget: 'image'},
            {
              name: 'images',
              label: 'Images',
              widget: 'list',
              fields: [
                { name: 'image', label: 'Image', widget: 'image' },
              ]},
            { name: 'subTitle', label: 'Subtitle', widget: 'string' },
            { name: 'title', label: 'Title', widget: 'string' },
            { name: 'intro', label: 'Intro', widget: 'markdown' },
            {
              name: 'list',
              label: 'List',
              widget: 'list',
              fields: [
                {name: 'title', label: 'Title', widget: 'string'},
                {name: 'body', label: 'Body', widget: 'string'},
              ]
            }
          ]
        },
        {
          name: 'thirdSection',
          label: 'Third Section',
          file: 'content/landing_third.yml',
          fields: [
            {
              name: 'images',
              label: 'Images',
              widget: 'list',
              fields: [
                {name: 'image', label: 'Image', widget: 'image'},
              ]
            },
            {name: 'subTitle', label: 'Subtitle', widget: 'string'},
            {name: 'title', label: 'Title', widget: 'string'},
            {name: 'intro', label: 'Intro', widget: 'markdown'},
            {
              name: 'list',
              label: 'List',
              widget: 'list',
              fields: [
                {name: 'title', label: 'Title', widget: 'string'},
                {name: 'body', label: 'Body', widget: 'string'},
              ]
            }
          ]
        },
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
              name: 'members',
              label: 'Members',
              widget: 'list',
              fields: [
                {label: "Name", name: "name", widget: "string"},
                {label: "Role", name: "role", widget: "string"},
                {label: 'Profile Picture', name: 'profilePicture', widget: 'image'},
                {label: "Body", name: "body", widget: "markdown"},
              ],
            },
          ],
        }],
    },
    {
      name: "events",
      label: "Events",
      icon: "star",
      files: [
        {
          name: 'events',
          label: 'Events Page',
          file: 'content/events.yml',
          fields: [
            {name: 'title', label: 'Title', widget: 'string'},
            {name: 'intro', label: 'Intro', widget: 'markdown'},
            {
              name: 'events',
              label: 'Events',
              widget: 'list',
              fields: [
                { label: "Name", name: "name", widget: "string", required: true },
                { label: "Address", name: "address", widget: "string", required: true },
                { label: "Date", name: "date", widget: "datetime", required: true },
                { label: "End-Date", name: "dateEnd", widget: "datetime", hint: "Optional zu setzen wenn das Event mehrere Tage geht." },
                { label: 'Banner', name: 'banner', widget: 'image', hint: "Wird für die Thumbnail benutzt" },
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
                { label: "Body", name: "body", widget: "markdown", required: true },
                { label: "Details", name: "details", widget: "markdown", hint: "Der Inhalt wird im Modal angezeigt wenn auf ein Event geklickt wird." },
                {
                  name: 'images',
                  label: 'Images',
                  widget: 'list',
                  hint: 'Wird im Modal angezeigt',
                  required: false,
                  fields: [
                    { name: 'image', label: 'Image', widget: 'image' },
                  ]},
              ],
            },
          ],
        }],
    },
    {
      name: "contact",
      label: "Contact",
      icon: "envelope",
      files: [
        {
          name: 'contact',
          label: 'Contact Page',
          file: 'content/contact.yml',
          fields: [
            {name: 'title', label: 'Title', widget: 'string'},
            {name: 'intro', label: 'Intro', widget: 'markdown'},
          ],
        }],
    },
    {
      name: "calender",
      label: "Calender",
      icon: "calender",
      files: [
        {
          name: 'calender',
          label: 'Calender Page',
          file: 'content/calender.yml',
          fields: [
            {name: 'title', label: 'Title', widget: 'string', required: true},
            {name: 'intro', label: 'Intro', widget: 'markdown'},
          ],
        }],
    },
    {
      name: "location",
      label: "Location",
      icon: "map-pin",
      files: [
        {
          name: 'location',
          label: 'Location Page',
          file: 'content/location.yml',
          fields: [
            {name: 'title', label: 'Title', widget: 'string', required: true},
            {name: 'intro', label: 'Intro', widget: 'markdown'},
          ],
        }],
    },
    {
      name: "posts",
      label: "Blog",
      icon: "newspaper",
      folder: "content/posts/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{slug}}",
      identifier_field: "slug",
      summary: "{{title}}",
      fields: [
        {
          label: "Slug",
          name: "slug",
          widget: "string",
          hint: "lowercase mit \"-\" als Ersatz für Whitespace. Slug wird für die URL benutzt."
        },
        {label: "Title", name: "title", widget: "string"},
        {label: "Banner", name: "banner", widget: "image"},
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
        {
          name: 'images',
          label: 'Images',
          widget: 'list',
          required: false,
          fields: [
            {name: 'image', label: 'Image', widget: 'image'},
          ]
        },
        {label: "Body", name: "body", widget: "markdown"},
      ],
    },
  ],
};

export default config;
