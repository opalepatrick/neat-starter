const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.html"],
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    container: {
      center: true,
    },
    // extend: {
    //   colors: {},
    // },
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        playfair: "Playfair"
      },
      fontSize: {
        '10xl': '10rem'
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
  variants: {},
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        fhtt: {
          "primary": "#0ea5e9",
          "secondary": "#84cc16",
          "accent": "#fde047",
          "neutral": "#2B232F",
          "base-100": "#F8F9FC",
          "info": "#96B3ED",
          "success": "#1CB575",
          "warning": "#F1DA74",
          "error": "#E6334B",
        },
      }
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
};
