import button from './button'
let components = [button]
var version = '0.1.4';
function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component)
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
}

export { install, version, button};

