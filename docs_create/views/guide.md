### 引入 Jdk-UI
你可以引入整个 Jdk-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Jdk-UI。

###  完整引入
在 main.js 中写入以下内容：支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

``` vue
import Vue from 'vue';
import JdkUI from 'jdk-ui';
import 'jdk-ui/dist/jdk.css'
import App from './App.vue';

Vue.use(JdkUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

<script>
    export default {}
</script>
```

### 按需引入
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

# 安装插件

```
npm i babel-plugin-import -D
```
然后，将 .babelrc 修改为：

```
{
  "plugins": [
    [
      "import",
     {
				"libraryName": "jdk-ui",
				"libraryDirectory": "src/components",
				"style": false
			}, "jdk-ui"
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：

``` vue
import Vue from 'vue';
import { Button } from 'jdk-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
