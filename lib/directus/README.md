# Directus Integration

This directory contains the Directus integration for the application. It provides a typed and structured approach to interacting with the Directus CMS.

## Directory Structure

- `index.ts` - Main entry point that exports the Directus client and re-exports all types and API functions
- `types/` - Type definitions for all collections
  - `index.ts` - Exports all types and defines the main DirectusSchema interface
  - `blog.ts` - Blog-related types
  - `tag.ts` - Tag-related types
  - `newsletter.ts` - Newsletter-related types
  - `comment.ts` - Comment-related types
  - `tracking.ts` - Tracking-related types
  - `workflow.ts` - Workflow-related types
  - `order.ts` - Order-related types
  - `transaction.ts` - Transaction-related types
- `api/` - API functions for interacting with collections
  - `index.ts` - Exports all API functions
  - `blog.ts` - Blog-related API functions
  - `tag.ts` - Tag-related API functions
  - `newsletter.ts` - Newsletter-related API functions
  - `comment.ts` - Comment-related API functions
  - `tracking.ts` - Tracking-related API functions
  - `workflow.ts` - Workflow-related API functions
  - `order.ts` - Order-related API functions
  - `transaction.ts` - Transaction-related API functions

## Usage Examples

### Fetching Data

```typescript
import { getBlogPosts, getTags } from 'lib/directus';

// Get all published blog posts
const posts = await getBlogPosts('en');

// Get all tags
const tags = await getTags();
```

### Creating Data

```typescript
import { createBlogPost, createTag } from 'lib/directus';

// Create a new blog post
const newPost = await createBlogPost({
  title: 'New Blog Post',
  content: 'This is a new blog post',
  slug: 'new-blog-post',
  published: true,
  publish_date: new Date().toISOString(),
  locale: 'en'
});

// Create a new tag
const newTag = await createTag({
  name: 'New Tag',
  slug: 'new-tag'
});
```
