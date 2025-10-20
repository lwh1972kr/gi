import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import * as path from 'path';


// https://vite.dev/config/
export default defineConfig({
  //build: { lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'] } },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@re-mes2/plan-module': path.resolve(
        __dirname,
        '../plan-module/src/index.ts'
      ),
    },
  },
})
