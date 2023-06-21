<template>
  <body class="bg-slate-100">
  <main class="flex flex-col gap-3 h-screen justify-start items-center bg-slate-100">
  <h1 class="text-[54px] text-center text-[#02044a] mt-5">Contact Us</h1>
  <p class="text-center text-xl">Any questions or remarks? Just write us a message!</p>

  <div class="w-full xl:w-auto flex bg-white rounded-3xl p-2">
    <div class="flex flex-wrap lg:flex-nowrap">
      <div class="w-full xl:w-[35%] xl:h-full bg-[#1f4762] rounded-3xl text-white">
      <div class="p-10 flex flex-col h-full">
          <h1 class="text-2xl font-bold">Contact Information</h1>
          <p class="opacity-70 mt-2">Fill up the form and our team will get back to you within 24hrs.
          </p>
          <div class="flex flex-col grow mt-7 lg:mt-0 justify-center items-center lg:items-start">
            <div class="flex flex-col gap-7">
                <div class="flex gap-5 items-center">
                  <svg class="w-7 h-7" viewBox="0 0 24 24" fill="#ffc619" xmlns="http://www.w3.org/2000/svg" stroke="#ffc619"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z" fill="#ffc619"></path> <path d="M20.9995 19.1864V16.4767C21.0105 16.0337 20.858 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0274 14.1176 14.4272 14.9788 13.8405 15.5644C11.5747 14.2785 9.69864 12.4062 8.41026 10.1448C8.99696 9.55929 9.85994 8.96036 10.0429 8.10428C10.2772 7.00777 9.66819 4.24949 8.72138 3.43684C8.38835 3.151 7.96253 2.99577 7.52331 3.00009H4.80817C3.77364 3.00106 2.91294 3.92895 3.00713 4.96919C3.00006 13.935 10.0001 21 19.0265 20.9929C20.0723 21.0873 21.0037 20.2223 20.9995 19.1864Z" stroke="#ffc619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p>0912345678</p>
                </div>
                <div class="flex gap-5 items-center">
                  <svg class="w-7 h-7" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffc619"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#ffc619]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffc619"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#ffc619]"> </path> </g> </g> </g> </g></svg>
                    <p>mbd@gmail.com</p>
                </div>
                <div class="flex gap-5 items-center">
                  <svg class="w-7 h-7" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffc619"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffc619" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                    <p>Location</p>
                </div>
            </div>
          </div>
      </div>
    </div>

    <Form @submit="createInquiry" class="p-5 grow">
      <div class="flex flex-col justify-center gap-10">
        <div class="flex justify-center gap-5">
         <div class="w-full"> 
            <Field v-model="firstName" :rules="validateFn" class="border-b-2 border-gray-300 w-full lg:text-xl p-3" name="firstName" type="firstName" placeholder="First Name" style="border-bottom: 1px solid black;" />
            <p><ErrorMessage name="firstName" /></p>
         </div>

         <div class="w-full">
            <Field v-model="lastName" :rules="validateLn" class="border-b-2 border-gray-300 w-full lg:text-xl p-3" name="lastName" type="lastName" placeholder="Last Name" style="border-bottom: 1px solid black;" />
            <p><ErrorMessage name="lastName" /></p>
         </div>
        </div>

        <div class="flex justify-center gap-5">
          <div class="w-full">
            <Field v-model="email" :rules="validateEmail" class="border-b-2 border-gray-300 w-full lg:text-xl p-3" name="email" type="email" placeholder="Email" style="border-bottom: 1px solid black;" />
           <p><ErrorMessage name="email" /></p>
          </div>

          <div class="w-full">
            <Field v-model="phone" :rules="validatePhone" class="border-b-2 border-gray-300 w-full lg:text-xl p-3" name="phone" type="phone" placeholder="Phone Number" style="border-bottom: 1px solid black;" />
            <p><ErrorMessage name="phone" /></p>
          </div>
        </div>

        <div class="w-full">
          <Field as="textarea" v-model="message" :rules="validateMessage" class="border-2 w-full border-gray-300 lg:text-xl p-3" name="message" id="" cols="10" rows="7" placeholder="Enter Message...." style="border: 1px solid black;" />
          <p><ErrorMessage name="message" /></p>
        </div>
      </div>

      <v-btn type="submit" class="mt-3 w-full p-2 text-white rounded-3xl" color="#fda300">Send</v-btn>
    </Form>
  </div>

  </div>
  </main>
  </body>
</template>

<script>
import InquiryService from '../client/inquiryService';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },

  data(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }
  },

  methods: {
    async createInquiry(){
      await InquiryService.insertInquiry(this.firstName, this.lastName, this.email, this.phone, this.message);

      },

      validateFn(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      if (value.length < 3) {
        return 'First name must be longer than 2 characters';
      }
      // All is good
      return true;
    },

    validateLn(ln) {
      if (!ln) {
        return 'This field is required';
      }
      if (ln.length < 3) {
        return 'Last name must be longer than 2 characters';
      }
      return true;
    },

    validateEmail(value) {
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
    },

    validatePhone(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^(09|\+639)\d{9}$/;
      if (!regex.test(value)) {
        return 'This field must be a valid phone number (Ex. 09 or +63)';
      }
      return true;
    },

    validateMessage(value) {
      if (!value) {
        return 'This field is required';
      }
      if (value.length < 10) {
        return 'Message must be longer than 10 characters';
      }
      return true;
    },

  },

}
</script>

<style>

</style>