import sanityClient from '@sanity/client'

export default sanityClient({
 projectId: 'port',
 dataset: 'portdata',
 apiVersion: '2021-08-31',
 token: 'sanity-auth-token',
 useCdn: true // `false` if you want to ensure fresh data
});