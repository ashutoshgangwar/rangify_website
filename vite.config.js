import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const appVersion = process.env.npm_package_version ?? 'dev'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    host: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
