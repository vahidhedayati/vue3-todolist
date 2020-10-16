import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GifSearcher from "@/views/GifSearcher";
//import News from '@/views/news/News'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gifsearcher',
    name: 'gifsearcher',
    component: GifSearcher
  },
  /*{
    path: '/news',
    name: 'news',
    component: News
  }*/
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
