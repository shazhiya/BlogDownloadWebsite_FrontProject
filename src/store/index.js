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
    ResourceList:null,
    ResourceClassifyList:null,
    ResourceHotTagsList:null,
  },
  mutations: {
    updateIsLogin(state){
      sessionStorage.setItem("isLogin",true);
      state.isLogin = true
    },
    updateUser(state,info){
      sessionStorage.setItem('user',JSON.stringify(info))
      state.user = info
    },
    updateBlogList(state,info){
      sessionStorage.setItem('blogList',JSON.stringify(info))
      state.blogList = info
    },
    updateBlogClassifyList(state,info){
      sessionStorage.setItem('blogClassifyList',JSON.stringify(info))
      state.blogClassifyList = info
    },
    updateBlogInfo(state,info){
      sessionStorage.setItem('blogInfo',JSON.stringify(info))
      state.blogInfo = info
    },
    updateBlogContent(state,info){
      sessionStorage.setItem('blogContent',JSON.stringify(info))
      state.blogContent = info
    },
    updateUserMngBlogList(state,info){
      sessionStorage.setItem('userMngBlogList',JSON.stringify(info))
      state.userMngBlogList = info
    },
    updateUserMngResourceList(state,info){
      sessionStorage.setItem('userMngResourceList',JSON.stringify(info))
      state.userMngResourceList = info
    },
    updateResourceList(state,info){
      sessionStorage.setItem('ResourceList',JSON.stringify(info))
      state.ResourceList = info
    },
    updateResourceClassifyList(state,info){
      sessionStorage.setItem('ResourceClassifyList',JSON.stringify(info))
      state.ResourceClassifyList = info
    },
    updateResourceHotTagsList(state,info){
      sessionStorage.setItem('ResourceHotTagsList',JSON.stringify(info))
      state.ResourceHotTagsList = info
    }

  },
  actions: {
  },
  modules: {
  },
  getters:{
    getLoginState:state => {
      if(!state.isLogin){
        state.isLogin=sessionStorage.getItem('isLogin');
      }
      return state.isLogin
    },
    getUserInfo:state => {
      if(!state.user){
        state.user = sessionStorage.getItem('user');
      }
      return state.user
    },
    getBlogList:state => {
      if(!state.blogList){
        state.blogList = sessionStorage.getItem('blogList');
      }
      return state.blogList
    },
    getBlogClassifyList:state => {
      if(!state.blogClassifyList){
        state.blogClassifyList = sessionStorage.getItem('blogClassifyList');
      }
      return state.blogClassifyList
    },
    getBlogInfo:state => {
      if(!state.blogInfo){
        state.blogInfo = sessionStorage.getItem('blogInfo');
      }
      return state.blogInfo
    },
    getBlogContent:state => {
      if(!state.blogContent){
        state.blogContent = sessionStorage.getItem('blogContent');
      }
      return state.blogContent
    },
    getUserMngBlogList1:state => {
      if(!state.userMngBlogList){
        state.userMngBlogList = sessionStorage.getItem('userMngBlogList');
      }
      return state.userMngBlogList
    },
    getUserMngResourceList:state => {
      if(!state.userMngResourceList){
        state.userMngResourceList = sessionStorage.getItem('userMngResourceList');
      }
      return state.userMngResourceList
    },
    getResourceList:state => {
      if(!state.ResourceList){
        state.ResourceList = sessionStorage.getItem('ResourceList');
      }
      return state.ResourceList
    },
    getResourceClassifyList:state => {
      if(!state.ResourceClassifyList){
        state.ResourceClassifyList = sessionStorage.getItem('ResourceClassifyList');
      }
      return state.ResourceClassifyList
    },
    getResourceHotTagsList:state => {
      if(!state.ResourceHotTagsList){
        state.ResourceHotTagsList = sessionStorage.getItem('ResourceHotTagsList');
      }
      return state.ResourceHotTagsList
    },
  }
})
