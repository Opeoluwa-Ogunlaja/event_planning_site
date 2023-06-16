/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-blue-grad': 'linear-gradient(to bottom right, rgb(194, 239, 245), rgb(64, 158, 255))',
        'primary-yellow-grad': 'linear-gradient(rgb(255, 228, 196), rgb(255, 210, 0))',
      },
      backgroundColor: {
        'light-blue': 'hsla(187, 70%, 86%, 100%)',
        'greyish-yellow': 'hsla(40, 14%, 96%, 100%)',
      },
      boxShadowColor: {
        'primary': 'hsla(187, 100%, 41%, 50%)'
      },
      borderColor: {
        'primary': 'rgb(64, 158, 255)',
      },
      textColor: {
        dark: 'hsla(0, 0%, 13%, 60%)',
        'highlight-blue': 'hsla(211, 91%, 62%, 100%)',
        'highlight-yellow': 'hsla(49, 100%, 50%, 100%)',
        light: 'hsla(0, 0%, 13%, 40%)',
        normal: 'hsla(0, 0%, 13%, 100%)'
      }
    },
  },
  plugins: [],
}

