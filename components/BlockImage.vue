<template>
  <section class="flex flex-row w-full justify-center" style="height: 700px">
    <nuxt-picture
      preset="blockImage"
      :src="src"
      class="rounded-md"
      fit="inside"
      height="700"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
})
</script>
