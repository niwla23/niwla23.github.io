<template>
  <section class="bg-background-main">
    <header class="h-screen">
      <nuxt-img
        src="/background.jpg"
        class="h-full w-full object-cover absolute z-0"
      />
      <figure class="z-50 absolute ml-16 mt-64 text-white">
        <h1 class="text-6xl mr-64">Alwin Lohrie</h1>
        <p class="text-xl">Hard und Software</p>
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
      <svg
        class="absolute h-full w-full md:w-6/12 -m-1"
        style="-webkit-print-color-adjust: exact"
        version="1.1"
        viewBox="305.59 1690.6 1075.8 1609.8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 1379 1693 l -190.86 291.42 l -197.42 593.11 l -682.72 720.47 v -1605 h 1071 z"
          fill="#07666e"
          fill-opacity=".88"
        />
      </svg>
      <svg
        class="absolute w-full h-32 bottom-0"
        version="1.1"
        viewBox="303.59 2945.6 1923.8 230"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2225 3064.2-365.57-89.603-307.48 89.603-402.63-116.15-391.61 158.19-248.59-135.45-203.12 135.45v69.72h1919z"
          fill="#dfebff"
        />
      </svg>
      <figure
        class="absolute bottom-0 flex flex-row w-full justify-center pb-48 animate-scroll-down"
      >
        <font-awesome-icon
          class="text-white text-6xl"
          :icon="['far', 'arrow-alt-circle-down']"
        />
      </figure>
    </header>

    <section>
      <SectionHeader>Skills</SectionHeader>
      <div class="grid md:grid-cols-4 gap-16 p-8 md:p-32">
        <Skill
          title="Python"
          text="Backend (Flask), Automation"
          main-color="#3366ff"
          background-color="#80eec0"
          :main-rotation="230"
          :background-rotation="165"
        />
        <Skill
          title="Vue.js"
          text="NuxtJS, Tailwind, Typescript"
          main-color="#80eec0"
          background-color="#3366ff"
          :main-rotation="267"
          :background-rotation="181"
        />
        <Skill
          title="React Native"
          text="Mobile Apps"
          main-color="#61dafb"
          background-color="#80eec0"
          :main-rotation="265"
          :background-rotation="342"
        />
        <Skill
          title="Embedded"
          text="PlatformIO, Arduino IDE, ESP32, ESP8266"
          main-color="#f2841b"
          background-color="#61dafb"
          :main-rotation="63"
          :background-rotation="264"
        />
        <Skill
          title="Linux"
          text="Debian, Ubuntu, CentOS, Manjaro, Docker"
          main-color="#61e473"
          background-color="#f2841b"
          :main-rotation="19"
          :background-rotation="58"
        />
        <Skill
          title="IT Automation"
          text="Ansible, Docker Compose, Python"
          main-color="#131211"
          background-color="#333333"
          :main-rotation="160"
          :background-rotation="52"
          text-color="#fff"
        />
        <Skill
          title="3D-Druck"
          text="Modelling, Slicing und Druck"
          main-color="#dbdd3c"
          background-color="#61dafb"
          :main-rotation="323"
        />
        <Skill
          title="Web-Design"
          text="HTML, CSS, Figma, Inkscape, Penpot"
          main-color="#da55f4"
          background-color="#8061fb"
          :main-rotation="247"
        />
        <Skill
          title="Datenbanken"
          text="PostgreSQL, Redis, MySQL, MongoDB"
          main-color="#7aaee3"
          background-color="#e3af7a"
          :main-rotation="247"
        />
        <Skill
          title="IoT"
          text="MQTT, openHAB, Influx, Grafana"
          main-color="#fff14b"
          background-color="#4b59ff"
          :main-rotation="67"
        />
        <Skill
          title="CI/CD"
          text="GitLab CI, GitHub Actions"
          main-color="#ff5252"
          background-color="#ac0000"
          :main-rotation="309"
        />
        <Skill
          title="Löten"
          text="THT"
          main-color="#00a142"
          background-color="#005322"
          :main-rotation="234"
        />
      </div>
    </section>
    <section>
      <SectionHeader>Projekte</SectionHeader>
      <div class="grid md:grid-cols-4 gap-4 p-8 md:p-32">
        <figure
          v-for="project in projects"
          :key="project.path"
          class="bg-white article-card cursor-pointer shadow-lg rounded-md"
        >
          <div class="overflow-hidden">
            <nuxt-img
              preset="thumbnail"
              :src="'/postthumbs/' + project.image"
              class="object-cover h-64 w-full article-image rounded-md"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg pt-2 pb-2">{{ project.title }}</h3>
            <summary class="block">
              {{ project.description }}
            </summary>
          </div>
        </figure>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, params }) {
    const projects = await $content('projects')
      .only(['title', 'image', 'tags', 'slug', 'description'])
      .sortBy('title')
      .fetch()

    return {
      projects,
    }
  },
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
