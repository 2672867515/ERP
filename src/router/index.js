import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login'
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/index'),
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home/index')
      },
      {
        path: 'department',
        name: 'department',
        component: () => import('../views/system/department/index')
      },
      {
        path: 'enterprise',
        name: 'enterprise',
        component: () => import('../views/system/enterprise/index')
      },
      {
        path: 'employee',
        name: 'employee',
        component: () => import('../views/system/employee/index.vue')
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
