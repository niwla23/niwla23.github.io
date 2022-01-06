<template>
  <figure class="relative">
    <svg
      :style="{ '--transform-rotate': backgroundRotation + 'deg' }"
      version="1.1"
      class="absolute"
      viewBox="467 3242 480.84 481.09"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m814.37 3352.5c83.333 41.087 69.007 156.52 22.996 237.46-46.033 80.981-178.57 95.11-237.46 22.996-60.054-73.538-92.884-175.94-22.996-237.46 68.773-60.536 153.95-64.169 237.46-22.996z"
        :fill="backgroundColor"
      />
    </svg>
    <div class="absolute grid place-items-center h-full w-full z-50">
      <div class="text-center w-48">
        <h3 class="text-3xl font-bold" :style="{ color: textColor }">
          {{ title }}
        </h3>
        <p :style="{ color: textColor }">{{ text }}</p>
      </div>
    </div>
    <svg
      :style="{ '--transform-rotate': mainRotation + 'deg' }"
      version="1.1"
      viewBox="467 3242 480.84 481.09"
      class="transform"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m814.37 3352.5c83.333 41.087 69.007 156.52 22.996 237.46-46.033 80.981-178.57 95.11-237.46 22.996-60.054-73.538-92.884-175.94-22.996-237.46 68.773-60.536 153.95-64.169 237.46-22.996z"
        :fill="mainColor"
      />
    </svg>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    mainColor: {
      required: true,
      type: String,
    },
    backgroundColor: {
      required: true,
      type: String,
    },
    textColor: {
      default: 'black',
      type: String,
    },
    mainRotation: {
      required: true,
      type: Number,
    },
    backgroundRotation: {
      required: true,
      type: Number,
    },
  },
})
</script>
