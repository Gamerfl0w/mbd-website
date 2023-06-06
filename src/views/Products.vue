<template>
    <div class="flex flex-col justify-center items-center">
        <div class="mt-10">
            <h1 class="text-[40px] text-[#02044a]">Products</h1>  
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
              <v-overlay class="flex justify-center items-center"
        activator="parent"
        location-strategy="static"
        scroll-strategy="none"
      >
        <div class="flex justify-center w-[80vw] lg:w-[60vw] h-[80vh] bg-white rounded-xl p-10 animate__animated animate__fadeIn">
          <div class="flex text-2xl h-full w-full">
            <v-icon class="mr-2" icon="mdi-magnify"></v-icon>
            <div>
              <input v-model="input"  @input="searchTimeOut" class="p-1 w-[50vw]" type="text" placeholder="Search">
              <div v-if="isSearching == true" class="flex flex-col items-center justify-center h-full w-full">
                <v-progress-circular :size="70" :active="isSearching" :indeterminate="isSearching"></v-progress-circular>
              </div>
              <div class="h-full w-full mt-5">
                <div v-for="item in searchProducts" :key="item._id">
                  <router-link :to="{ name: 'show-product', params: { id: item._id }}">
                    <div class="mb-5 flex items-center justify-between gap-10 hover:bg-[#1f4762] hover:text-white hover:cursor-pointer hover:rounded-md p-3 flex-wrap">
                      <div class="flex items-center gap-5 flex-wrap text-center sm:justify-start">
                        <img class="h-7 sm:h-14 w-7 sm:w-14 rounded-md" :src="/uploads/ + item.image.filename" />
                        <p>{{ item.name }}</p>
                      </div>
                      <div class="hidden sm:flex">
                        <p class="text-center">₱{{ item.price }}</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-overlay>
            </button>
          </div>
        </div>

        <hr class="w-4/5 mt-5">

    <div class="mt-10 flex justify-center items-center w-4/5">
        <div v-if="loading == false">
          <main class="flex justify-center w-full flex-wrap gap-10 mb-10">
            <div v-for="product in products" :key="product._id">
            <router-link :to="{ name: 'show-product', params: { id: product._id }}">
              <div class="flex flex-col items-center justify-start transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center">
                <div class="w-56 h-72 bg-[#ffc619] rounded-3xl bg-center bg-cover" :style="{ backgroundImage: 'url(' + '/uploads/' + product.image.filename + ')' }"></div>
                <p class="mt-3 font-bold">{{ product.name }}</p>
                <p>₱ {{  product.price }}</p>
              </div>
            </router-link> 
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
            isSearching: false,
            searchProducts: [],
            input: '',
            timeout: null,
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

    methods: {
      // focusInput() {
      //   this.$refs.input.focus();
      //   console.log('Focus where?');
      // },

      searchTimeOut() {  
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            this.search()
        }, 800);
      },

      async search(){
        if (this.input != null || '') {
          this.isSearching = true;
          this.searchProducts = await ProductService.search(this.input);
          this.isSearching = false;
        }
      }

    }

}
</script>

<style>

</style>