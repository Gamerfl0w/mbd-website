<template>
    <main class=" h-full w-full py-10">
        <div>
            <v-progress-linear
                :active="isLoading"
                :indeterminate="isLoading"
                absolute
                bottom
                color="black"
            ></v-progress-linear>
        </div>
        <div class="text-3xl mb-5">
            <h1 class="text-white text-center">Inquiries</h1>
        </div>
        <div class="flex flex-wrap justify-center items-start h-full text-white gap-5">
            <v-card class="h-full" v-for="item in inquiries" :key="item._id" min-height="200"  min-width="344" max-height="200"  max-width="344" variant="text" style="background: #182833; border-radius: 6px;">
            <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                    {{ item.firstName }}
                </div>
                <div class="mb-3">Greyhound divisely hello coldly fonwderfully</div>
                <div class="text-sm">{{ item.phone }}</div>
                <div class="text-sm">{{ item.email }}</div>
            </div>
            </v-card-item>
            <div>
                <v-card-actions >
                    <v-btn variant="text">
                        Reply
                    </v-btn>
                    <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                    <div>
                        <v-btn v-bind="props" variant="text">
                            Delete
                        </v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar class="text-white" color="#a72d25" title="Delete Inquiry"></v-toolbar>
                            <v-card-text class="text-center">
                            <p class="text-xl">Are you sure you want to delete this inquiry?</p>
                            <p class="text-xl pa-10">This action is irreversible.</p>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                            <v-btn @click="isActive.value = false, deleteInquiry(item._id)">Delete</v-btn>
                            <v-btn @click="isActive.value = false">Cancel</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                    </v-dialog>
                </v-card-actions>
            </div>
        </v-card>
        </div>
    </main>

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

</template>

<script>
import InquiryService from '../../client/inquiryService.js'

export default {
    data() {
        return {
            inquiries: [],
            isLoading: true,
            text: '',
            snackbar: false
        }
    },

    async created() {
        try {
            this.inquiries = await InquiryService.getInquiries();
            this.isLoading = false
        } catch(err) {
            this.error = err.message;
        }
    },

    methods: {
        async deleteInquiry(id){
            this.text = "Successfully removed."
            this.isLoading = true;
            await InquiryService.deleteInquiry(id);
            this.inquiries = await InquiryService.getInquiries();
            this.isLoading = false;
            this.snackbar = true;
        }
    },
}
</script>

<style>

</style>