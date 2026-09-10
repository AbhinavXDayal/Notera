import type { EducationalResource, ResourceFilterOptions } from '../types/resource';
import { ALL_RESOURCES } from '../data/resources';

/**
 * Storage Service
 * Handles resolving public file URLs (local static files or CDN/Cloud URLs),
 * opening documents in browser tabs, downloading files, and querying resources.
 */
export class StorageService {
  /**
   * Resolves a public file URL.
   * Supports:
   * 1. Relative public asset paths (e.g. '/resources/cat/qa/percentages.pdf')
   * 2. Absolute cloud storage / CDN URLs (e.g. 'https://cdn.notera.edu/cat/notes.pdf')
   */
  static resolveFileUrl(fileUrl: string): string {
    if (!fileUrl) return '';
    if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://') || fileUrl.startsWith('data:') || fileUrl.startsWith('blob:')) {
      return fileUrl;
    }
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = fileUrl.startsWith('/') ? fileUrl : `/${fileUrl}`;
    return `${cleanBase}${cleanPath}`;
  }

  /**
   * Opens a PDF or educational document in a clean new browser tab for reading.
   */
  static openResource(resource: EducationalResource): void {
    const url = this.resolveFileUrl(resource.fileUrl);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Triggers a clean browser download of the original resource file.
   */
  static downloadResource(resource: EducationalResource): void {
    const url = this.resolveFileUrl(resource.fileUrl);
    const link = document.createElement('a');
    link.href = url;
    link.download = resource.fileName || `${resource.id}.pdf`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Retrieves all available educational resources.
   */
  static getAllResources(): EducationalResource[] {
    return ALL_RESOURCES;
  }

  /**
   * Retrieves resources by educational field (e.g., 'CAT', 'JEE', etc.).
   */
  static getResourcesByField(field: string): EducationalResource[] {
    return ALL_RESOURCES.filter(
      (res) => res.field.toUpperCase() === field.toUpperCase()
    );
  }

  /**
   * Retrieves resources for a specific subject within a field.
   */
  static getResourcesBySubject(field: string, subject: string): EducationalResource[] {
    return ALL_RESOURCES.filter(
      (res) =>
        res.field.toUpperCase() === field.toUpperCase() &&
        res.subject?.toUpperCase() === subject.toUpperCase()
    );
  }

  /**
   * Filters resources by multiple criteria (field, subject, topic, type, search).
   */
  static filterResources(options: ResourceFilterOptions): EducationalResource[] {
    return ALL_RESOURCES.filter((res) => {
      if (options.field && res.field.toUpperCase() !== options.field.toUpperCase()) {
        return false;
      }
      if (options.subject && res.subject?.toUpperCase() !== options.subject.toUpperCase()) {
        return false;
      }
      if (options.topic && res.topic?.toLowerCase() !== options.topic.toLowerCase()) {
        return false;
      }
      if (options.type && res.type !== options.type) {
        return false;
      }
      if (options.searchQuery) {
        const q = options.searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesTopic = res.topic?.toLowerCase().includes(q);
        const matchesTags = res.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTopic && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }
}

