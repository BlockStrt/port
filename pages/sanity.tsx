import sanityClient from '@sanity/client'

export default sanityClient({
 projectId: 'port',
 dataset: 'portdata',
 useCdn: true // `false` if you want to ensure fresh data
});