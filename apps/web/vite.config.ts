import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
     // "~packages": path.resolve(__dirname, "../../packages"),
      '@re-mes2/dx-ui-core': path.resolve(
        __dirname,
        '../../packages/dx-ui-core/src/index.ts'
      ),
      '@re-mes2/plan-module': path.resolve(
        __dirname,
        '../../packages/plan-module/src/index.ts'
      )
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
