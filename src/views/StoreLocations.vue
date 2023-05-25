<template>
    <main class="flex justify-center items-center p-10 flex-col w-full">
      <h1 class="text-[54px] text-center text-[#02044a] mb-5">{{ textLocation }}</h1>
      <v-btn v-if="showSelection == false" @click="chooseLocation()" color="#1F4762" class="mb-3 text-white">Choose another location</v-btn>

      <div v-if="location.showLB" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.2725808574974!2d121.23639721080092!3d14.17880658620182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60c07ac3efff%3A0x3982775eda82c6a8!2sMaquiling%20Builders%20Depot%20-%20Los%20Ba%C3%B1os!5e0!3m2!1sen!2sph!4v1684724802836!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showCalamba" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.613810119187!2d121.13804354518206!3d14.217376650814987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd624b7a530293%3A0xecb6bf9451b46dc0!2sMaquiling%20Builders%20Depot%20-%20Calamba%20Branch!5e0!3m2!1sen!2sph!4v1684725357424!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showLipa" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.1114850376703!2d121.15946571079661!3d13.951966986404628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6c90b423de1f%3A0x6ed130e73cbaa0c9!2sMaquiling%20Builders%20Depot%20-%20Lipa%20Branch!5e0!3m2!1sen!2sph!4v1684991015061!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showBatangas" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7247257756867!2d121.06105131079376!3d13.795460886545055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0fc213354ef9%3A0xb6583f8ec074ea82!2sMaquiling%20Builders%20Depot%20-%20Batangas%20Branch!5e0!3m2!1sen!2sph!4v1684991138498!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showRosario" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.934493744524!2d121.18961691079468!3d13.84297058650237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1418cb8d1ee1%3A0x77ecc0c6a014d2c6!2sMaquiling%20Builders%20Depot%20-%20Rosario%20Branch!5e0!3m2!1sen!2sph!4v1684991343729!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showLucena" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.0164902230326!2d121.5681002107969!3d13.95762378639958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4c7001100a7b%3A0xc813f9de053d530e!2sMaquiling%20Builders%20Depot%20-%20Lucena%20Branch!5e0!3m2!1sen!2sph!4v1684991447322!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showPagsanjan" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.688874299581!2d121.44269021080251!3d14.271357986119208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e3e9fd6d536b%3A0x88d5f27cb4aefab9!2sMaquiling%20Builders%20Depot%20-%20Pagsanjan%20Branch!5e0!3m2!1sen!2sph!4v1684991501259!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div v-if="location.showDasmarinas" class="w-full border-2">
        <iframe class="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.4265582065977!2d120.9879482108029!3d14.286630986105704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d785686d6c11%3A0xea7d9ac04d31e388!2sMaquiling%20Builders%20Depot%20-%20Dasmari%C3%B1as%20Branch!5e0!3m2!1sen!2sph!4v1684991552216!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <!-- <div v-if="location.showNasugbu" class="w-full border-2">
        
      </div> -->

      <div v-if="showSelection" class="flex flex-col w-screen justify-center items-center">
        <div class="flex justify-center w-11/12 items-center h-full gap-10 bg-[#ffc619] text-white p-10 rounded-3xl flex-wrap">
            <div class="w-[200px] sm:w-auto sm:justify-start h-full flex flex-col gap-5 text-[#153040] flex-shrink-0">
                <h1 class="text-3xl font-bold">Select a Store</h1>
                    <!-- <p class="text-xl font-semibold">Choose a store near you.</p> -->
                <p class="text-xl font-semibold">A hub for builders to find the tools and resources they need to turn their vision into a reality.</p>
            </div>
            
            <div class="flex gap-10 flex-wrap justify-center items-center">
                <div @click="location.showLB = true, showSelection = false, changeTextLocation('Los Banos')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                    <div class="flex flex-col gap-10 items-center justify-center h-full">
                        <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                        <p class="text-2xl">Los Banos</p>
                    </div>
                </div>

            <div @click="location.showCalamba = true, showSelection = false, changeTextLocation('Calamba')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Calamba</p>
                </div>
            </div>

            <div @click="location.showLipa = true, showSelection = false, changeTextLocation('Lipa City')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Lipa City</p>
                </div>
            </div>

            <div @click="location.showBatangas = true, showSelection = false, changeTextLocation('Batangas')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Batangas</p>
                </div>
            </div>

            <div @click="location.showRosario = true, showSelection = false, changeTextLocation('Rosario')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Rosario</p>
                </div>
            </div>

            <div @click="location.showLucena = true, showSelection = false, changeTextLocation('Lucena')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Lucena</p>
                </div>
            </div>
            <div @click="location.showPagsanjan = true, showSelection = false, changeTextLocation('Pagsanjan')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Pagsanjan</p>
                </div>
            </div>
            <div @click="location.showDasmarinas = true, showSelection = false, changeTextLocation('Dasmarinas')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Dasmarinas</p>
                </div>
            </div>
            <!-- <div @click="location.showNasugbu = true, showSelection = false, changeTextLocation('Nasugbu')" class="bg-[#182833] w-72 h-72 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer rounded-3xl p-7 text-center flex-shrink-0">
                <div class="flex flex-col gap-10 items-center justify-center h-full">
                    <p class="text-2xl font-bold">Maquiling Builders Depot</p>
                    <p class="text-2xl">Nasugbu</p>
                </div>
            </div> -->
            </div>
        </div>
      </div>
        
    </main>
  
</template>

<script>
export default {
    data() {
        return {
            showSelection: true,
            location: ({
                showLB: false,
                showCalamba: false,
                showLipa: false,
                showBatangas: false,
                showRosario: false,
                showLucena: false,
                showPagsanjan: false,
                showDasmarinas: false,
                showNasugbu: false,
            }),

            textLocation: 'Store Locations'
        }
    },

    methods: {
        changeTextLocation(text){
            this.textLocation = "Store Location: ";
            this.textLocation += text;
        },

        chooseLocation(){
            this.textLocation = "Store Locations";
            this.showSelection = true;

            for(const key in this.location){
                this.location[key] = false;
            }
        }
    }
}
</script>

<style>

</style>