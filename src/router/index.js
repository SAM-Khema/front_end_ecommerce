import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' //create route to navigate page to show when user click
import authApi from '@/libs/apis/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'guest',
      component: () => import('../views/guest.vue')
    },
    {
      path: '/specialoffer',
      name: 'specialoffer',
      component: () => import('../views/SpecialOffer.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/Selected/:Sid',
      name: 'productselect',
      component: () => import('../views/Selected.vue')
    },
    {
      path: '/cart',
      name: 'mycart',
      component: () => import('../views/cart.vue')
    },
    {
      path: '/cartspecials',
      name: 'mycartspecials',
      component: () => import('../views/cartspecials.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('../views/delivery.vue')
    },
    {
      path: '/deliveryspecials',
      name: 'deliveryspecials',
      component: () => import('../views/deliveryspecials.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/payment.vue')
    },
    {
      path: '/paymentspecials',
      name: 'paymentspecials',
      component: () => import('../views/paymentspecials.vue')
    },
    {
      path: '/sucessful',
      name: 'sucessful',
      component: () => import('../views/sucessful.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/Contactus.vue')
    },
    {
      path: '/register',
      name: 'auth/register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/login',
      name: 'auth/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/Dashboard/category',
      name: 'dashboard/category',
      component: () => import('../views/Dashboard/pages/category.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/Dashboard.vue')
    },
    {
      path: '/dashboard/item',
      name: 'dashboard/item',
      component: () => import('../views/Dashboard/pages/item.vue')
    },
    {
      path: '/dashboard/product',
      name: 'dashboard/product',
      component: () => import('../views/Dashboard/pages/product.vue')
    },
 
    
  ]
})



export default router
