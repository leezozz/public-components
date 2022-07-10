import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
const path = require('path')
import commonjs from 'vite-plugin-commonjs'
import svgLoader from 'vite-svg-loader'
import { terser } from 'rollup-plugin-terser'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    // 转换 index.html 的专用钩子
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>组件库</title>'
      )
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    vue(),
    commonjs(),
    svgLoader(),
    htmlPlugin(),
    terser(
      {
        compress: {
          drop_console: true
        }
      }
    )
  ],


  // 配置代理
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },


  resolve: {
    alias: [
      {
        find: 'lib',
        replacement: path.resolve(__dirname, 'lib')
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src/store')
      },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, 'src/modules')
      },
      {
        find: 'router',
        replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, 'src/widgets')
      },
      {
        find: 'mixins',
        replacement: path.resolve(__dirname, 'src/mixins')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/element-variables.scss';"
      }
    }
  }
})
