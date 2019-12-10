import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:"login"
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
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login/index.vue')
  },
  {
    path: '/blogIndex',
    name: 'blogIndex',
    component: ()=> import('../views/BlogIndex/index.vue')
  },
    {
        path: '/regist',
        name: 'regist',
        component: ()=> import('../views/Regist/index.vue')
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
