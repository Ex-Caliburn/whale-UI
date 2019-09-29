import button from './components/button'
let components = [button]

function install(Vue, opts = {}) {
  Object.values(components).forEach((each) => {
    console.log(each.name, each)
    Vue.component(each.name, each)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  ...components
}
