import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // exposes network URL (so other devices on same Wi-Fi can open it)
    port: 5173, // optional, fixes the port if you don’t want it to keep changing
  },
})
