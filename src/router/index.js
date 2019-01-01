import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: ()=> import('@/components/auth/Login')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
