<script setup>
import Dashboard from '../views/admin/Dashboard.vue'
import AdminProducts from '../views/admin/AdminProducts.vue'
import Inquiries from '../views/admin/Inquiries.vue'

</script>

<template>
      <body class="bg-[#153040]">
        <v-card>
          <v-layout>
            <v-navigation-drawer
            class="w-10"
              permanent
              color="#2d2f6c">
              <v-list nav class="text-white">
                <v-list-item @click="tab = 'dashboard'" prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
                <v-list-item @click="tab = 'products'" prepend-icon="mdi-package" title="Products" value="products"></v-list-item>
                <v-list-item @click="tab = 'inquiries'" prepend-icon="mdi-chat-question" title="Inquiries" value="inquiries"></v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-main style="height: 100dvh">
              <v-window v-model="tab" class="h-screen">
                <v-window-item class="h-full overflow-y-scroll" value="dashboard">
                  <Dashboard />
                </v-window-item>
                <v-window-item class="h-full overflow-y-scroll" value="products">
                  <AdminProducts />
                </v-window-item>
                <v-window-item class="h-full overflow-y-scroll bg-[#fda300]" value="inquiries">
                  <Inquiries />
                </v-window-item>
              </v-window>
            </v-main>
          </v-layout>
      </v-card>
      </body>
</template>

<script>
export default {

    data(){
        return{
            tab: ''
        }
    }
}
</script>

<style>
html {
  overflow-y: initial !important;
}
</style>