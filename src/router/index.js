
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpUs from '../views/HelpUS.vue'
import aboutView from '../views/AboutView.vue'
import BlogPosts from '../views/BlogPosts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:aboutView,

  },
  {
    path:'/help',
    name:'HelpUs',
    component:HelpUs,
  },
  {
    path: '/',
    name: 'home',
    component:HomeView,
  },
  {
    path:'/BlogPosts',
    name:'BlogPosts',
    component:BlogPosts,
  },
]

const router = new VueRouter({
  routes
})

export default router
