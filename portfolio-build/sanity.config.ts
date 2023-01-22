import {defineConfig as config} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default config ({
  name: 'default',
  title: 'portfolio-build',

  projectId: '7fnjll7q',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
})
