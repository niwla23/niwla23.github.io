<template>
  <section class="w-full flex flex-row justify-center">
    <main class="w-10/12 sm:w-8/12 mt-16">
      <header class="relative overflow-hidden mb-4">
        <h1 class="absolute bottom-0 m-8 font-bold text-3xl text-white z-50">
          {{ article.title }}
        </h1>
        <nuxt-img
          width="1280"
          height="584"
          :src="'/postthumbs/' + article.image"
          class="object-cover h-96 w-full article-image rounded-md transform hover:scale-105 transition transi-duration-500"
        />
      </header>
      <nuxt-content
        :document="article"
        class="prose dark:prose-invert max-w-full"
      />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()

    return { article }
  },
})
</script>
