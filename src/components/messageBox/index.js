import messageBox from './messageBox.vue'

function defaultCallBack(action) {
  if (!action) currentMsg.reject()
  currentMsg.resolve()
}

let Index = {}
let currentMsg = null

Index.install = function(Vue) {
  const VueMsgBox = Vue.extend(messageBox) //创建模板
  let msgBox = null
  VueMsgBox.prototype.callBack = defaultCallBack

  // 3. 注入组件
  Vue.mixin({
    watch: {
      $route() {
        msgBox && msgBox.close()
      }
    }
  })

  Vue.prototype.$JdkAlert = params => {
    if (!msgBox) {
      msgBox = new VueMsgBox().$mount() //创建实例
      document.body.appendChild(msgBox.$el) //挂载实例
    }
    msgBox.alert(params)

    return new Promise((resolve, reject) => {
      currentMsg = { resolve, reject }
    })
  }

  Vue.prototype.$JdkConfirm = params => {
    if (!msgBox) {
      msgBox = new VueMsgBox().$mount() //创建实例
      document.body.appendChild(msgBox.$el) //挂载实例
    }
    msgBox.confirm(params)

    return new Promise((resolve, reject) => {
      currentMsg = { resolve, reject }
    })
  }
}

export default Index
