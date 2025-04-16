// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    role: {
      type: "string",
      required: true
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    category: {
      type: "enum",
      options: ["AI & Automation", "Mobile App", "Web App"],
      required: true
    },
    featured: {
      type: "boolean",
      default: false
    },
    mainImage: {
      type: "string",
      required: true
    },
    projectLink: {
      type: "string"
    },
    githubLink: {
      type: "string"
    },
    locale: {
      type: "enum",
      options: ["vi", "en", "ja"],
      required: true,
      default: "vi"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`
    }
  }
}));
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "blog/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    author: {
      type: "string",
      required: true,
      default: "N\xF4ng Nguy\u1EC5n Thanh"
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    coverImage: {
      type: "string",
      required: true
    },
    locale: {
      type: "enum",
      options: ["vi", "en", "ja"],
      required: true,
      default: "vi"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
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
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ]
    ]
  }
});
export {
  BlogPost,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JVQDHVBO.mjs.map
