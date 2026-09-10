import type { FieldCategory } from '../types/field';

export const FIELDS_DATA: FieldCategory[] = [
  {
    id: 'CAT',
    title: 'CAT',
    subtitle: 'MBA & Leadership Entrance',
    symbol: 'C',
    description: 'Comprehensive mastery of Quantitative Aptitude, Verbal Ability & Reading Comprehension, and Data Interpretation & Logical Reasoning.',
    actionText: 'Enter CAT Universe',
    targetPath: '/cat',
    available: true,
  },
  {
    id: 'COMPSCI',
    title: 'CompSci',
    subtitle: 'Algorithms & Systems',
    symbol: '</>',
    description: 'Data structures, computational complexity, distributed systems architecture, and engineering craftsmanship.',
    actionText: 'Enter CompSci Universe',
    targetPath: '/compsci',
    available: true,
  },
];

