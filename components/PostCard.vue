<template>
  <article class="bg-white dark:bg-slate-800 dark:text-white article-card cursor-pointer shadow-lg rounded-md">
    <nuxt-link :to="'/posts/' + article.slug" class="">
      <figure class="relative">
        <div class="overflow-hidden">
          <nuxt-img preset="thumbnail" :src="article.image" class="object-cover h-64 w-full article-image rounded-t-md" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <h3 class="absolute bottom-0 text-lg p-4 text-white">{{ article.title }} <span v-if="article.featured"
            class="bg-primary p-2 rounded-full text-xs">Featured</span></h3>
      </figure>

      <div class="p-4">
        <summary class="block">
          {{ article.description }}
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

.article-card:hover>div>.article-image {
  transform: scale(1.2) rotate(4deg);
}

.article-card:hover {
  transform: scale(1.04);
}
</style>
