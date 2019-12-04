import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const baseURL = '/api'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  // 参数序列化
  paramsSerializer: function(params) {
    return qs.stringify(params)
  }
})
axios.defaults.baseURL = '/api'
Vue.prototype.axios = axiosInstance
Vue.config.productionTip = false
Vue.prototype.qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
