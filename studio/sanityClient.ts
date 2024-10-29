import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';


export const sanityClient = createClient({
  projectId: '1woggm8i', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2021-03-25',
})

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
