<template>
  <div v-show="isShow" class="jdk-message-box mask">
    <div class="mask" @click="toClose"></div>
		<div class="message-box__main" :style="{width: msgBox.width + 'px'}">
      <div v-if="msgBox.title" class="message-box___title">{{ msgBox.title }}</div>
      <div class="message-box___content" v-html="msgBox.msg"></div>
      <div class="flexh flex-around">
        <JdkButton
          type="success"
          v-if="!msgBox.confirmButtonMode"
          @click="ensure"
          :width="buttonWidth"
          :class="msgBox.confirmButtonClass"
          >{{ msgBox.confirmButtonText }}</JdkButton
        >

        <JdkButton
          type="success"
          v-if="msgBox.copyTxt && msgBox.confirmButtonMode === 'copy'"
          :width="buttonWidth"
          v-clipboard:copy="msgBox.copyTxt"
          @success="ensure"
          @error="cancel"
          :class="msgBox.confirmButtonClass"
          >{{ msgBox.confirmButtonText }}</JdkButton
        >

        <JdkButton
          plain
          v-if="msgBox.showCancelButton"
          @click="cancel"
          :width="buttonWidth"
          :class="msgBox.cancelButtonClass"
          >{{ msgBox.cancelButtonText }}</JdkButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import JdkButton from '../button/button.vue'
import Vue from 'vue'
// 复制到剪切板
import VueClipBoards from 'vue-clipboards'
Vue.use(VueClipBoards);

export default {
  name: 'jdk-message-box',
  components: {
    JdkButton
  },
  data() {
    return {
      isShow: false,
      msgBox: {
        msg: '', // 消息文字
        iconClass: '', //  自定义图标的类名，会覆盖 type
        width: '', // 弹窗宽度
        title: '', // 提示
        type: '', // 	success / info / warning / error
        closeOnHashChange: true, // 是否在 hashchange 时关闭
        showCancelButton: true,
        closeOnClickModal: false,
        confirmButtonText: '确定',
        confirmButtonMode: '', // 'copy'可以复制
        copyTxt: '',
        confirmButtonClass: '',
        cancelButtonText: '取消',
        cancelButtonClass: ''
      }
    }
  },
  computed: {
    buttonWidth() {
      return this.msgBox.type === 'alert' ? 196 : 105
    }
  },
  methods: {
    alert(option) {
      this.show({
        ...option,
        type: 'alert',
        showCancelButton: false
      })
    },
    confirm(option) {
      this.show({
        ...option,
        type: 'confirm'
      })
    },
    ensure() {
      this.isShow = false
      this.callBack(true)
    },
    cancel() {
      this.isShow = false
      this.callBack(false)
    },
    toClose() {
      if (this.msgBox.closeOnClickModal) {
        this.close()
      }
    },
    close() {
      this.isShow = false
      this.callBack(false)
    },
    show(params) {
      //初始化参数
      this.isShow = true
      this.msgBox = Object.assign(
        this.msgBox,
        {
          closeOnHashChange: true,
          closeOnClickModal: false,
          title: '',
          width: '',
          showCancelButton: true,
          confirmButtonClass: '',
          cancelButtonClass: '',
          confirmButtonMode: '',
          copyTxt: ''
        },
        params
      )
    }
  }
}
</script>

<style scoped lang="scss">
	@import '../../assets/styles/index.scss';
	@import '../../assets/styles/mixin.scss';

.jdk-message-box {
  .message-box__main {
    @include center();
    padding: 0 20px 20px;
    box-sizing: border-box;
    font-size: 16px;
    color: #000;
    box-sizing: border-box;
    width: 260px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 12px 0px rgba(68, 68, 68, 0.4);
    z-index: 10001;
  }
  .message-box___title {
    margin-top: 10px;
    text-align: center;
  }
  .message-box___content {
    line-height: 1.5;
    margin: 37px 0 37px;
    text-align: center;
  }
}
</style>
