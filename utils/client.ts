import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'l5j00uh1',
  dataset: 'production',
  apiVersion: '2023-05-24',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
