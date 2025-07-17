import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {locate, mainDocuments} from './src/presentation/locate'
import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'glowing-engine',
  title: 'Glowing Engine',

  projectId: 'uhpaa149',
  dataset: 'glowing-engine',

  plugins: [
    structureTool(),
    presentationTool({
      resolve: {
        locations: locate,
        mainDocuments: mainDocuments,
      },
      previewUrl: {
        origin:
          process.env.SANITY_STUDIO_PREVIEW_URL ||
          (process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://glowing-engine-web.vercel.app'),
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      allowOrigins: ['http://localhost:3000', 'https://glowing-engine-web.vercel.app'],
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
