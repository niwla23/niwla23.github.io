module.exports = {
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'media',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/posts/**/*.md',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#01a8b1',
        'primary-transparent': 'rgba(1, 168, 177, .8)',
        'secondary': '#016bb9',
        'tertiary': '#c1dbfe',
        'background-main': '#dfebff',
      },
      keyframes: {
        'lite-bounce': {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0%)' },
        },
      },
      animation: { 'scroll-down': 'lite-bounce 3s ease-in-out infinite' },
    },
  },
}
