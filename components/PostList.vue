<template>
  <section>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <post-card
        v-for="article in articles"
        :key="article.path"
        :article="article"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
})
</script>
