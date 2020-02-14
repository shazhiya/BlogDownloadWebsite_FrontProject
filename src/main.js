import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
// import vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

//import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faDonate,
} from '@fortawesome/free-solid-svg-icons';

import {
    faThumbsUp,faStar
} from '@fortawesome/free-regular-svg-icons';



Vue.use(ElementUI);
Vue.component('FAIcon', FontAwesomeIcon);
//Vue.use( CKEditor );

library.add(
    faDonate,faThumbsUp,faStar
);


const baseURL = '/blog'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    contentType : "application/x-www-form-urlencoded;charset=utf-8"
  },
    transformRequest:[function (data) {
        return qs.stringify(data)
    }]
})
axios.defaults.withCredentials=true;
axiosInstance.defaults.withCredentials = true
axios.defaults.baseURL = '/blog'
Vue.prototype.axios = axiosInstance
Vue.config.productionTip = false
Vue.prototype.qs = qs

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
