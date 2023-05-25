<template>
  <body class="animate__animated animate__slideInUp p-10 h-full">
    <div class="absolute bottom-10 right-10">
        <v-btn @click="showAdd = true, name = '', price = ''" icon="mdi-plus" size="x-large"></v-btn>
    </div>
    <div class="flex w-full items-center justify-center">
        <h1 class="text-4xl">Products</h1>
    </div>
    <!-- component -->
    <div>
      <v-progress-linear
        :active="isLoading"
        :indeterminate="isLoading"
        absolute
        bottom
        color="black"
      ></v-progress-linear>
    </div>

<div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">

  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-xl">Product Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-xl">Price</th>
        <div class="flex justify-end">
            <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-xl">Actions</th>
        </div>
      </tr>
    </thead>
    <tbody v-for="product in products" :key="product._id" class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-16 w-16 text-4xl">
            <v-icon
              class="h-full w-full rounded-2xl object-cover object-center"
              icon="mdi-hammer-screwdriver"
              alt="">
            </v-icon>
          </div>
          <div>
            <div class="font-medium text-gray-700 text-2xl">{{ product.name }}</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center text-xl font-semibold"
          >
            <span class="h-1.5 w-1.5 rounded-full"></span>
           P {{ product.price }}
          </span>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-1">

            <div class="flex justify-center items-center">

              <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <div>
              <v-btn v-bind="props" icon="mdi-trash-can" variant="plain">
              </v-btn>
            </div>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar color="red" title="Delete Product"></v-toolbar>
            <v-card-text class="text-center">
              <p class="text-xl">Are you sure you want to delete <br><span class="font-bold">{{ product.name }}</span>?</p>
              <p class="text-xl pa-10">This action is irreversible.</p>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn @click="isActive.value = false, deleteProduct(product._id)">Delete</v-btn>
              <v-btn @click="isActive.value = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
            <v-btn @click="editProduct(product._id, product.name, product.price)" icon="mdi-pencil" variant="plain">
            </v-btn>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
  </table>
</div>

<!-- Add Product Modal -->
<v-row justify="center">
    <v-dialog
      v-model="showAdd"
      persistent
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Product</span>
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
                  type="number"
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
            @click="showAdd = false, name = '', price = ''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showAdd = false, createProduct()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  <!-- Edit and Update Product Modal -->
  <v-row justify="center">
    <v-dialog
      v-model="showEdit"
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
                  type="number"
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
            @click="showEdit = false, name = '', price = ''"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showEdit = false, updateProduct(id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  
  <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </body>
</template>

<script>
import ProductService from '../client/productService.js';

export default {

    data(){
        return{
            products: [],
            error: '',
            name: '',
            price: '',
            showAdd: false,
            showEdit: false,
            isLoading: false,
            id: '',
            snackbar: false,
            text: '',
        }
    },

    async created() {
        try {
            this.products = await ProductService.getProducts()
            this.isLoaded = true
        } catch(err) {
            this.error = err.message;
        }
    },

    methods: {
      async createProduct(){
        this.text = "Product Added Successfully."
        this.isLoading = true;
        await ProductService.insertProduct(this.name, this.price);
        this.products = await ProductService.getProducts()
        this.isLoading = false;
        this.snackbar = true;
      },

      async editProduct(id, name, price){
        this.showEdit = true;
        this.id = id;
        this.name = name;
        this.price = price;
      },

      async deleteProduct(id){
        this.text = "Product has been deleted successfully."
        this.isLoading = true;
        await ProductService.deleteProduct(id);
        this.products = await ProductService.getProducts()
        this.isLoading = false;
        this.snackbar = true;
      },

      async updateProduct(id){
        this.text = "Product has been updated successfully."
        this.isLoading = true;
        await ProductService.updateProduct(id, this.name, this.price);
        this.products = await ProductService.getProducts()
        this.isLoading = false;
        this.snackbar = true;
      },

    }

}
</script>

<style>

</style>