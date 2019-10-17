### 提示 toast

#### 提示框 基本用法

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='toast'>提示</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='toast'>提示</jdk-button>
```

``` vue
export default {
		data () {
				return {
				}
		},
		methods: {
			toast() {
				this.$JdkToast({ msg: '充值成功' })
			},
		}
}
```

#### 确认框 警告

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='toastError'>警告</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='toastError'>警告</jdk-button>
```

``` vue

export default {
		methods: {
			toastError () {
				this.$JdkToast({
					type: 'error',
					msg: '充值失败'
				})
			},
		}
}
```

#### 确认框 提示文字

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='toastTip'>提示文字</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='toastTip'>提示文字</jdk-button>
```

``` vue
export default {
		methods: {
			toastTip () {
				 this.$JdkToast({
					 msg: '充值成功',
					 tip: `当前充值点数100点`
				 })
			},
		}
}
```

#### 确认框 修改持续时间

<div class="component-wrapper">
    <jdk-button type='success' size='small' width='80' @click='toastDuration'>提示</jdk-button>
</div>

``` vue
<jdk-button type='success' size='small' width='80' @click='toastDuration'>提示文/jdk-button>
```

``` vue
export default {
		methods: {
			toastDuration () {
				 this.$JdkToast({
					 msg: '充值成功',
					 tip: `当前充值点数100点`,
					 duration: 20000
				 })
			},
		}
}
```


#### API
通过函数调用 $JdkToast 时，支持传入以下选项：
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|msg | 消息文字 |  String | ''|
|tip | 提示 |  String |  ''|
|type | 消息类型 可选值: error / success|  String |  'success'|
|duration | 持续时间,0则不会自动关闭 |  String/Number |  2000 |
|closeOnHashChange | 路由切换是否关闭 |  Boolean |  true |

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
        	toast() {
						this.$JdkToast({ msg: '充值成功' })
        	},
        	toastError () {
						this.$JdkToast({
							type: 'error',
							msg: '充值失败'
						})
        	},
        	toastTip () {
						 this.$JdkToast({
							 msg: '充值成功',
							 tip: `当前充值点数100点`,
						 })
        	},
        	toastDuration () {
						 this.$JdkToast({
							 msg: '充值成功',
							 tip: `当前充值点数100点`,
							 duration: 20000
						 })
        	}
        }
    }
</script>
