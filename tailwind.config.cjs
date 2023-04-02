/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
      },
      colors: {
        blue: {
          100: '#E7F0FE',
          200: '#9DB7DF',
          300: '#3D7DE4',
          400: '#3372D9',
          500: '#235BB5',
          600: '#144799',
          700: '#374E76',
        },
        'blue-border': '#A3C2F5',
        'blue-placeholder': '#5976B1',
        white: '#fff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
