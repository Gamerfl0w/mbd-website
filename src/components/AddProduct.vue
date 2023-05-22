<template>
    <div class="flex flex-col justify-center items-center h-full">
        <div>
            <label for="name">Name</label>
            <input class="border-2 bg-gray-400" type="text" name="name" v-model="name">
        </div>
        <div>
            <label for="price">Price</label>
            <input class="border-2 bg-gray-400" type="text" name="price" v-model="price">
        </div>
        <button @click="createProduct()">Submit</button>
    </div>
</template>

<script>
import ProductService from '../client/productService';

export default {
    name: 'AddProduct',

    data(){
        return{
            products: [],
            error: '',
            name: '',
            price: '',

        }
    },

    async created() {
        try {
            this.products = await ProductService.getProducts()
        } catch(err) {
            this.error = err.message;
        }
    },

    methods: {
        async createProduct(){
            await ProductService.insertProduct(this.name, this.price);
            this.products = await ProductService.getProducts()
        },

        // async deleteProduct(id){
        //     await ProductService.deleteProduct(id);
        //     this.products = await ProductService.getProducts()
        // }
    }

}
</script>

<style>

</style>