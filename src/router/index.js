import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect:"login_regist",
    meta:{
      name: '登录注册'
    },
  },
  {
    path: '/article',
    name: 'article',
    meta:{
      name: '博文'
    },
    component: ()=> import('../components/article.vue')
  },
  {
    path: '/bIndex',
    name: 'blogIndex',
    meta:{
      name: '博文站主页'
    },
    component: ()=> import('../views/BlogIndex/index.vue')
  },
  {
    path: '/login_regist',
    name: 'login_regist',
    meta:{
      name: '登录注册'
    },
    component: ()=> import('../views/Login_Regist/index.vue')
  },
  {
    path:'/bhome',
    name: 'bloghome',
    meta:{
      name: '博客个人页面'
    },
    component: ()=> import('../views/BlogHome/index')
  },
  {
    path:'/bcontent',
    name:'bcontent',
    meta:{
      name: '博文页面'
    },
    component: ()=> import('../views/BlogContent/index')
  },
  {
    path:'/bcoins',
    name:'blogcoins',
    meta:{
      name: '硬币明细页面'
    },
    component: ()=> import('../views/BlogCoins/index')
  },
  {
    path:'/bdownload',
    name:'blogdownload',
    meta:{
      name: '资源下载页面'
    },
    component: ()=> import('../views/blogDownload/index')
  },
  {
    path:'/bWrite',
    name:'blogWrite',
    meta:{
      name: '发布博文页面'
    },
    component: ()=> import('../views/WriteArticle/index')
  },
  {
    path:'/bmessage',
    name:'blogmessage',
    meta:{
      name: '消息页面'
    },
    component: ()=> import('../views/BlogMessage/index')
  },
  {
    path:'/bupload',
    name:'blogupload',
    meta:{
      name: '资源上传页面'
    },
    component: ()=> import('../views/BlogUpload/index')
  },
  {
    path:'/bMng',
    name:'blogMng',
    menu: true,
    meta:{
      name: '用户后台管理',
      icon: 'el-icon-s-home',
    },
    component: ()=> import('../views/BlogMng/index'),
    children:[
      {
        path:"/bConsole",
        name:"bConsole",
        meta:{
          name: '博客管理',
          icon: 'el-icon-arrow-right',
        },
        component:()=>import("../components/BlogMng/BlogConsole/blogConsole")
      },
      {
        path:"/rConsole",
        name:"rConsole",
        meta:{
          name: '资源管理',
          icon: 'el-icon-arrow-right',
        },
        component:()=>import("../components/BlogMng/ResourceConsole/ResourceConsole")
      },
      {
        path:"/uDataIndex",
        name:"uDataIndex",
        meta:{
          name: '数据总览',
          icon: 'el-icon-arrow-right',
        },
        component:()=>import("../components/BlogMng/DataAnalysis/DataAnalysis")
      },
      {
        path:"/uDataBlog",
        name:"uDataBlog",
        meta:{
          name: '博客数据',
          icon: 'el-icon-arrow-right',
        },
        component:()=>import("../components/BlogMng/ResourceConsole/ResourceConsole")
      },
      {
        path:"/uDataResource",
        name:"uDataResource",
        meta:{
          name: '资源数据',
          icon: 'el-icon-arrow-right',
        },
        component:()=>import("../components/BlogMng/ResourceConsole/ResourceConsole")
      },
    ]
  },
  // {
  //   path:"/uData",
  //   name:"uData",
  //   menu:true,
  //   meta:{
  //     name: '数据分析',
  //     icon: 'el-icon-s-data',
  //   },
  //   component:()=>import("../components/BlogMng/DataAnalysis/DataAnalysis"),
  //   children:[
  //
  //   ],
  //
  // },
  {
    path:'/aMng',
    name:'aMng',
    meta:{
      name: '管理员'
    },
    component: ()=> import('../views/AdminManager/index')
  },
  {
    path:'/alogin',
    name:'alogin',
    meta:{
      name: '管理员登录'
    },
    component: ()=> import('../views/LoginAdmin/index')
  },
  {
    path:'/resourceIndex',
    name:'resourceIndex',
    meta:{
      name: '资源站主页'
    },
    component: ()=> import('../views/ResourceIndex/index')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
