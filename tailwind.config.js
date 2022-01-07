module.exports = {
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'media',

  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#07666e',
        'primary-transparent': 'rgba(7, 102, 110, 0.8)',
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
