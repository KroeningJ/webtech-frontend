import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import NewNote from '../views/NewNote'
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
    path: '/new-note',
    name: 'NewNote',
    component: NewNote
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }

]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BACKEND_BASE_URL : ''),
  linkActiveClass: 'active',
  routes
})

export default router
