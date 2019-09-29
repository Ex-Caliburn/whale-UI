### 按钮 Button

#### 页面卡片按钮 最小按钮

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' >默认按钮</jdk-button>
    <jdk-button type='success' size='small' width='80' disabled>禁止按钮</jdk-button>
    <jdk-button  size='small' width='80' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' >默认按钮</jdk-button>
<jdk-button type='success' size='small' width='80' disabled>禁止按钮</jdk-button>
<jdk-button  size='small' width='80' plain>朴素按钮</jdk-button>
```

#### 弹窗双按钮

<div class="component-wrapper">
    <jdk-button type='success' size='medium' width='105'>默认按钮</jdk-button>
    <jdk-button type='success' size='medium' width='105' disabled>禁止按钮</jdk-button>
    <jdk-button size='medium' width='105' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='medium' width='105'>默认按钮</jdk-button>
<jdk-button type='success' size='medium' width='105' disabled>禁止按钮</jdk-button>
<jdk-button  size='medium' width='105' plain>朴素按钮</jdk-button>
```

#### 并排等宽按钮，一般用于同等重要的操作

<div class="component-wrapper">
    <jdk-button type='success' size='medium' width='164'>默认按钮</jdk-button>
    <jdk-button type='success' size='medium' width='164' disabled>禁止按钮</jdk-button>
    <jdk-button  size='medium' width='164' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='medium' width='164'>默认按钮</jdk-button>
<jdk-button type='success' size='medium' width='164' disabled>禁止按钮</jdk-button>
<jdk-button  size='medium' width='164' plain>朴素按钮</jdk-button>
```

#### 直播间底栏按钮、空页面单个按钮、弹窗单按钮

<div class="component-wrapper">
    <jdk-button type='success' size='medium' width='196' >默认按钮</jdk-button>
    <jdk-button type='success' size='medium' width='196' disabled>禁止按钮</jdk-button>
    <jdk-button size='medium' width='196' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='medium' width='196' >默认按钮</jdk-button>
<jdk-button type='success' size='medium' width='196' disabled>禁止按钮</jdk-button>
<jdk-button size='medium' width='196' plain>朴素按钮</jdk-button>
```

#### 直播间底栏按钮，配合按钮底栏使用

<div class="component-wrapper">
    <jdk-button type='success' size='medium' width='222' >默认按钮</jdk-button>
    <jdk-button type='success' size='medium' width='222' disabled>禁止按钮</jdk-button>
    <jdk-button size='medium' width='222' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='medium' width='222' >默认按钮</jdk-button>
<jdk-button type='success' size='medium' width='222' disabled>禁止按钮</jdk-button>
<jdk-button size='medium' width='222' plain>朴素按钮</jdk-button>
```

#### 屏幕底部固定大按钮，配合按钮底栏使用

<div class="component-wrapper">
    <jdk-button type='success' size='medium' width='343' >默认按钮</jdk-button>
    <jdk-button type='success' size='medium' width='343' disabled>禁止按钮</jdk-button>
    <jdk-button size='medium' width='343' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='medium' width='343' >默认按钮</jdk-button>
<jdk-button type='success' size='medium' width='343' disabled>禁止按钮</jdk-button>
<jdk-button size='medium' width='343' plain>朴素按钮</jdk-button>
```


#### 面底部大按钮，不悬浮，随内容垂直排布

<div class="component-wrapper">
    <jdk-button type='success' size='large' >默认按钮</jdk-button>
    <jdk-button type='success' size='large' disabled>禁止按钮</jdk-button>
    <jdk-button size='large' plain>朴素按钮</jdk-button>
</div>

``` vue
<jdk-button type='success' size='large' >默认按钮</jdk-button>
<jdk-button type='success' size='large' disabled>禁止按钮</jdk-button>
<jdk-button size='large' plain>朴素按钮</jdk-button>
```

#### 圆形按钮 注册页按钮、邀请函页面按钮

<div class="component-wrapper">
    <jdk-button type='success' circle >圆形</jdk-button>
    <jdk-button type='success' circle disabled>禁止</jdk-button>
</div>

``` vue
<jdk-button type='success' circle>圆形</jdk-button>
<jdk-button type='success' circle disabled>禁止</jdk-button>
```

#### 内链跳转 外链跳转

<div class="component-wrapper">
    <jdk-button type='success' size='large' :to="{ name: 'Setting', query: {}, params: { name: 1 } }">内链跳转</jdk-button>
		<jdk-button type='success' size='large' href="//www.baidu.com" target="_blank">外链按钮</jdk-button>
		<jdk-button disabled type='success'  size='large' :to="{ name: 'Setting', query: {}, params: { name: 1 } }">内链跳转</jdk-button>
		<jdk-button disabled type='success' size='large'  href="//www.baidu.com" target="_blank">外链按钮</jdk-button>
		<jdk-button  plain size='large' :to="{ name: 'Setting', query: {}, params: { name: 1 } }">内链跳转</jdk-button>
		<jdk-button  plain size='large'  href="//www.baidu.com" target="_blank">外链按钮</jdk-button>
</div>

``` vue
<jdk-button :to="{ name: 'Setting', query: {}, params: { name: 1 } }">内链跳转</jdk-button>
<jdk-button url="//www.baidu.com" target="_blank">外链按钮</jdk-button>
```

#### API
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|type | 按钮类别| 可选值：success / warn / danger | String| primary|
|size|按钮尺寸，可选值：large / medium / small|String|medium|
|width|按钮宽度，可选值：80 / 105 / 164 /196  /222 /343 |Number/ String|medium|
|href|link的href属性|String|-|
|disabled|按钮不生效|Boolean|false|
|plain|是否是朴素按钮|Boolean|false|
|circle|圆形按钮|Boolean|false|
|shadow|是否有阴影|Boolean|false(size=large自带有)|
|to|点击后跳转的目标路由对象，同 vue-router 的 to 属性|String, Object|null|

<script>
    import Vue from 'vue'
    import jdk from '@src'
    import '@/scss/docs.scss'
    Vue.use(jdk)

    export default {
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>
