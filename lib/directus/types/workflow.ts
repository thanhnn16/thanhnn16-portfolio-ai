// Type definitions for workflow-related collections

export interface Workflow {
  id: string;
  name: string;
  description: string;
  file_content: any; // JSON content
  price: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}
