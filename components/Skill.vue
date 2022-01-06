<template>
  <figure class="relative">
    <svg
      version="1.1"
      class="absolute pointer-events-none animation"
      viewBox="509.1181 3312.1851 340.785 342.584"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M679.4208822617061,3315.116290534777C769.8691914956071,3293.8634668260024,832.1833550225954,3392.0788942707045,848.1151704501045,3483.8105787231743C864.0547882316855,3575.587189438874,770.722426530618,3670.740894149316,679.4208822617061,3652.504866911572C586.315970064208,3633.9086461663946,495.87861227033625,3575.7239189501643,510.7265940733074,3483.8105787231743C525.3379103730899,3393.3622694892742,588.7844581086093,3336.4133159619046,679.4208822617061,3315.116290534777Z"
        :fill="backgroundColor"
      />
    </svg>
    <div
      class="absolute grid place-items-center h-full w-full z-50 pointer-events-none"
    >
      <div class="text-center w-48">
        <h3 class="text-3xl font-bold" :style="{ color: textColor }">
          {{ title }}
        </h3>
        <p :style="{ color: textColor }">{{ text }}</p>
      </div>
    </div>
    <svg
      :style="{ '--tw-rotate': mainRotation + 'deg' }"
      version="1.1"
      viewBox="509.1181 3312.1851 340.785 342.584"
      class="transform foreground"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M679.4208822617061,3315.116290534777C769.8691914956071,3293.8634668260024,832.1833550225954,3392.0788942707045,848.1151704501045,3483.8105787231743C864.0547882316855,3575.587189438874,770.722426530618,3670.740894149316,679.4208822617061,3652.504866911572C586.315970064208,3633.9086461663946,495.87861227033625,3575.7239189501643,510.7265940733074,3483.8105787231743C525.3379103730899,3393.3622694892742,588.7844581086093,3336.4133159619046,679.4208822617061,3315.116290534777Z"
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
  },
})
</script>

<style scoped>
.foreground {
  transition: transform 0.7s ease-in-out;
}
.foreground:hover {
  transform: rotate(360deg);
  transform: scale(0.8);
}

figure {
  transform: scale(1);
  transition: 10s all ease;
}

figure:hover {
  transform: scale(1.1);
  transition: 1s all ease;
}
</style>
