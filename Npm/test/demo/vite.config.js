import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/App.jsx'),
        resolve(__dirname, 'src/Div.jsx'),
      ],
      name: 'Demo',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        return format === 'es' ? `${name}.js` : `${name}.cjs`
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})