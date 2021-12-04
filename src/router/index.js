import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import Toplist from '@/views/top-list'
import Search from '@/views/search'
import SingerDetail from '@/views/singer-detail'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: Toplist
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer-detail',
    component: SingerDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
