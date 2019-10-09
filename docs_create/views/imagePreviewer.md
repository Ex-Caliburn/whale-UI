### 图片预览 imagePreviewer

#### 基本用法

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='preview'>预览</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='preview'>预览</jdk-button>
```

``` vue
export default {
		data () {
				return {
				}
		},
		methods: {
			preview() {
				this.$JdkImagePreview({
								images: [
									'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
									'https://img.yzcdn.cn/2.jpg'
								],
								startIndex: 1,
								onClose() {
                    // do something
								}
							})
			}
		}
}
```




#### API
通过函数调用 $JdkImagePreview 时，支持传入以下选项：
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|images | 需要预览的图片 URL 数组 |  String[] | []|
|startIndex|图片预览起始位置索引	|number|0|
|onClose|关闭时的回调函数		|Function|-|

<script>
    import Vue from 'vue'
    import jdk from '@components'
		import '@/scss/docs.scss'
    Vue.use(jdk)

    export default {
        data () {
            return {
            }
        },
        methods: {
        	preview() {
						this.$JdkImagePreview({
										images: [
											'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
											'https://img.yzcdn.cn/2.jpg'
										],
										startIndex: 1
									})
        	}
        }
    }
</script>
