module.exports = {
  // mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#07666e',
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
