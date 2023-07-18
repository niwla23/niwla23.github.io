<template>
  <section>
    <div class="w-full flex flex-row place-content-end">
      <navbar class="fixed top-0 z-50" />
    </div>
    <div class="p-8 md:p-32 md:pt-16">
      <h1 class="text-3xl pb-4">
        {{ $route.params.tag.toUpperCase() }}
      </h1>
      <post-list :articles="projects" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'
export default Vue.extend({
  components: { PostList },
  async asyncData({ $content, params }) {
    const projects = await $content('posts')
      .where({ tags: { $contains: params.tag } })
      .only(['title', 'image', 'tags', 'slug', 'description'])
      .sortBy('title')
      .fetch()

    return {
      projects,
    }
  },
})
</script>
