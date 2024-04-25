/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {min:'600px',max :'899px'},
      // => @media (min-width: 640px) { ... }

      'md':{min:'900px',max :'1199px'},
      // => @media (min-width: 768px) { ... }

      'lg': {min:'1200px',max :'1535px'},
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      screens: {
        'xm': {min:'0px',max :'599px'},
      },
    },
  },
  plugins: [],
}

