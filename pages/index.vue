<template>
  <section class="bg-background-main">
    <header class="h-screen">
      <img
        src="/background.jpg"
        class="h-full w-full object-cover absolute z-0"
      />
      <figure class="z-50 absolute ml-16 mt-48 text-white">
        <h1 class="text-6xl">Alwin Lohrie</h1>
        <p class="text-xl">Hard und Software</p>
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
    </header>

    <section>
      <h2 class="text-3xl text-center">Skills</h2>
      <div class="grid md:grid-cols-4">
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
          :background-rotation="163"
        />
        <Skill
          title="Web-Design"
          text="HTML, CSS, Figma, Inkscape, Penpot"
          main-color="#da55f4"
          background-color="#8061fb"
          :main-rotation="247"
          :background-rotation="291"
        />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
