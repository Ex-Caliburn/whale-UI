<template>
  <div
    v-show="isShow && toast.msg"
    class="jdk-toast flexh flex-vcenter"
    :class="{ 'jdk-toast--error': toast.type === 'error' }"
  >
    <span class="iconfont" :class="toast.iconClass || iconArr[toast.type]"></span>
    <div class=" flexv jdk-toast__content">
      <span class=" jdk-toast__message">{{ toast.msg }}</span>
      <span v-show="toast.tip" class="jdk-toast__tip">{{ toast.tip }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'jdk-toast',
  data() {
    return {
      isShow: false,
      toast: {
        duration: 3000, // 显示时间, 毫秒。设为 0 则不会自动关闭
        msg: '', // 消息文字
        iconClass: '', // string 自定义图标的类名，会覆盖 type
        tip: '', // 提示
        type: 'success', // string	success/error
        closeOnHashChange: true // 是否在 hashchange 时关闭
      },
      iconArr: {
        success: 'iconicon_success_white',
        error: 'iconicon_fail_black'
      }
    }
  },
  methods: {
    show(params) {
      //初始化参数
      this.isShow = true
      this.toast = Object.assign(
        this.toast,
        { duration: 3000, closeOnHashChange: true, type: 'success', iconClass: '' },
        params
      )
      // 显示时间, 毫秒。设为 0 则不会自动关闭
      if (this.toast.duration) {
        setTimeout(() => {
          this.isShow = false
        }, this.toast.duration)
      }
    },
    close() {
      this.isShow = false
    }
  },
}
</script>

<style scoped lang="scss">
	@import '../../assets/styles/index.scss';

	.jdk-toast {
  position: fixed;
  top: 16px;
  left: 50%;
  width: 359px;
  height: 60px;
  max-width: 504px;
  transform: translateX(-50%);
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 8px;
  z-index: 100;
  background: linear-gradient(45deg, #27cc82, #85e78a);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  .iconfont {
    &.iconicon_success_white,
    &.iconicon_fail_black {
      font-size: 32px;
      color: #fff !important;
    }
  }
  &__content {
		margin-left: 12px;
    color: white;
  }
  &__message {
    font-size: 14px;
  }
  &__tip {
    font-size: 12px;
  }
  &--error {
    background: linear-gradient(45deg, #ff4e5d, #ff9561);
    box-shadow: 0px 4px 12px 0px rgba(255, 86, 86, 0.2);
  }
}
</style>
