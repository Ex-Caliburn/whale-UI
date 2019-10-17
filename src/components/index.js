import button from './button'
import imagePreviewer from './imagePreviewer'
import messageBox from './messageBox'
import toast from './toast'
let components = [button, imagePreviewer, messageBox, toast]
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

export { install, version, button, imagePreviewer, messageBox, toast};

