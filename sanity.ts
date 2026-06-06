import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y8j5c42m', // Placeholder project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-11',
  useCdn: false, // Set to false to ensure we always get fresh architectural drawings/content
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return { url: () => '' };
  return builder.image(source);
}
