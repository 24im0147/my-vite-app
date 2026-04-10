import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-vite-app/', // ← この行を必ず追加してください！
  plugins: [
    react(),
    tailwindcss(),
  ],
})