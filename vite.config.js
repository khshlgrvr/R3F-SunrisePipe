import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: process.env.GITHUB_PAGES ? '/R3F-SunrisePipe/' : '/',
  plugins: [react()],
  server: {
    host: true
  },
})
