import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/main.js'), 
        resolve(__dirname, 'src/multiply.js')
      ],
      name: 'Demo',
      fileName: (format, name) => {
        return format === 'es' ? `${name}.js` : `${name}.${format}`
      },
    },
  },
})