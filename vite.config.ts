// 明确指定输入输出路径
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 添加代码分割
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          admin: ['/src/components/admin'],
          form: ['react-hook-form', 'yup']
        }
      }
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})