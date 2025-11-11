import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import About from '../views/About.vue'

const base = import.meta.env.VITE_CONTEXT_PATH || '/'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(base),
  routes
})

export default router
