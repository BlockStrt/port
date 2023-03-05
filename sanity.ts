import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'



 export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "pv8y60vp",
    apiVersion: "2021-03-25" ,// https://www.sanity.io/docs/api-versioning
    useCdn: process.env.Node_ENV === 'production',
 }

  export const sanityClient = createClient(config);

  export const urlFor = (source:any) => 
  createImageUrlBuilder(config).image(source);


