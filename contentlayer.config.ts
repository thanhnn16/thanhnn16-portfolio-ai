import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    role: {
      type: "string",
      required: true,
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    category: {
      type: "enum",
      options: ["AI & Automation", "Mobile App", "Web App"],
      required: true,
    },
    featured: {
      type: "boolean",
      default: false,
    },
    mainImage: {
      type: "string",
      required: true,
    },
    projectLink: {
      type: "string",
    },
    githubLink: {
      type: "string",
    },
    locale: {
      type: "enum",
      options: ["vi", "en", "ja"],
      required: true,
      default: "vi",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`,
    },
  },
}))

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    author: {
      type: "string",
      required: true,
      default: "Nông Nguyễn Thanh",
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    coverImage: {
      type: "string",
      required: true,
    },
    locale: {
      type: "enum",
      options: ["vi", "en", "ja"],
      required: true,
      default: "vi",
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
    ],
  },
})
