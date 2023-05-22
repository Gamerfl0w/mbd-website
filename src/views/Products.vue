<template>
    <div class="flex flex-col justify-center items-center">
        <div class="mt-10">
            <h1 class="text-[40px]">Products</h1>  
        </div>
        <hr class="w-4/5 mt-5">
        
        <div class="flex justify-center items-start w-4/5 mt-5 text-white">
          <div class="flex justify-around w-full gap-3 sm:gap-0 flex-wrap">
            <div class="flex gap-2 sm:gap-5">  
              <select id="countries" class="bg-[#1f4762] border border-[#1f4762] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white">
                <option class="text-center" disabled selected>Categories</option>
                <div class="animate__animated animate__bounce">
                  <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </div>
              </select>
            <!-- <button class="p-3 mr-5 bg-indigo-500 rounded-lg w-48">Categories</button> -->
            <button class="p-3 bg-[#1f4762] rounded-lg w-48">Price</button>
          </div>
            <button class="p-3 bg-[#1f4762] rounded-lg w-48 flex items-center justify-center gap-5">
              <v-icon icon="mdi-magnify"></v-icon> 
              Search
            </button>
          </div>
        </div>

        <hr class="w-4/5 mt-5">

    <div class="mt-10 flex justify-center items-center w-4/5">
        <div v-if="loading == false">
          <main class="flex justify-center w-full flex-wrap gap-10 mb-10">
            <div v-for="product in products" :key="product._id">
              <div class="flex flex-col items-center justify-start transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center">
                <div class="w-56 h-72 bg-[#ffc619] rounded-3xl"></div>
                <p class="mt-3 font-bold">{{ product.name }}</p>
                <p>P {{  product.price }}</p>
              </div>
            </div>          
          </main>
        </div>

        <div v-if="loading == true">
          <v-progress-circular :size="70" indeterminate></v-progress-circular>
        </div>
    </div>

</div>
</template>

<script>
import ProductService from '../client/productService.js';

export default {

  name: 'Products',
    data(){
        return{
            products: [],
            error: '',
            loading: false,
        }
    },

    async created() {
      this.loading = true;
        try {
            this.products = await ProductService.getProducts();
            this.loading = false;
        } catch(err) {
            this.error = err.message;
        }
    },

}
</script>

<style>

</style>