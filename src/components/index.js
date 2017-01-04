import VueFlatpickr from './vue-flatpickr.vue'

const install = function (Vue) {
  Vue.component('Flatpickr', VueFlatpickr)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(VueFlatpickr, { install })
