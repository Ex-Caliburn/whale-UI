import Toast from './toast.vue'

let index = {}

index.install = function(Vue) {
  // const VueToast = Vue.extend(Toast) //创建模板
  let toast = null

  // 3. 注入组件
  Vue.mixin({
    watch: {
      $route() {
        if (toast && toast.toast.closeOnHashChange) {
          toast && toast.close()
        }
      }
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$JdkToast = params => {
    const VueToast = Vue.extend(Toast) //创建模板
    toast = new VueToast().$mount() //使用的时候再去创建实例,多个实例
    document.body.appendChild(toast.$el) //挂载实例
    toast.show(params)
    // 返回当前的实例
    return toast
  }
}

export default index
