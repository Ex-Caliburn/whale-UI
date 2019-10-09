<template>
	<component
		:is="tag"
		class="jdk-button"
		:class="[
      {
        'jdk-button--disabled': disabled,
        'jdk-button--shadow': shadow,
        'jdk-button--plain': plain,
        'jdk-button--circle': circle
      },
      size ? 'jdk-button--' + size : '',
      type ? 'jdk-button--' + type : '',
      width ? 'jdk-button--' + width : ''
    ]"
		:href="href"
		:to="to"
		@click="handleClick"
	>
		<slot></slot>
	</component>
</template>

<script>
  export default {
    name: 'jdk-button',
    props: {
      type: {
        type: String,
        default: 'primary' // success primary 后续info warning danger
      },
      size: {
        type: String,
        default: 'medium' // large medium small
      },
      width: {
        type: [String, Number],
        default: '' // 按钮尺寸如果有
      },
      plain: {
        type: Boolean,
        default: false // 是否是朴素按钮
      },
      disabled: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      },
      shadow: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: ''
      },
      to: {
        // 点击后跳转的目标路由对象，同 vue-router 的 to 属性
        type: [String, Object],
        default: null
      }
    },
    data() {
      return {}
    },

    computed: {
      tag() {
        if (this.to) {
          return 'router-link'
        } else if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      }
    },
    mounted() {},
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>

<style scoped lang="scss">
	.margin-center {
		margin-right: auto;
		margin-left: auto;
	}
	.jdk-button {
		cursor: pointer;
		/*max-width: 540Px;*/
		color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		transition: background 0.2s;
		border: none;
		outline: none;

		&--success {
			color: #fff;
			border-radius: 22px;
			background: linear-gradient(45deg, #ff9561, #ff4e5d);

			&:active {
				background: linear-gradient(45deg, #f37d51, #f3414d);
			}

			&.jdk-button--disabled {
				pointer-events: none;
				background: linear-gradient(45deg, #ffdbc8, #ffc2c7) !important;
			}

			&.large-free.jdk-button--disabled {
				box-shadow: 0px 4px 12px 0px rgba(255, 94, 77, 0.07);
			}
		}

		&--plain {
			color: #333333;
			background-color: rgba(247, 247, 247, 1);
			box-shadow: none;

			&:active {
				background-color: rgba(239, 239, 239, 1);
			}

			&.jdk-button--disabled {
				pointer-events: none;
				color: #b8b8b8;
				background-color: rgba(252, 252, 252, 1) !important;
			}
		}

		&--shadow {
			box-shadow: 0px 4px 12px 0px rgba(255, 94, 77, 0.2);
		}

		/*不同尺寸宽度*/
		&--80 {
			width: 80px;
		}

		&--105 {
			width: 105px;
		}

		&--164 {
			width: 164px;
		}

		&--196 {
			width: 196px;
		}

		&--222 {
			width: 222px;
		}

		&--343 {
			@extend .margin-center;
			width: 343px;
		}

		/* 三种高度尺寸 */
		&--large {
			height: 44px;
			border-radius: 22px;
			font-size: 17px;
			@extend .jdk-button--343;
			@extend .jdk-button--shadow;
		}

		&--medium {
			height: 40px;
			border-radius: 20px;
			font-size: 16px;
		}

		&--small {
			@extend .jdk-button--80;
			height: 28px;
			border-radius: 14px;
			font-size: 13px;
		}

		/*注册页按钮、邀请函页面按钮*/
		&--circle {
			@extend .margin-center;
			@extend .jdk-button--80;
			@extend .jdk-button--shadow;
			height: 80px;
			color: #fff;
			font-size: 17px;
			border-radius: 50%;
			background: linear-gradient(45deg, #ff9561, #ff4e5d);
		}
	}
</style>
