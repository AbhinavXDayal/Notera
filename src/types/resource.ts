export type ResourceType = 'PDF' | 'Notes' | 'Formula Sheet' | 'Guide' | 'Document';

export interface EducationalResource {
  id: string;
  title: string;
  description: string;
  field: string; // e.g. 'CAT', 'JEE', 'NEET', 'UPSC', etc.
  subject?: string; // e.g. 'QA', 'VARC', 'DILR', 'Mathematics', etc.
  topic?: string; // e.g. 'Arithmetic', 'Algebra', 'Geometry', etc.
  type: ResourceType;
  fileUrl: string; // Public URL or static path e.g. '/resources/cat/qa/percentages.pdf'
  fileName: string;
  fileSize: string; // e.g. '1.4 MB'
  createdAt: string;
  pages?: number;
  author?: string;
  tags?: string[];
  previewUrl?: string;
}

export interface ResourceFilterOptions {
  field?: string;
  subject?: string;
  topic?: string;
  type?: ResourceType;
  searchQuery?: string;
}

