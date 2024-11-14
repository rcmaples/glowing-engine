import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// need a commit

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: 'glowing-engine',
  vite: {
    define: {
      'process.env.NEXT_PUBLIC_SANITY_PROJECT_ID': JSON.stringify(projectId),
      'process.env.NEXT_PUBLIC_SANITY_DATASET': JSON.stringify(dataset),
    },
    resolve: {
      alias: {
        '@': __dirname,
      },
    },
  },
});
