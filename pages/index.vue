<template>
  <section>
    <div class="w-full flex flex-row place-content-end">
      <navbar class="fixed top-0 z-50" :white="true" />
    </div>
    <Header />
    <section>
      <a id="skills"></a>
      <SectionHeader class="relative z-10">Skills</SectionHeader>
      <div class="w-full flex justify-center">
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-12 p-16 md:p-18 xl:p-32 justify-evenly w-fit">
          <Skill title="Backend" text="Go, Python, Node" main-color="#3366ff" background-color="#80eec0"
            :main-rotation="230" :background-rotation="165" tag="python" />
          <Skill title="Frontend" text="Vue, React, Tailwind, Typescript" main-color="#80eec0" background-color="#3366ff"
            :main-rotation="267" :background-rotation="181" tag="web-frontend" />
          <Skill title="Embedded" text="PlatformIO, Arduino IDE, ESP32, ESP8266" main-color="#f2841b"
            background-color="#61dafb" :main-rotation="63" :background-rotation="264" tag="embedded" />
          <Skill title="Linux" text="Debian, Fedora, Docker" main-color="#61e473" background-color="#f2841b"
            :main-rotation="19" :background-rotation="58" tag="linux" />
          <Skill title="IT Automation" text="Ansible, Docker Compose, Python" main-color="#131211"
            background-color="#333333" :main-rotation="160" :background-rotation="52" text-color="#fff"
            tag="it-automation" />
          <Skill title="3D-Druck" text="Modelling, Slicing und Druck" main-color="#dbdd3c" background-color="#61dafb"
            :main-rotation="323" tag="3d-druck" />
          <Skill title="IoT" text="MQTT, openHAB, Influx, Grafana" main-color="#fff14b" background-color="#4b59ff"
            :main-rotation="67" tag="iot" />
          <Skill title="Hardware" text="Electronics, Soldering, ..." main-color="#00a142" background-color="#005322"
            :main-rotation="234" tag="loeten" />
        </div>
      </div>
    </section>
    <section>
      <a id="projects"></a>
      <SectionHeader>Projects</SectionHeader>
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
      .sortBy('createdAt', 'desc')
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
