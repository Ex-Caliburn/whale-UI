const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '../' ,'..', dir)
}

module.exports = {
    title: 'Jdk UI',
    base: '/Jdk-UI/',
    description: 'Jdk UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://github.com/Ex-Caliburn/Jdk-UI#readme' },
            { text: 'Github', link: 'https://github.com/Ex-Caliburn/Jdk-UI' },
        ],
        sidebar: [
          ['/views/guide', '快速上手'],
          ['/views/button', '按钮 Button'],
          ['/views/imagePreviewer', '图片预览 ImagePreviewer'],
        ],
      // 第三方搜索
      // algolia: {
      //   apiKey: '<API_KEY>',
      //   indexName: '<INDEX_NAME>'
      // }
    },
    markdown: {
        lineNumbers: false
    },
    scss: {
      // 公共组件调用公共样式
    },
    plugins: {
      // '@vuepress/pwa': {
      //   serviceWorker: true,
      //   updatePopup: {
      //     '/': {
      //       message: "New content is available.",
      //       buttonText: "Refresh"
      //     },
      //     '/zh/': {
      //       message: "发现新内容可用",
      //       buttonText: "刷新"
      //     },
      //     '/ru/': {
      //       message: 'Доступно обновление контента',
      //       buttonText: 'Обновить'
      //     }
      //   }
      // },
      // '@vuepress/nprogress': {},
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs_create'),
              '@src': resolve('src'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}
