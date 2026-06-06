import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y8j5c42m',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  }
});
