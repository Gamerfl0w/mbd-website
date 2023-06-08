<template>
  <body class="animate__animated animate__slideInUp p-10 h-full bg-[#fda300]">
    <div class="absolute bottom-10 right-10">
        <v-btn @click="showAdd = true, name = '', price = ''" icon="mdi-plus" size="x-large"></v-btn>
    </div>
    <div class="flex w-full items-center justify-center">
        <h1 class="text-4xl text-white">Products</h1>
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
    <thead class="bg-[#153040] text-white">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-xl">Product Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-xl">Category</th>
        <th scope="col" class="px-6 py-4 font-medium text-xl">Price</th>
        <div class="flex justify-end">
            <th scope="col" class="px-6 py-4 font-medium text-xl">Actions</th>
        </div>
      </tr>
    </thead>
    <tbody v-for="product in products" :key="product._id" class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-16 w-16 text-4xl bg-center bg-cover rounded-lg" :style="{ backgroundImage: 'url(' + '/uploads/' + product.image.filename + ')' }"></div>
          <div>
            <div class="font-medium text-gray-700 text-2xl">{{ product.name }}</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center text-xl"
          >
            <span class="h-1.5 w-1.5 rounded-full"></span>
            {{ product.category }}
          </span>
        </td>
        <td class="px-6 py-4">
          <span
            class="inline-flex items-center text-xl font-semibold"
          >
            <span class="h-1.5 w-1.5 rounded-full"></span>
            ₱{{ product.price }}
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
            <v-btn @click="editProduct(product._id, product.name, product.category, product.price, product.image.filename)" icon="mdi-pencil" variant="plain">
            </v-btn>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
  </table>
</div>


<!-- Add Product Modal -->
<v-form v-model="isFormValid">
<v-row justify="center">
    <v-dialog
      v-model="showAdd"
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
                <div class="flex flex-col justify-center items-center border-2 p-2 rounded-lg">
                  <p class="font-bold">Upload Product Image</p>
                  <input type="file" id="image" ref="image" @change="onChange" name="image" class="hidden">
                  <p class="mt-3" v-if="image != null">{{ image.name }}</p>
                  <img class="h-48 w-48 rounded-xl" v-if="url" :src="url" />
                  <label class="p-3 bg-[#1f4762] text-white cursor-pointer hover:opacity-80 rounded-lg mt-3" for="image">Select an image</label>
                </div>
              </v-col>
              <v-col cols="12">
                <v-text-field class="rounded-lg"
                  label="Product Name*"
                  v-model="name"
                  :rules="rules"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
              <v-select
                v-model="category"
                :items="categories"
                :rules="[v => !!v || 'Category is required']"
                label="Category*"
                required
              ></v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field class="rounded-lg"
                  label="Price*"
                  v-model="price"
                  type="number"
                  :rules="rules"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="flex gap-3 text-white">
            <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showAdd = false, name = '', category = '', price = '', image = null, url = null"
          >
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" :disabled="!isFormValid" @click="createProduct">
            Save
          </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</v-form>


  <!-- Edit and Update Product Modal -->
<v-form v-model="isFormValid">
  <v-row justify="center">
    <v-dialog
      v-model="showEdit"
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
                <div class="flex flex-col justify-center items-center border-2 p-2 rounded-lg">
                  <p class="font-bold">Upload Product Image</p>
                  <input type="file" id="image" ref="image" @change="onChange" name="image" class="hidden">
                  <p class="mt-3" v-if="image != null">{{ image.name }}</p>
                  <img class="h-48 w-48 rounded-xl" v-if="image == null" :src="currentImage" />
                  <img class="h-48 w-48 rounded-xl" v-if="url" :src="url" />
                  <label class="p-3 bg-[#1f4762] text-white cursor-pointer hover:opacity-80 rounded-lg mt-3" for="image">Select an image</label>
                </div>
                <v-text-field
                  label="Product Name*"
                  v-model="name"
                  :rules="rules"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
              <v-select
                v-model="category"
                :items="categories"
                :rules="[v => !!v || 'Category is required']"
                label="Category*"
                required
              ></v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Price*"
                  v-model="price"
                  type="number"
                  :rules="rules"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="showEdit = false, name = '', price = '', image = null"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="updateProduct(id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</v-form>
  
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
import ProductService from '../../client/productService.js';

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
            image: null,
            onSelect: null,
            rules: [this.rules = [value => !!value || 'Required.']],
            isFormValid: false,
            url: null,
            currentImage: null,
            categories: [
              'Furnitures',
              'Tiles',
              'Appliances',
              'Luminaires',
            ],
            category: '',
        }
    },

    async created() {
        try {
            this.products = await ProductService.getProducts("1", "none")
            this.isLoaded = true
        } catch(err) {
            this.error = err.message;
        }
    },

    methods: {
      onChange(e){
        this.image = this.$refs.image.files[0]
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
      },

      async createProduct(){
        const formData = new FormData();  
        formData.append('image', this.image)
        formData.append('name', this.name)
        formData.append('price', this.price)
        formData.append('category', this.category)

        this.text = "Product Added Successfully."
        this.isLoading = true;

        if(this.image !== null && this.name && this.category && this.price !== ''){
          this.showAdd = false
          await ProductService.insertProduct(formData);
          this.category = ''
          this.image = null
          this.url = null
        }else{
          this.isLoading = false;
          this.text = "Please upload an image"
          this.snackbar = true;
        }

        this.products = await ProductService.getProducts("1", "none")
        this.isLoading = false;
        this.snackbar = true;
      },

      async editProduct(id, name, category, price, image){
        this.showEdit = true;
        this.id = id;
        this.name = name;
        this.category = category
        this.price = price;
        this.currentImage = '/uploads/' + image
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
        if (this.name && this.price !== '') {
          this.showEdit = false;

          const formData = new FormData();  
          formData.append('image', this.image)
          formData.append('name', this.name)
          formData.append('price', this.price)
          formData.append('category', this.category)

          this.text = "Product has been updated successfully."
          this.isLoading = true;

          await ProductService.updateProduct(id, formData);

          this.name = ''
          this.price = ''
          this.category = ''
          this.image = null
          this.url = null
          this.products = await ProductService.getProducts("1", "none")
          this.isLoading = false;
          this.snackbar = true;

        }else{
          this.text = "Please check your input."
          this.snackbar = true;
        }    
        
      },

    }

}
</script>

<style>

</style>