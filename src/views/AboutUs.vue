<template>
    <main class="flex justify-center items-center h-full w-full">
    <div class="flex flex-col gap-7 w-4/5">
      <div>
        <h1 class="text-center text-[54px] mt-5 text-[#02044a]">About Us</h1>
        <p class="text-2xl mt-5 text-center">
            Maquiling Builders Depot has been in the construction supply and retailing business
            for more than 50 years. It was established and started in 1967 by Mr. Jose Abalos
            and Mrs. Jane Abalos.
            <br>
            We are recognized as one of the leaders in the construction supply business in our
            area, with business clients from Manila, Cavite, Laguna, Rizal, Batangas, and Quezon.
        </p>
      </div>
  
      <section class="flex justify-center items-center mt-10 animate__animated animate__fadeIn">
          <div class="flex justify-between items-center flex-wrap lg:flex-nowrap">
  
              <div class="w-full lg:w-1/2 mt-1 lg:mt-0">
                  <img class="rounded-xl" src="../assets/about_us/Mission.jpeg" alt="">
              </div>

              <div class="w-full lg:w-2/5">
                  <h1 class="text-3xl font-bold mt-5 sm:mt-0 text-center sm:text-left">Our Mission</h1>
                  <p class="text-2xl mt-5">
                    To provide wide range of quality products on its best price with excellent service
                    to all valued investoes, customers, suppliers, employees and the local community.
                  </p>
              </div>
          </div>
      </section>
  
      <section class="flex justify-center items-center mt-10 mb-10" data-aos="fade-left">
          <div class="flex justify-between items-center flex-wrap lg:flex-nowrap">

            <div class="w-full lg:w-1/2 mt-1 lg:mt-0">
                  <img class="rounded-xl" src="../assets/about_us/Vision.png" alt="">
              </div>

              <div class="w-full lg:w-2/5">
                  <h1 class="text-3xl font-bold mt-5 sm:mt-0 text-center sm:text-left">Our Vision</h1>
                  <p class="text-2xl mt-5">
                    To be the forerunner and the company of choice in our bussiness enterprise.
                  </p>
              </div>
          </div>
      </section>

      <section class="mb-10">
        <div class="text-center text-4xl mb-10 font-bold">
            <h1>Timeline</h1>
        </div>
        <v-timeline align="start">
            <v-timeline-item dot-color="#ffc619" v-for="item in branches" :key="item.name">
            <template v-slot:opposite>
                <p class="font-bold text-2xl text-[#1f4762]">{{ item.year }}</p>
            </template>
            <div data-aos="fade-up">
                <div class="text-xl text-[#182833] font-bold">{{ item.name }}</div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            </v-timeline-item>
        </v-timeline>
      </section>
  
    </div>
  </main>
  
  </template>
  
  <script>
  export default {
    
    data(){
        return{
            branches: [
                { year: '1967', name: 'Los Banos', text: '' },
                { year: '2003', name: 'Calamba', text: '' },
                { year: '2007', name: 'Lipa City', text: '' },
                { year: '2009', name: 'Sto. Tomas', text: '' },
                { year: '2012', name: 'Batangas City', text: '' },
                { year: '2015', name: 'Rosario', text: '' },
                { year: '2017', name: 'Lucena', text: '' },
                { year: '2019', name: 'Dasmarinas', text: '' },
                { year: '2021', name: 'Pagsanjan', text: '' },
            ]
        }
    }

  }
  </script>
  
  <style>
  
  </style>