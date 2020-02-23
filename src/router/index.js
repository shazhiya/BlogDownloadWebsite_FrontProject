import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:"login_regist"
  },
  {
    path: '/sign_up',
    name: 'signup',
    component: () => import(/**/'../views/SignUp.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: ()=> import('../components/article.vue')
  },
  {
    path: '/blogIndex',
    name: 'blogIndex',
    component: ()=> import('../views/BlogIndex/index.vue')
  },
  {
    path: '/login_regist',
    name: 'login_regist',
    component: ()=> import('../views/Login_Regist/index.vue')
  },
  {
    path:'/bloghome',
    name: 'bloghome',
    component: ()=> import('../views/BlogHome/index')
  },
  {
    path:'/blogcontent',
    name:'blogcontent',
    component: ()=> import('../views/BlogContent/index')
  },
  {
    path:'/blogcoins',
    name:'blogcoins',
    component: ()=> import('../views/BlogCoins/index')
  },
  {
    path:'/blogdownload',
    name:'blogdownload',
    component: ()=> import('../views/blogDownload/index')
  },
  {
    path:'/blogWrite',
    name:'blogWrite',
    component: ()=> import('../views/WriteArticle/index')
  },
  {
    path:'/blogMng',
    name:'blogMng',
    component: ()=> import('../views/BlogMng/index')
  }
]

const router = new VueRouter({
  routes,
  //mode: 'history'
})

export default router
