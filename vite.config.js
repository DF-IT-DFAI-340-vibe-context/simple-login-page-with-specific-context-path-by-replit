import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true
    },
    base: env.VITE_CONTEXT_PATH || '/'
  }
})
