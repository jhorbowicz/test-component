import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        app: './src/main.jsx',
      },
    },
    cssCodeSplit: false,
  },
  base: "https://raw.githubusercontent.com/jhorbowicz/test-component/dist/"
})
