<template>
    <div v-if="loading == false" class="flex w-screen h-[80vh] justify-center items-center p-10 bg-gray-100 gap-5 sm:gap-20 flex-wrap">
        <div class="flex-shrink-0 border-4 rounded-2xl border-[#ffc619]">
            <img :src="'/uploads/' + products.image.filename" class="w-full h-64 sm:h-96 animate__animated animate__fadeInUp" alt="" style="border-radius: 10px;">
        </div>

        <div class="flex flex-col justify-center items-center sm:items-start">
            <h1 class="text-3xl text-[#02044a]">{{ products.name }}</h1>
            <p class="max-w-xl text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, molestiae excepturi. Ducimus tempore asperiores veniam totam sint nesciunt consequuntur illum dolores maiores? Unde veniam voluptate molestiae mollitia explicabo expedita temporibus!</p>
        </div>
    </div>
    <div class="flex w-full h-[88vh] justify-center items-center" v-if="loading == true">
          <v-progress-circular :size="70" indeterminate></v-progress-circular>
    </div>
</template>

<script>
import ProductService from '../../client/productService.js'

export default {

    data(){
        return{
            products: [],
            error: '',
            loading: true,
        }
    },

    async created(){
        try {
            this.products = await ProductService.showProduct(this.$route.params.id);
            this.loading = false;
        } catch(err) {
            this.error = err.message;
        }
    },
}
</script>

<style>
body{
    background: rgb(243 244 246);
}

@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>