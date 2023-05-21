module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend:{
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#f4f4f6",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
      },
    },
    screens: {
      'iphone11': '360px',
      'xxsm': '300px',
      'xsm': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'laptopG': '1440px',
      '4k': '2560px'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
