<template>
  <div>
    <div class="w-full flex flex-row place-content-end">
      <navbar class="fixed top-0 z-50" />
    </div>
    <section class="w-full flex flex-row justify-center">
      <main class="w-10/12 sm:w-8/12 mt-16">
        <header class="relative overflow-hidden mb-4">
          <h1 class="font-bold text-3xl text-white">
            {{ article.title }}
          </h1>
        </header>
        <nuxt-content
          :document="article"
          class="prose prose-green dark:prose-invert max-w-full prose-pre:p-0"
        />
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
export default Vue.extend({
  components: { Navbar },
  async asyncData({ $content, params }) {
    const article = await $content('impressum').fetch()

    return { article }
  },
})
</script>
