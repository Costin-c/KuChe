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
    path: '/text',
    name: 'text',
    component: () => import('../views/TextView.vue')
  },
  {
    path: '/dwxc',
    name: 'dwxc',
    component: () => import('../views/党务宣传/DwxcView.vue')
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
    path: '/dyxx/zyjn',
    name: 'zyjn',
    component: () => import('../views/党员学习/ZyjnView.vue')
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
    path: '/khrwxf',
    name: 'khrwxf',
    component: () => import('../views/党组织考核管理/KhrwxfView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
