// vite.config.js
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default {
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, 'src') + '/$1'
      }
    ]
  }
}
