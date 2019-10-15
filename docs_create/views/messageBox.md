### 图片预览 imagePreviewer

#### 提示框

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='warn'>提示</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='warn'>提示</jdk-button>
```

``` vue
export default {
		data () {
				return {
				}
		},
		methods: {
			warn() {
				this.$JdkAlert({
							confirmButtonText: '我知道了',
							msg: `直播已经结束，你还有20秒的时间跟学员进行进一步的互动。`
						}).catch(err => {
							console.log(err)
						})
			}
		}
}
```

#### 确认框

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='confirm'>确认</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='confirm'>确认</jdk-button>
```

``` vue

export default {
		data () {
				return {
					weChat: 'Mr_Bigshoot'
				}
		},
		methods: {
			confirm() {
				this.$JdkConfirm({
						confirmButtonText: '好的',
						cancelButtonText: '稍后再说',
						msg: `可添加微信：${this.weChat}，向我们咨询课程信息。`
					})
						.then(() => {
							console.log('好的')
						})
						.catch(err => {
							console.log(err)
						})
			}
		}
}
```

#### 确认框 带复制功能

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='copyConfirm'>确认</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='copyConfirm'>确认</jdk-button>
```

``` vue
// 复制到剪切板
import Vue from 'vue'
import VueClipBoards from 'vue-clipboards'
Vue.use(VueClipBoards);

export default {
		data () {
				return {
					weChat: 'Mr_Bigshoot'
				}
		},
		methods: {
			copyConfirm() {
				this.$JdkConfirm({
						confirmButtonText: '复制微信号',
						cancelButtonText: '稍后再说',
						confirmButtonMode: 'copy',
						copyTxt: this.weChat,
						msg: `可添加微信：${this.weChat}，向我们咨询课程信息。`
					})
						.then(() => {
							console.log('复制成功')
						})
						.catch(err => {
							console.log(err)
						})
			}
		}
}
```


#### API
通过函数调用 $JdkAlert, $JdkConfirm 时，支持传入以下选项：
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|msg | 消息文字 |  String | ''|
|title | 标题 |  String |  ''|
|type | 消息文字 可选值: alert / confirm|  String |  ''|
|width | 弹窗宽度 |  String/Number |  260px |
|confirmButtonText | 确定按钮文本  |  String | 确定|
|cancelButtonText|  取消按钮文本 	| String |取消|
|confirmButtonMode| 模式选择， 可选值: mode(复制模式)/ ''		|String|-|
|copyTxt|  复制文本 	|String|-|
|confirmButtonClass| 确定按钮样式 	|String|-|
|cancelButtonClass| 取消按钮样式'		|String|-|

<script>
    import Vue from 'vue'
    import jdk from '@components'
		import '@/scss/docs.scss'
    Vue.use(jdk)

    export default {
        data () {
            return {
            weChat: 'Mr_Bigshoot'
            }
        },
        methods: {
        	warn() {
						this.$JdkAlert({
								confirmButtonText: '我知道了',
								title: '提示',
								width: '300',
								msg: `直播已经结束，你还有20秒的时间跟学员进行进一步的互动。`
							}).catch(err => {
								console.log(err)
							})
        	},
        	confirm () {
						 this.$JdkConfirm({
                    confirmButtonText: '好的',
                    cancelButtonText: '稍后再说',
                    msg: `可添加微信：${this.weChat}，向我们咨询课程信息。`
                  })
                    .then(() => {
                      console.log('好的')
                    })
                    .catch(err => {
                      console.log(err)
                    })
        	},
        	copyConfirm () {
						 this.$JdkConfirm({
                    confirmButtonText: '复制微信号',
                    cancelButtonText: '稍后再说',
                    confirmButtonMode: 'copy',
                    copyTxt: this.weChat,
                    msg: `可添加微信：${this.weChat}，向我们咨询课程信息。`
                  })
                    .then(() => {
                      console.log('复制成功')
                    })
                    .catch(err => {
                      console.log(err)
                    })
        	}
        }
    }
</script>
