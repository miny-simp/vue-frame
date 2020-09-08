import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from './request/api'
import './plugins/element.js'
import less from 'less'

Vue.prototype.$api = api;
Vue.config.productionTip = false;

Vue.use(less)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
