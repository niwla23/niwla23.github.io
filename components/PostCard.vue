<template>
  <article
    class="bg-white dark:bg-slate-800 dark:text-white article-card cursor-pointer shadow-lg rounded-md"
  >
    <nuxt-link :to="'posts/' + article.slug" class="">
      <div class="overflow-hidden">
        <nuxt-img
          preset="thumbnail"
          :src="article.image"
          class="object-cover h-64 w-full article-image rounded-md"
        />
      </div>
      <div class="p-4">
        <h3 class="text-lg pt-2 pb-2">{{ article.title }}</h3>
        <summary class="block">
          {{ article.description }} {{article.image}}
        </summary>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['article'],
})
</script>

<style scoped>
.article-image,
.article-card {
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

.article-card:hover > div > .article-image {
  transform: scale(1.2) rotate(4deg);
}
.article-card:hover {
  transform: scale(1.04);
}
</style>
