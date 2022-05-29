import highlightjs from 'highlight.js'
import getRoutes from './utils/getRoutes'

const wrap = (code, lang) =>
  `<pre><code class="hljs ${lang}">${code}</code></pre>`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alwins Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Software, Hardware, 3D-Druck und Linux',
      },
      {
        name: 'google-site-verification',
        content: 'kZyFgxt9LwbTUaFhYPhSFiW7S_Pmew7XT9jktc1WSZc',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', 'highlight.js/styles/github-dark.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/fontawesome',
    '@nuxt/image',
    '@nuxt/postcss8',
  ],

  image: {
    presets: {
      thumbnail: {
        modifiers: {
          format: 'jpg',
          width: 340,
          height: 256,
        },
      },
      blockImage: {
        modifiers: {
          format: 'webp',
        },
      },
    },
  },

  fontawesome: {
    icons: {
      brands: ['faGithub', 'faGitlab', 'faInstagram'],
      regular: ['faArrowAltCircleDown'],
      solid: ['faBars', 'faTimes'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://niwla23.github.io',
    gzip: true,
    routes() {
      return getRoutes()
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      highlighter(rawCode, lang) {
        if (!lang) {
          return wrap(highlightjs.highlightAuto(rawCode).value, lang)
        }
        return wrap(
          highlightjs.highlight(rawCode, { language: lang }).value,
          lang
        )
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  },
}
