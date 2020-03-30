import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:"login_regist"
  },
  {
    path: '/article',
    name: 'article',
    component: ()=> import('../components/article.vue')
  },
  {
    path: '/bIndex',
    name: 'blogIndex',
    component: ()=> import('../views/BlogIndex/index.vue')
  },
  {
    path: '/login_regist',
    name: 'login_regist',
    component: ()=> import('../views/Login_Regist/index.vue')
  },
  {
    path:'/bhome',
    name: 'bloghome',
    component: ()=> import('../views/BlogHome/index')
  },
  {
    path:'/bcontent',
    name:'blogcontent',
    component: ()=> import('../views/BlogContent/index')
  },
  {
    path:'/bcoins',
    name:'blogcoins',
    component: ()=> import('../views/BlogCoins/index')
  },
  {
    path:'/bdownload',
    name:'blogdownload',
    component: ()=> import('../views/blogDownload/index')
  },
  {
    path:'/bWrite',
    name:'blogWrite',
    component: ()=> import('../views/WriteArticle/index')
  },
  {
    path:'/bmessage',
    name:'blogmessage',
    component: ()=> import('../views/BlogMessage/index')
  },
  {
    path:'/bupload',
    name:'blogupload',
    component: ()=> import('../views/BlogUpload/index')
  },
  {
    path:'/bMng',
    name:'blogMng',
    component: ()=> import('../views/BlogMng/index')
  },
  {
    path:'/admin',
    name:'admin',
    component: ()=> import('../views/AdminManager/index')
  },
  {
    path:'/adminlogin',
    name:'adminlogin',
    component: ()=> import('../views/LoginAdmin/index')
  },
  {
    path:'/resourceIndex',
    name:'resourceIndex',
    component: ()=> import('../views/ResourceIndex/index')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
