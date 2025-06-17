import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'glowing-engine',
  title: 'Glowing Engine',

  projectId: 'uhpaa149',
  dataset: 'glowing-engine',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
