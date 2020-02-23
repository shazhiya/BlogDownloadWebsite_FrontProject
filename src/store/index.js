import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: null,
    blogList:null,
    blogClassifyList:null,
    blogInfo:null,
    blogContent:null,
    userMngBlogList:null,
    userMngResourceList:null,
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
    },
    updateBlogInfo(state,info){
      state.blogInfo = info
    },
    updateBlogContent(state,info){
      state.blogContent = info
    },
    updateUserMngBlogList(state,info){
      state.userMngBlogList = info
    },
    updateUserMngResourceList(state,info){
      state.userMngResourceList = info
    },


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
    getBlogInfo:state => {return state.blogInfo},
    getBlogContent:state => {return state.blogContent},
    getUserMngBlogList:state => {return state.userMngBlogList},
    getUserMngResourceList:state => {return state.userMngResourceList},
  }
})
