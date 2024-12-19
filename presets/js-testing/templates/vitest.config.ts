import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ... Specify options here.
  include:['**/*.{spec}.?(c|m)[jt]s?(x)']
  },
})
