import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: null,
    blogList:null,
    blogClassifyList:null
  },
  mutations: {
    updateIsLogin(state){
      state.isLogin = true
    },
    updateUser(state,info){
      state.user = info
    },
    updateBlogList(state,info){
      state.blogList = info
    },
    updateBlogClassifyList(state,info){
      state.blogClassifyList = info
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getLoginState:state => {return state.isLogin},
    getUserInfo:state => {return state.user},
    getBlogList:state => {return state.blogList},
    getBlogClassifyList:state => {return state.blogClassifyList},
  }
})
