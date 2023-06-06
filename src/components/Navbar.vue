<template>
  <nav class="sticky top-0 w-full z-50 hidden sm:flex">
    <div class="p-5 bg-[#fda300] text-white grow">
        <div class="flex justify-between items-center">
          <img src="https://maquilingbuildersdepot.com/wp/wp-content/uploads/2018/02/logo.png" alt="">
          <ul class="flex gap-10 text-xl">
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/">Home</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/products">Products</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" :to="{ name: 'store' }">Store Locations</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/contact-us">Contact Us</router-link>
            <router-link class="transition duration-300 ease-in-out hover:text-[#153040]" to="/about-us">About Us</router-link>
          </ul>
         </div>
      </div>
  </nav>

    <!-- card 1 -->
    <!-- <div
      data-aos="zoom-in"
      class="card"
      style="width: 18rem; margin: 100px auto;"
    >
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top animate__animated animate__fadeInUp"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->

  
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

</script>