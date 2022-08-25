import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const pages = []

// 公共组件的 demo, 后续打包的时候需要处理掉
const demos = [
  {
    path: '/demo1',
    component: () => import('@/demos/BillionDataChartsPubComponentDemo/index.vue'),
  },
  {
    path: '/demo2',
    component: () => import('../demos/customAccountDemo.vue'),
  },
  {
    path: '/demo3',
    component: () => import('../demos/gisDemo.vue'),
  },
]
const routes = [
  ...demos,
  ...pages,
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
