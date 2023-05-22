<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import AddProduct from './components/AddProduct.vue'
import AdminNav from './components/AdminNav.vue'
import Dashboard from './views/Dashboard.vue'
import Modal from './components/Modal.vue'

import 'animate.css';
</script>

<template>
  <Navbar v-show="$route.name !== 'dashboard'" />
  <router-view v-show="$route.name !== 'dashboard'" />
  <AdminNav v-show="$route.name == 'dashboard'">
    <Dashboard />
  </AdminNav>

</template>
