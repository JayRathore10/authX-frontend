import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target : "https://authx-backend-yyep.onrender.com" ,  
        changeOrigin: true,
        secure: false
      }
    }
  }
})

// target : "https://authx-backend-yyep.onrender.com"