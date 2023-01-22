import { createClient } from 'sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = "2022-11-16";

 export const config = {
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
  }

  export const sanityClient = createClient(config);

  export const urlFor = (source:any) => 
  createImageUrlBuilder(config).image(source);

export { createClient };
