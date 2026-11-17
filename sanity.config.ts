import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'
import { dataset, projectId, studioUrl } from './src/sanity/env'

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  title: 'Royal Solwezi Lodge',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
