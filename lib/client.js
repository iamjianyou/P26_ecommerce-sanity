
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
/* The project id, dataset and api version. */
    projectId: 'ula6puh9',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);