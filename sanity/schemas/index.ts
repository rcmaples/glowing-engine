import { type SchemaTypeDefinition } from 'sanity';
import { settings } from '@/sanity/schemas/singletons/settings';
import { postType } from '@/sanity/schemas/documents/post';
import { authorType } from '@/sanity/schemas/documents/author';
import { toggleTestType } from '@/sanity/schemas/scratch/toggleTest';

import { slider } from '@/sanity/schemas/customTypes/rangeSlider';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    settings,
    // Documents
    postType,
    authorType,
    // Scratch
    toggleTestType,
    slider,
  ],
};
