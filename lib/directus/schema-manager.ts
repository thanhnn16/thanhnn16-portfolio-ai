// Schema management utilities for Directus
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { schemaApply, schemaSnapshot, schemaDiff } from '@directus/sdk';
import directus from './index';

/**
 * Get the current schema snapshot from the Directus instance
 */
export async function getSchemaSnapshot() {
  try {
    return await directus.request(schemaSnapshot());
  } catch (error) {
    console.error('Error fetching schema snapshot:', error);
    throw error;
  }
}

/**
 * Compare the provided schema with the current schema and return a diff
 * @param schema The schema to compare with the current schema
 */
export async function getSchemaChanges(schema: any) {
  try {
    return await directus.request(schemaDiff(schema));
  } catch (error) {
    console.error('Error getting schema diff:', error);
    throw error;
  }
}

/**
 * Apply the schema changes to the Directus instance
 * @param changes The schema changes to apply
 */
export async function applySchemaChanges(changes: any) {
  try {
    return await directus.request(schemaApply(changes));
  } catch (error) {
    console.error('Error applying schema changes:', error);
    throw error;
  }
}

/**
 * Load the schema from the YAML file
 */
export function loadSchemaFromFile() {
  try {
    return readFileSync(resolve(__dirname, 'schema.yml'), 'utf8');
  } catch (error) {
    console.error('Error loading schema file:', error);
    throw error;
  }
}

/**
 * Initialize the schema by loading it from the file and applying it if needed
 */
export async function initializeSchema() {
  try {
    const schemaContent = loadSchemaFromFile();
    const currentSchema = await getSchemaSnapshot();
    const changes = await getSchemaChanges(schemaContent);
    
    if (changes && Object.keys(changes).length > 0) {
      console.log('Schema changes detected, applying...');
      await applySchemaChanges(changes);
      console.log('Schema updated successfully');
    } else {
      console.log('Schema is up to date');
    }
    
    return true;
  } catch (error) {
    console.error('Error initializing schema:', error);
    return false;
  }
}
