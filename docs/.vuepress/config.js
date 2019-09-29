const path = require('path')
function resolve (dir) {
    console.log(path.join(__dirname, '../' ,'..', dir))
    return path.join(__dirname, '../' ,'..', dir)
}

module.exports = {
    title: 'Jdk UI',
    base: '/jdk-ui/',
    description: 'Jdk UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://juejin.im/user/5a96817df265da4e9c635c39/posts' },
            { text: 'Github', link: 'https://github.com/qiudongwei/jdk-ui' },
        ],
        sidebar: [
            ['/views/button', '按钮 Button'],
            // ['/views/button', '按钮 Button'],
            // ['/views/icon', '图标 Icon'],
            // ['/views/switch', '开关 Switch'],
            // ['/views/table', '表格 Table']
        ]
    },
    markdown: {
        lineNumbers: false
    },
    scss: {
      // 公共组件调用公共样式
      includePaths: ["./scss/docs.scss"]
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              '@src': resolve('src'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}
