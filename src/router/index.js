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
  },,
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue')
  },
  {
    path: '/chapters',
    name: 'Chapters',
    component: () => import(/* webpackChunkName: "chapters" */ '../views/Chapters.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: () => import(/* webpackChunkName: "content" */ '../views/Bookshelf.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
