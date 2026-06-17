import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'http://127.0.0.1:5174',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },

component: {
  specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'cypress/support/component.ts',
  devServer: {
    framework: 'react',
    bundler: 'vite',
  },
},
})