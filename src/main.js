// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import SvgIcon from './components/SvgIcon'// svg component

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
