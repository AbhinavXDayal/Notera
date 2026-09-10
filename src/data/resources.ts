import type { EducationalResource } from '../types/resource';
import { CAT_RESOURCES } from './catResources';

/**
 * Universal Resource Registry
 * All public PDFs, formula sheets, guides, and notes are indexed here.
 * To add a new resource, simply add an entry to the appropriate field array.
 */
export const ALL_RESOURCES: EducationalResource[] = [
  ...CAT_RESOURCES,
];

/**
 * Helper to get all resources for a specific field
 */
export function getResourcesForField(field: string): EducationalResource[] {
  return ALL_RESOURCES.filter(
    (item) => item.field.toUpperCase() === field.toUpperCase()
  );
}

/**
 * Helper to get a resource by its unique identifier
 */
export function getResourceById(id: string): EducationalResource | undefined {
  return ALL_RESOURCES.find((item) => item.id === id);
}

