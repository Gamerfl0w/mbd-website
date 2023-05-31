<script setup>
import Dashboard from '../views/Dashboard.vue'
import AdminProducts from '../views/AdminProducts.vue'

</script>

<template>
      <body class="bg-[#fda300]">
        <v-card>
          <v-layout>
            <v-navigation-drawer
              permanent
              color="#2d2f6c">
              <v-list nav class="text-white">
                <v-list-item @click="showDash = true, showProducts = false" prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
                <v-list-item @click="showDash = false, showProducts = true" prepend-icon="mdi-package" title="Products" value="products"></v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-main style="height: 100dvh">
              <Dashboard v-if="showDash" />
              <AdminProducts v-if="showProducts" />
            </v-main>
          </v-layout>
      </v-card>
      </body>
</template>

<script>
export default {

    data(){
        return{
            showDash: true,
            showProducts: false
        }
    }
}
</script>

<style>

</style>