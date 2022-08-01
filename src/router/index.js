import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const pages = [
  {
    path: '/monitorChart',
    component: () => import('../views/monitorChart/index.vue'),
  },
]

// 公共组件的 demo, 后续打包的时候需要处理掉
const demos = [
  // {
  //   path: '/demos',
  //   component: () => import('../demos/billionDataChartsDemo.vue'),
  // },
]
const routes = [
  ...demos,
  ...pages,
  {
    path: '/',
    name: 'Index',
    // component: () => import('../views/index/index.vue'),
    component: () => import('../views/monitorChart/index.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
