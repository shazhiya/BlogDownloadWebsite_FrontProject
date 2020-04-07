import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: null,
        blogList: null,
        blogClassifyList: null,
        blogInfo: null,
        blogContent: null,
        userMngBlogList: null,
        userMngResourceList: null,
        ResourceList: null,
        ResourceClassifyList: null,
        ResourceHotTagsList: null,
        ResourceDetail: null,
    },
    mutations: {
        updateIsLogin(state) {
            sessionStorage.setItem("isLogin", true);
            state.isLogin = true
        },
        updateUser(state, info) {
            sessionStorage.setItem('user', JSON.stringify(info))
            state.user = info
        },
        updateBlogList(state, info) {
            sessionStorage.setItem('blogList', JSON.stringify(info))
            state.blogList = info
        },
        updateBlogClassifyList(state, info) {
            sessionStorage.setItem('blogClassifyList', JSON.stringify(info))
            state.blogClassifyList = info
        },
        updateBlogInfo(state, info) {
            sessionStorage.setItem('blogInfo', JSON.stringify(info))
            state.blogInfo = info
        },
        updateBlogContent(state, info) {
            sessionStorage.setItem('blogContent', JSON.stringify(info))
            state.blogContent = info
        },
        updateUserMngBlogList(state, info) {
            sessionStorage.setItem('userMngBlogList', JSON.stringify(info))
            state.userMngBlogList = info
        },
        updateUserMngResourceList(state, info) {
            sessionStorage.setItem('userMngResourceList', JSON.stringify(info))
            state.userMngResourceList = info
        },
        updateResourceList(state, info) {
            sessionStorage.setItem('ResourceList', JSON.stringify(info))
            state.ResourceList = info
        },
        updateResourceClassifyList(state, info) {
            sessionStorage.setItem('ResourceClassifyList', JSON.stringify(info))
            state.ResourceClassifyList = info
        },
        updateResourceHotTagsList(state, info) {
            sessionStorage.setItem('ResourceHotTagsList', JSON.stringify(info))
            state.ResourceHotTagsList = info
        },
        updateResourceDetail(state,info){
            sessionStorage.setItem('ResourceDetail', JSON.stringify(info))
            state.ResourceDetail = info
        },


    },
    actions: {},
    modules: {},
    getters: {
        getLoginState: state => {
            if (!state.isLogin) {
                state.isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
            }
            return state.isLogin
        },
        getUserInfo: state => {
            if (!state.user) {
                state.user = JSON.parse(sessionStorage.getItem('user'));
            }
            return state.user
        },
        getBlogList: state => {
            if (!state.blogList) {
                state.blogList = JSON.parse(sessionStorage.getItem('blogList'));
            }
            return state.blogList
        },
        getBlogClassifyList: state => {
            if (!state.blogClassifyList) {
                state.blogClassifyList = JSON.parse(sessionStorage.getItem('blogClassifyList'));
            }
            return state.blogClassifyList
        },
        getBlogInfo: state => {
            if (!state.blogInfo) {
                state.blogInfo = JSON.parse(sessionStorage.getItem('blogInfo'));
            }
            return state.blogInfo
        },
        getBlogContent: state => {
            if (!state.blogContent) {
                state.blogContent = JSON.parse(sessionStorage.getItem('blogContent'));
            }
            return state.blogContent
        },
        getUserMngBlogList: state => {
            if (!state.userMngBlogList) {
                state.userMngBlogList = JSON.parse(sessionStorage.getItem('userMngBlogList'));
            }
            return state.userMngBlogList
        },
        getUserMngResourceList: state => {
            if (!state.userMngResourceList) {
                state.userMngResourceList = JSON.parse(sessionStorage.getItem('userMngResourceList'));
            }
            return state.userMngResourceList
        },
        getResourceList: state => {
            if (!state.ResourceList) {
                state.ResourceList = JSON.parse(sessionStorage.getItem('ResourceList'));
            }
            return state.ResourceList
        },
        getResourceClassifyList: state => {
            if (!state.ResourceClassifyList) {
                state.ResourceClassifyList = JSON.parse(sessionStorage.getItem('ResourceClassifyList'));
            }
            return state.ResourceClassifyList
        },
        getResourceHotTagsList: state => {
            if (!state.ResourceHotTagsList) {
                state.ResourceHotTagsList = JSON.parse(sessionStorage.getItem('ResourceHotTagsList'));
            }
            return state.ResourceHotTagsList
        },
        getResourceDetail: state => {
            if (!state.ResourceDetail) {
                state.ResourceDetail = JSON.parse(sessionStorage.getItem('ResourceDetail'));
            }
            return state.ResourceDetail
        }
    }
})
