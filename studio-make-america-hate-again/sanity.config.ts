import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const dataset_ = process.env.SANITY_STUDIO_DATA_SET || "production"

export default defineConfig({
  name: 'default',
  title: 'Make America Hate Again',

  projectId: 'qfsk5hf2',
  dataset: dataset_,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
