
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'

const defineConfig = () => ({
  name: 'port',
  title: 'portproj',

  projectId: '74w6p0rn',
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
export default defineConfig