<template>
  <section>
    <header class="h-screen">
      <div class="w-full flex flex-row place-content-end">
        <navbar class="fixed top-0 z-50" />
      </div>
      <nuxt-img src="/background.jpg" class="h-full w-full object-cover absolute z-0" />
      <figure class="z-50 absolute ml-16 mt-32 sm:mt-64 text-white">
        <h1 class="text-6xl w-16 lg:w-auto">Alwin Lohrie</h1>
        <p class="text-xl">{{ age }} Jahre alt</p>
        <p class="text-xl">Walsrode</p>
        <p class="text-4xl">
          <a href="https://github.com/niwla23" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://gitlab.com/niwla2305" target="_blank">
            <font-awesome-icon :icon="['fab', 'gitlab']" />
          </a>
          <a href="https://instagram.com/niwla23" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </p>
      </figure>
      <svg class="absolute h-full w-full md:w-6/12 -m-1" style="-webkit-print-color-adjust: exact" version="1.1"
        viewBox="305.59 1690.6 1075.8 1609.8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m 1379 1693 l -190.86 291.42 l -197.42 593.11 l -682.72 720.47 v -1605 h 1071 z"
          class="fill-primary-transparent" />
      </svg>
      <svg class="absolute w-full h-32 bottom-0" version="1.1" viewBox="310.59 2945.6 1913.8 230"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2225 3064.2-365.57-89.603-307.48 89.603-402.63-116.15-391.61 158.19-248.59-135.45-203.12 135.45v69.72h1919z"
          class="fill-background-main dark:fill-neutral-900" />
      </svg>
      <figure class="absolute bottom-0 flex flex-row w-full justify-center pb-48 animate-scroll-down">
        <a href="#skills">
          <font-awesome-icon class="text-white text-6xl" :icon="['far', 'arrow-alt-circle-down']" />
        </a>
      </figure>
    </header>

    <section>
      <a id="skills"></a>
      <SectionHeader>Skills</SectionHeader>
      <div class="w-full flex justify-center">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-12 p-16 md:p-18 xl:p-32 justify-evenly w-fit">
          <Skill title="Python" text="Backend (Flask), Automation" main-color="#3366ff" background-color="#80eec0"
            :main-rotation="230" :background-rotation="165" tag="python" />
          <Skill title="Vue.js" text="NuxtJS, Tailwind, Typescript" main-color="#80eec0" background-color="#3366ff"
            :main-rotation="267" :background-rotation="181" tag="web-frontend" />
          <Skill title="React Native" text="Mobile Apps" main-color="#61dafb" background-color="#80eec0"
            :main-rotation="265" :background-rotation="342" tag="mobile-app" />
          <Skill title="Embedded" text="PlatformIO, Arduino IDE, ESP32, ESP8266" main-color="#f2841b"
            background-color="#61dafb" :main-rotation="63" :background-rotation="264" tag="embedded" />
          <Skill title="Linux" text="Debian, Ubuntu, CentOS, Manjaro, Docker" main-color="#61e473"
            background-color="#f2841b" :main-rotation="19" :background-rotation="58" tag="linux" />
          <Skill title="IT Automation" text="Ansible, Docker Compose, Python" main-color="#131211"
            background-color="#333333" :main-rotation="160" :background-rotation="52" text-color="#fff"
            tag="it-automation" />
          <Skill title="3D-Druck" text="Modelling, Slicing und Druck" main-color="#dbdd3c" background-color="#61dafb"
            :main-rotation="323" tag="3d-druck" />
          <Skill title="Web-Design" text="HTML, CSS, Figma, Inkscape, Penpot" main-color="#da55f4"
            background-color="#8061fb" :main-rotation="247" tag="design" />
          <Skill title="Datenbanken" text="PostgreSQL, Redis, MySQL, MongoDB" main-color="#7aaee3"
            background-color="#e3af7a" :main-rotation="247" tag="datenbanken" />
          <Skill title="IoT" text="MQTT, openHAB, Influx, Grafana" main-color="#fff14b" background-color="#4b59ff"
            :main-rotation="67" tag="iot" />
          <Skill title="CI/CD" text="GitLab CI, GitHub Actions" main-color="#ff5252" background-color="#ac0000"
            :main-rotation="309" tag="ci" />
          <Skill title="Löten" text="THT" main-color="#00a142" background-color="#005322" :main-rotation="234"
            tag="loeten" />
        </div>
      </div>
    </section>
    <section>
      <a id="projects"></a>
      <SectionHeader>Projekte</SectionHeader>
      <div class="p-8 md:p-16">
        <post-list :articles="projects" />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
  components: { Navbar },
  async asyncData({ $content }) {
    const projects = await $content('posts')
      .only(['title', 'image', 'tags', 'slug', 'description', 'createdAt', 'featured'])
      .sortBy('featured', "desc")
      .sortBy('createdAt')
      .fetch()

    return {
      projects,
    }
  },
  computed: {
    age() {
      return (
        Math.round(new Date().valueOf() - new Date(2006, 4, 24).valueOf()) /
        31536000000
      ).toFixed(2)
    },
  },
})
</script>
