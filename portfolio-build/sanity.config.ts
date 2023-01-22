import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const defineConfig= () => ({
  name: 'default',
  title: 'portfolio-build',

  projectId: '7fnjll7q',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
})


export default defineConfig