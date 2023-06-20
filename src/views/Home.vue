<template>
  <main class="flex justify-center top-0 items-center flex-col w-full">
    <div
        class="w-full h-screen bg-[url('./assets/main_img.jpg')] bg-cover bg-center">
        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 text-white">
              <div class="flex flex-col justify-center items-center gap-5">
                <span class="text-4xl sm:text-[54px] text-center font-bold animate__animated animate__fadeInUp">Maquiling Builders Depot</span>
                <span class="text-xl">START TO FINISH BUILDING</span>
                <p class="text-center text-lg w-4/5 sm:w-[40%]">Maquiling Builders Depot is not just a store for construction
                  materials, it's a hub for builders to find the tools
                  and resources they need to turn their vision into a reality.</p>
              </div>
        </div>
    </div>
  </main>

  <section>
      <div class="p-16 h-auto flex justify-center items-center gap-10 flex-wrap">
        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-right">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg?w=2000')]"></div>
          <h1 class="text-[#2e2b6e] text-xl font-bold">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-right">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg?w=2000')]"></div>
          <h1 class="text-[#2e2b6e] text-xl font-bold">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-right">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/building-construction-worker-site_23-2149124283.jpg?w=2000')]"></div>
          <h1 class="text-[#2e2b6e] text-xl font-bold">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
  </section>

  <div class="bg-[#ef9b24] text-white p-10 sm:p-14 flex justify-center items-center flex-col gap-5">
    <p class="text-center text-[40px]">Products</p>
    <v-carousel class="rounded-3xl" data-aos="fade-up-left" show-arrows="hover" hide-delimiter-background hide-delimiters cycle interval="3000">
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
    </v-carousel>
  </div>

  <!-- <section class="bg-[#2e2b6e] text-white flex justify-center items-center flex-col p-10">
    <h1 class="text-[40px]">Services</h1>
      <div class="p-16 h-auto flex justify-center items-center gap-10 flex-wrap">
        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div class="flex text-center flex-col items-center w-auto gap-3" data-aos="fade-left">
          <div class="w-72 h-56 bg-blue-300 rounded-3xl transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer bg-cover bg-center bg-[url('https://www.kindpng.com/picc/m/750-7505601_services-icon-png-services-icon-transparent-png.png')]"></div>
          <h1 class="font-bold text-xl">Title</h1>
          <p class="w-56">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
  </section> -->

</template>

<script>
export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
}
</script>

<style>

</style>