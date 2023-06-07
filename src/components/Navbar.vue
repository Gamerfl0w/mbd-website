<template>
  <nav class="sticky top-0 w-full z-50 flex">
    <div class="p-5 bg-[#fda300] text-white grow">
        <div class="flex justify-between items-center flex-wrap">
          <img src="https://maquilingbuildersdepot.com/wp/wp-content/uploads/2018/02/logo.png" alt="">
          <div @click="isMobile = !isMobile" class="lg:hidden">
            <v-icon class="mb-3 hidden" icon="mdi-menu"></v-icon>
          </div>
          <!-- Show this on dekstop -->
          <ul v-if="display >= 1024" class="flex flex-col lg:flex-row w-full lg:w-auto lg:items-start items-center mt-3 lg:mt-0 flex-wrap gap-5 lg:gap-10 text-xl">
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/">Home</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/products/1">Products</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" :to="{ name: 'store' }">Store Locations</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/contact-us">Contact Us</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/about-us">About Us</router-link>
          </ul>
          <!-- Show this on mobile -->
          <ul v-if="isMobile" class="flex flex-col lg:flex-row w-full lg:w-auto lg:items-start items-center mt-3 lg:mt-0 flex-wrap gap-5 lg:gap-10 text-xl">
            <router-link @click="isMobile = false" class="transition duration-300 ease-in-out hover:text-[#153040]" to="/">Home</router-link>
            <router-link @click="isMobile = false" class="transition duration-300 ease-in-out hover:text-[#153040]" to="/products/1">Products</router-link>
            <router-link @click="isMobile = false" class="transition duration-300 ease-in-out hover:text-[#153040]" :to="{ name: 'store' }">Store Locations</router-link>
            <router-link @click="isMobile = false" class="transition duration-300 ease-in-out hover:text-[#153040]" to="/contact-us">Contact Us</router-link>
            <router-link @click="isMobile = false" class="transition duration-300 ease-in-out hover:text-[#153040]" to="/about-us">About Us</router-link>
          </ul>
         </div>
      </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})


</script>

<script lang="ts">
  export default {
    data () {
      return {
        display: window.innerWidth,
        isMobile: false,
      }
    },
}
</script>