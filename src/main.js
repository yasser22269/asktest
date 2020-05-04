import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'



Vue.use(VueRouter);
const router = new VueRouter({
  mode:"history",
  routes: routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
