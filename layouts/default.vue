<template>
  <div class="bg-background-main dark:bg-neutral-900 min-h-screen pb-8">
    <Nuxt class="min-h-screen overflow-x-hidden" />
    <footer class="text-center text-gray-300 space-x-4">
      <div>
        <p>Copyright © {{ year }} niwla23</p>
        <div>
          <nuxt-link class="underline" to="/impressum">Impressum</nuxt-link>
          <nuxt-link class="underline" to="/privacy">Datenschutz</nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
})
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
