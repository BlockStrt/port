import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'port',
  title: 'portproj',

  projectId: '74w6p0rn',
  dataset: 'production',

  plugins: [deskTool(), visionTool({ defaultApiVersion: '2022-10-21' }), media()],

  schema: {
    types: schemaTypes,
  },
})
