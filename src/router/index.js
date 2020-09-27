import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (setting.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 可以通过 /* webpackChunkName: "setting" */ 指定webpack打包时生成的文件名
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/chapters',
    name: 'Chapters',
    component: () => import(/* webpackChunkName: "test" */ '../views/Chapters.vue')
  },
  {
    path: '/chapter',
    name: 'Chapter',
    component: () => import(/* webpackChunkName: "test" */ '../views/Chapter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
