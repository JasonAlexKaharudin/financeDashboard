import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
  },
  define: {
    "process.env": process.env,
    ENV_KEY: process.env.VITE_BASE_URL
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
})
