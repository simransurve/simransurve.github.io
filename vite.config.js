import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/simransurve.github.io/',
  plugins: [react()],
})
