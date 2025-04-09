import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Jasmine-Portfolio/', // Adjust this if necessary
  plugins: [react()],
})
