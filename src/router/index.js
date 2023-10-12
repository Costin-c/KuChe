import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/detail/:gzdtId',
    name: 'homeDetail',
    component: () => import('../views/HomeDetail.vue')
  },
  {
    path: '/dwxc',
    name: 'dwxc',
    component: () => import('../views/党务宣传/DwxcView.vue')
  },
  {
    path: '/dwxc/detail/:dwxcId',
    name: 'dwDetail',
    component: () => import('../views/党务宣传/DwDetail.vue')
  },
  {
    path: '/dwxc/jsxc',
    name: 'jsxc',
    component: () => import('../views/党务宣传/JsxcView.vue')
  },
  {
    path: '/dwxc/hdzs',
    name: 'hdzs',
    component: () => import('../views/党务宣传/HdzsView.vue')
  },
  {
    path: '/dyxx',
    name: 'dyxx',
    component: () => import('../views/党员学习/LearnView.vue')
  }, 
  {
    path: '/dyxx/detail/:dyxxId',
    name: 'detail',
    component: () => import('../views/党员学习/DetailView.vue')
  }, 
  {
    path: '/dyxx/szxx',
    name: 'szxx',
    component: () => import('../views/党员学习/SzxxView.vue')
  }, 
  {
    path: '/dyxx/dsxx',
    name: 'dsxx',
    component: () => import('../views/党员学习/DsxxView.vue')
  }, 
  {
    path: '/dyxx/dwzs',
    name: 'dwzx',
    component: () => import('../views/党员学习/DwzsView.vue')
  }, 
  {
    path: '/dyxx/zyjn',
    name: 'zyjn',
    component: () => import('../views/党员学习/ZyjnView.vue')
  }, 
  {
    path: '/dyxx/zsk',
    name: 'zsk',
    component: () => import('../views/党员学习/ZskView.vue')
  }, 
  {
    path: '/dzzjg',
    name: 'dzzjg',
    component: () => import('../views/组织结构/DzzjgView.vue')
  },
  {
    path: '/dyfc',
    name: 'dyfc',
    component: () => import('../views/组织结构/DyfcView.vue')
  },
  {
    path: '/dyfc/:dyId',
    name: 'dyfcDetail',
    component: () => import('../views/组织结构/DyfcDetail.vue')
  },
  {
    path: '/dzzzz',
    name: 'dzzzz',
    component: () => import('../views/组织结构/DzzzzView.vue')
  },
  {
    path: '/xjtj',
    name: 'xjtj',
    component: () => import('../views/组织结构/XjtjView.vue')
  },
  {
    path: '/khtjbb',
    name: 'khtjbb',
    component: () => import('../views/党组织考核管理/KhtjbbView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/job',
    name: 'job',
    component: () => import('../views/JobView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
