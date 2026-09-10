export interface FieldGuideModule {
  id: string;
  number: string;
  title: string;
  description: string;
  purpose: string[];
  ctaText: string;
  targetTab?: string;
  badge?: string;
  tag?: string;
}

export interface FieldGuideConfig {
  fieldId: string;
  fieldTitle: string;
  plateNumber?: string;
  heading: string;
  subtitle: string;
  modules: FieldGuideModule[];
}

