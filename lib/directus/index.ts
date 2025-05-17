// Main entry point for Directus integration
import { createDirectus, rest, staticToken } from '@directus/sdk';
import { DirectusSchema } from './types/';

/**
 * Create the Directus client with typed schema support
 * This ensures type checking for all API calls
 */
const directus = createDirectus<DirectusSchema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'
)
  .with(staticToken(process.env.DIRECTUS_TOKEN || ''))
  .with(rest());

export default directus;

// Re-export types and API functions
export * from './types/';
export * from './api/';