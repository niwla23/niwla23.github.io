<template>
  <section>
    <div class="w-full flex flex-row place-content-end">
      <navbar class="fixed top-0 z-50" />
    </div>
    <div class="p-8 md:p-32 md:pt-16">
      <h1 class="dark:text-white text-3xl pb-4">Blog</h1>
      <div class="grid md:grid-cols-4 gap-4">
        <post-card
          v-for="project in projects"
          :key="project.path"
          :article="project"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const projects = await $content('posts')
      .only(['title', 'image', 'tags', 'slug', 'description'])
      .sortBy('title')
      .fetch()

    return {
      projects,
    }
  },
})
</script>
