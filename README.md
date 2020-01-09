# jdk-ui

[项目地址](https://ex-caliburn.github.io/Jdk-UI/)

## Project setup
```
npm install jdk-ui
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## 发布流程:

### 构建 推到git
npm run build:docs
npm run build:lib
npm push

### 修改版本号发布到npm
package.json 中 "version": "0.1.11"
/components/index.js 中 var version = '0.1.4'
npm publish

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### step hole 踩坑
1. 文件名不能为中文
2. 如何引入全局样式 暂未找到好办法，需要每个文件都引入 docs.scss
3. 引入字体图标 转为base64
