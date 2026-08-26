import { createRouter, createWebHistory } from 'vue-router'
import Register from '../pages/Register.vue'
const router = createRouter({
  history: createWebHistory(),

 routes: [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/connect-bank',
    component: () => import('../pages/ConnectBank.vue')
  },
{
    path: '/transactions',
    component: () => import('../pages/Transactions.vue')
},
{
  path: '/accounts',
  component: () => import('../pages/Accounts.vue')
},
{
  path: '/register',
  component: () => import('../pages/Register.vue')
},
]
})

export default router
 