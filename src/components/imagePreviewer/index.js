import imagePreviewer from './imagePreviewer.vue'

let ImagePreviewer = {}

ImagePreviewer.install = function(Vue) {
  const template = Vue.extend(imagePreviewer) //创建模板
  let instance = null

  // 3. 注入组件
  Vue.mixin({
    watch: {
      $route() {
        instance && instance.close()
      }
    }
  })

  Vue.prototype.$JdkImagePreview = params => {
    if (!instance) {
      instance = new template().$mount() //创建实例
      document.body.appendChild(instance.$el) //挂载实例
    }
    instance.show(params)
  }
}

export default ImagePreviewer
