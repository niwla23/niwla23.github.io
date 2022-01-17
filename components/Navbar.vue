<template>
  <div :class="{ 'w-full': isMobile }" class="flex justify-end">
    <transition name="menu">
      <nav
        v-if="showMenu || !isMobile"
        class="p-6 bg-primary-transparent w-screen md:w-full"
      >
        <button
          v-if="isMobile"
          class="dark:text-white text-3xl p-4 absolute top-0 right-0"
          @click="toggleMenu"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <ul
          class="flex flex-row justify-between text-lg uppercase text-white"
          :class="{ 'flex-col': isMobile, 'space-x-2': !isMobile }"
        >
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/posts">Blog</nuxt-link></li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#skills' }">Skills</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#projects' }"
              >Projekte</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </transition>
    <button
      v-if="!showMenu | !isMobile"
      class="dark:text-white text-3xl p-4 absolute top-0 right-0"
      @click="toggleMenu"
    >
      <font-awesome-icon v-if="isMobile" :icon="['fas', 'bars']" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      showMenu: false,
      windowWidth: 1280,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 1s;
  transition-timing-function: ease-out;
  opacity: 1;
  transform: translateY(0px);
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
</style>
