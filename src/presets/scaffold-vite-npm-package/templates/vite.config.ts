import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
  },
})
