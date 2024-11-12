import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 
import withReactRouter from 'vite-plugin-next-react-router';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr(), withReactRouter()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types')
    },
  },
  
})
