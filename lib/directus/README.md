# Directus Integration

This directory contains the Directus integration for the application. It provides a typed and structured approach to interacting with the Directus CMS.

## Directory Structure

- `index.ts` - Main entry point that exports the Directus client and re-exports all types and API functions
- `schema.yml` - Complete schema definition for the Directus instance
- `schema-manager.ts` - Utilities for schema synchronization and management
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

## Schema Management

The schema is defined in the `schema.yml` file and can be applied to the Directus instance using the functions in `schema-manager.ts`.

To initialize or update the schema:

```typescript
import { initializeSchema } from './schema-manager';

// Initialize the schema
await initializeSchema();
```

## Collections

The following collections are managed by this integration:

1. **blogs** - Blog posts
2. **tags** - Tags for categorizing content
3. **blogs_tags** - Junction table for blog-tag relationships
4. **newsletters** - Email newsletters
5. **subscribers** - Newsletter subscribers
6. **newsletters_subscribers** - Junction table for newsletter-subscriber relationships
7. **comments** - User comments on blog posts
8. **tracking** - Page visit tracking
9. **workflows** - JSON workflow files
10. **orders** - Customer orders
11. **order_items** - Items within orders
12. **transactions** - Payment transactions

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
