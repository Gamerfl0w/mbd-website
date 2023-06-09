import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ContactUs from '../views/ContactUs.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Store from '../views/StoreLocations.vue'
import AboutUs from '../views/AboutUs.vue'
import ShowProduct from '../views/products/ShowProduct.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/products/:page/:category', name: 'products',  component: Products },
    { path: '/contact-us', name: 'contactUs', component: ContactUs },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/locations', name: 'store', component: Store },
    { path: '/about-us', name: 'about-us', component: AboutUs },
    { path: '/get/show-product/:id', name: 'show-product', component: ShowProduct, props: true },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
