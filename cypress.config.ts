import { defineConfig } from "cypress";
import * as dotenv from 'dotenv'

dotenv.config()

import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(on: any, config: any) {
  await addCucumberPreprocessorPlugin(on, config);

  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)]
  })

  on("file:preprocessor", bundler)

  return config
}

const CYPRESS_BASE_URL = process.env.CYPRESS_BASE_URL

if (!CYPRESS_BASE_URL) {
  console.error('Missing CYPRESS_BASE_URL environment variable')
  process.exit(1)
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: CYPRESS_BASE_URL,
  },
  env: {
    CYPRESS_BASE_URL: CYPRESS_BASE_URL,
  }
});
