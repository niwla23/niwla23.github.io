<template>
  <nav class="p-6 bg-primary-transparent">
    <ul class="flex flex-row justify-between text-lg uppercase text-white">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/posts">Blog</nuxt-link></li>
      <li>
        <nuxt-link :to="{ path: '/', hash: '#skills' }">Skills</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ path: '/', hash: '#projects' }">Projekte</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
