import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
