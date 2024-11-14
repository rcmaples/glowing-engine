'use client';
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from '@sanity/vision';
import {
  PluginOptions,
  defineConfig,
  defineLocaleResourceBundle,
  SchemaType,
  SchemaTypeDefinition,
} from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from 'sanity/presentation';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api';
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings';
import { assistWithPresets } from '@/sanity/plugins/assist';
import { schema } from '@/sanity/schemas';
import { settings } from '@/sanity/schemas/singletons/settings';
import { resolveHref } from '@/sanity/lib/utils';

import CustomNavbar from '@/components/CustomNavbar';

const homeLocation = {
  title: 'Home',
  href: '/',
} satisfies DocumentLocation;

let previewBaseURL = '';

switch (process.env.NODE_ENV) {
  case 'development':
    previewBaseURL = 'http://localhost:3000';
    break;
  case 'production':
    previewBaseURL = 'https://glowing-engine.netlify.app';
    break;
  default:
    previewBaseURL = 'http://localhost:3000';
    break;
}

const CREATE_ENABLED_SCHEMATYPES = ['post'];

const createReadySchemaTypes: SchemaTypeDefinition[] = schema.types.map(
  (schemaType: SchemaTypeDefinition): SchemaTypeDefinition => {
    if (!CREATE_ENABLED_SCHEMATYPES.includes(schemaType.name)) {
      return {
        ...schemaType,
        options: {
          ...schemaType.options,
          sanityCreate: {
            exclude: true,
          },
        },
      };
    }
    return schemaType;
  }
);

export default defineConfig({
  basePath: studioUrl,
  beta: {
    create: { startInCreateEnabled: true },
  },
  projectId,
  dataset,
  schema: {
    types: createReadySchemaTypes,
  },
  studio: {
    components: {
      navbar: CustomNavbar,
    },
  },
  plugins: [
    // presentationTool({
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: '/posts/:slug',
    //         filter: `_type == "post" && slug.current == $slug`,
    //       },
    //     ]),
    //     locations: {
    //       settings: defineLocations({
    //         locations: [homeLocation],
    //         message: 'This document is used on all pages',
    //         tone: 'caution',
    //       }),
    //       post: defineLocations({
    //         select: {
    //           title: 'title',
    //           slug: 'slug.current',
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.title || 'Untitled',
    //               href: resolveHref('post', doc?.slug)!,
    //             },
    //             homeLocation,
    //           ],
    //         }),
    //       }),
    //     },
    //   },
    //   previewUrl: {
    //     previewMode: {
    //       enable: `${previewBaseURL}/api/draft-mode/enable`,
    //     },
    //   },
    // }),
    structureTool({ structure: pageStructure([settings]) }),
    singletonPlugin([settings.name]),
    unsplashImageAsset(),
    assistWithPresets(),
    visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],

  /* Create */
  studioHost: 'https://glowing-engine.sanity.studio',

  // Override the default i18n resources, see
  // https://linear.app/sanity/issue/SAPP-23 for more information.
  // i18n: {
  //   bundles: [
  //     {
  //       locale: "en-US",
  //       namespace: "studio",
  //       resources: {
  //         "inputs.boolean.disabled": "Read only",
  //       },
  //     },
  //   ],
  // },
});
