// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SQL List Converter',
        short_name: 'SQLConv',
        description: 'Convert lists to SQL-friendly comma separated values',
        theme_color: '#1976d2',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'data_logo_img_2.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'data_logo_img_0.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: true,
    port: 3000
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true
  }
})
