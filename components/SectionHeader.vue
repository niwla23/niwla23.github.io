<template>
  <section class="w-full flex justify-center section-header">
    <div style="width: fit-content">
      <h2 class="text-3xl text-center">
        <slot />
      </h2>
      <figure class="w-auto h-2 bg-primary underline" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.underline {
  transition: all 0.7s ease-in-out;
}

.section-header:hover>div>.underline {
  transform: translateX(55px);
}</style>
