import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'



 export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pv8y60vp",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2022-11-16" ,// https://www.sanity.io/docs/api-versioning
    useCdn: process.env.Node_ENV === 'production',
    exclude: ["node_modules", "./sanity"], // Exclude all paths that start with "sanity/"
 }

  export const sanityClient = createClient(config);

  export const urlFor = (source:any) => 
  createImageUrlBuilder(config).image(source);


