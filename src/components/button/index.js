import button from './button.vue'

button.install = function (Vue, opt) {
  console.log(2, button)
  Vue.component(button.name, button)
}

export default button
