// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'

import Home from './components/Home'
import History from './components/History'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{path: '/', component: Home},
		{path: '/history', component: History}
	]
})

new Vue({
  el: '#app',
  store,
  router,
  render: h=> h(App)
})
