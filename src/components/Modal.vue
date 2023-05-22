<template>
  <div v-for="product in products" :key="product._id">
    <h1 class="text-4xl">Product{{ product.name }}</h1>
  </div>
    <!-- <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Product Name*"
                  v-model="name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Price*"
                  v-model="price"
                  required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false, updateProduct()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
</template>

<script>
import ProductService from '../client/productService.js';

export default {

    data(){
        return{
            products: [],
            error: '',
            dialog: true,
            name: '',
            price: ''
        }
    },

    async created() {
        try {
            this.products = await ProductService.editProduct("64643640d0fa56f7bdc7f3a8")
            this.isLoaded = true
            console.log(this.products)
        } catch(err) {
            this.error = err.message;
        }
    },

    methods: {
        showForm(){
            this.dialog = true
        },

        async updateProduct(){
            await ProductService.showProduct(this.name, this.price);
            this.products = await ProductService.getProducts()
        },

    }

}
</script>

<style>

</style>