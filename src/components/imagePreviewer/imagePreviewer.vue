<template>
  <div v-show="isShow" class="image-previewer">
    <i @click="close" class="iconfont iconcomm_icn_close"></i>

    <div
      v-if="imagePreview.images.length > 1"
      class="image-previewer__next    flex-center"
      @click="turn('prev')"
    >
      <i class="iconfont iconcomm_icn_right_arrows"></i>
    </div>

    <div
      v-if="imagePreview.images.length > 1"
      class="image-previewer__prev flex-center"
      @click="turn('next')"
    >
      <i class="iconfont iconcomm_icn_right_arrows rotate-180"></i>
    </div>

    <div class="image-previewer__wrapper">
      <img
        @mousedown="imageMouseStart"
        @mousemove="imageMouseMove"
        @mouseup="imageMouseEnd"
        ref="image"
        draggable="false"
        class="image-previewer__view"
        v-if="imagePreview.images[imagePreview.index]"
        :src="imagePreview.images[imagePreview.index]"
      />
    </div>

    <div class="image-previewer__operation flexh flex-around">
      <i class="iconfont iconcomm_icn_reduce_disabled" @click="reduce"></i>
      <i class="iconfont iconcomm_icn_reduce_normal" @click="amplify"></i>
      <i class="iconfont iconcomm_icn_retake" @click="revert"></i>
      <i class="iconfont iconcomm_icn_refresh rotate-180" @click="rotateLeft"></i>
      <i class="iconfont iconcomm_icn_refresh" @click="rotateRight"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-previewer',
  props: {
    images: {
      type: Array,
      default: () => []
    },
    startIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isShow: false,
      mouseFlag: false,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      imagePreview: {
        index: 0, // 当前下标
        images: [],
        onClose: null, // 关闭回调
        rotateDegree: 0, // 旋转角度
        scaleNum: 1 // 缩放大倍数
      }
    }
  },
  mounted() {
    if (this.images.length) {
      this.show({
        images: this.images,
        index: this.startIndex
      })
    }
  },
  computed: {},
  methods: {
    show(params) {
      if (params instanceof Array) {
        params = {
          images: params
        }
      }
      params.index = params.startIndex || 0
      this.imagePreview = Object.assign(
        this.imagePreview,
        {
          index: 0,
          rotateDegree: 0,
          scaleNum: 1,
          images: [],
          onClose: null
        },
        params
      )
      document.addEventListener('mouseup', this.imageMouseEnd, false)
      document.addEventListener('mousemove', this.imageMouseMove, false)
      document.addEventListener('DOMMouseScroll', this.mouseScroll, false)
      window.onmousewheel = document.onmousewheel = this.mouseScroll
      document.body.style.overflow = 'hidden'
      this.isShow = true
    },
    close() {
      document.body.style.overflow = ''
      this.$refs.image.style.transform = ''
      window.onmousewheel = document.onmousewheel = null
      document.removeEventListener('DOMMouseScroll', this.mouseScroll, false)
      document.removeEventListener('mousemove', this.imageMouseMove, false)
      this.isShow = false
      this.imagePreview.onClose && this.imagePreview.onClose(this.imagePreview.index)
      this.$emit('close')
    },
    turn(direct) {
      this.$refs.image.style.transition = ''
      this.$refs.image.style.transform = ''
      if (direct === 'prev') {
        this.imagePreview.index--
        if (this.imagePreview.index <= -1) {
          this.imagePreview.index = this.imagePreview.images.length - 1
        }
      } else {
        this.imagePreview.index++
        if (this.imagePreview.index >= this.imagePreview.images.length) {
          this.imagePreview.index = 1
        }
      }
      this.$nextTick(() => {
        this.$refs.image.style.transition = 'transform 0.3s linear'
      })
      this.$emit('change', this.imagePreview.index)
    },
    reduce() {
      if (this.imagePreview.scaleNum < 0.4) return
      this.imagePreview.scaleNum = this.imagePreview.scaleNum - 0.2
      this.changeTransform()
    },
    amplify() {
      if (this.imagePreview.scaleNum >= 5) return
      this.imagePreview.scaleNum = this.imagePreview.scaleNum + 0.2
      this.changeTransform()
    },
    rotateRight() {
      this.imagePreview.rotateDegree = this.imagePreview.rotateDegree + 90
      this.changeTransform()
    },
    rotateLeft() {
      this.imagePreview.rotateDegree = this.imagePreview.rotateDegree - 90
      this.changeTransform()
    },
    changeTransform() {
      this.$refs.image.style.transform = `translate3d(${this.offsetX}px, ${
        this.offsetY
      }px, 0) scale(${this.imagePreview.scaleNum}) rotate(${
        this.imagePreview.rotateDegree
      }deg)`
    },
    revert() {
      this.$refs.image.style.transform = ''
    },
    imageMouseStart(e) {
      this.mouseFlag = true
      this.startX = e.screenX
      this.startY = e.screenY
    },
    imageMouseMove(e) {
      if (this.mouseFlag === true) {
        this.offsetX = e.screenX - this.startX
        this.offsetY = e.screenY - this.startY
        this.$refs.image.style.transition = 'transform 0.1s linear'
        this.changeTransform()
      }
    },
    imageMouseEnd() {
      if (this.mouseFlag === true) {
        this.mouseFlag = false
      }
    },
    mouseScroll(e) {
      let delta
      // IE、chrome监听的是wheelDelta,向下滚动其值为-120；向上滚动其值为120
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120
        //火狐浏览器监听的是detail,向下滚动其值为3；向上滚动其值为-3
      } else if (e.detail) {
        delta = -e.detail / 3 //取负数，以保证符号相同
      }
      if (delta > 0) {
        //向上
        this.amplify()
      } else {
        //向下
        this.reduce()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
	@import '../../assets/styles/index.scss';
	@import '../../assets/styles/mixin.scss';

.image-previewer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100010;
  background-color: rgba(0, 0, 0, 1);
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  &__view {
    /*width: 100%;*/
    transform-origin: center;
    transition: transform 0.3s linear;
    max-height: 100%;
    max-width: 100%;
    font-size: 0;
  }

  &__prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    @include vc();
    z-index: 1;
    left: 5%;
    background-color: rgba(238, 238, 238, 0.3);
  }
  &__next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    @include vc();
    right: 5%;
    z-index: 1;
    background-color: rgba(238, 238, 238, 0.3);
  }

  &__operation {
    padding: 5px 10px;
    border-radius: 8px;
    @include hc();
    bottom: 10%;
    z-index: 1;
    background-color: rgba(238, 238, 238, 0.3);
    .iconfont {
      margin: 0 10px;
    }
  }

  .rotate-180 {
    transform: rotateY(180deg);
    transform-origin: center;
  }
  .iconfont {
    font-size: 24px;
    color: #fff;
    &.iconcomm_icn_close {
      position: fixed;
      font-size: 40px;
      top: 10px;
      right: 10px;
      color: #fff;
      z-index: 100010;
    }
  }
}
</style>
