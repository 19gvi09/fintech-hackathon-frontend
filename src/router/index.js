import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/lk',
        name: 'LK',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "lk" */ '../views/LK.vue')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
