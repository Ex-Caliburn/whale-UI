### 引入 Jdk-UI
你可以引入整个 Jdk-UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Jdk-UI。

###  完整引入
在 main.js 中写入以下内容：

``` vue
import Vue from 'vue';
import JdkUI from 'jdk-ui';
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
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：

```
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "jdk-ui",
        "styleLibraryName": "src/components"
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
