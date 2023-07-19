<template>
  <div class="h-screen w-full bg-none">
    <nuxt-img src="/background2.jpg" class="absolute w-full h-[120%] md:h-[110]vh object-cover" />
    <div class="h-full w-full bg-transparent flex justify-center items-center p-8 text-gray-900 z-50">
      <div
        class="flex flex-col md:flex-row gap-8 max-w-sm md:max-w-2xl md:items-center bg-teal-100 p-8 w-full md:mb-0 rounded-xl transform hover:scale-95 transition duration-1000 ease-in-out">
        <nuxt-img src="/alwin.jpeg" alt="alwin"
          class="flex-1 rounded-full tranform transition duration-1000 ease-in-out hover:rotate-2 w-full md:w-1/2" />
        <div class="flex-1">
          <h1 class="text-4xl font-semibold tracking-tight">Alwin Lohrie</h1>
          <p>{{ age }} Jahre alt</p>
          <p>Maker</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    age() {
      return (
        Math.round(new Date().valueOf() - new Date(2006, 4, 24).valueOf()) /
        31536000000
      ).toFixed(2)
    },
  },
})
</script>

