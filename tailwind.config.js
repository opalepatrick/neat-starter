const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./**/*.html",
    './src/**/*.html', './src/**/*.js'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'serif'],
        display: ['"Work Sans"', 'serif'],
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
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography")
  ],
  variants: {
    extend: {
      fontFamily: ['font-sans !important',  'font-display !important'],
    },
  },
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
          "primary": "#241b4d",
          "secondary": "#3e2e84",
          "accent": "#fde047",
          "neutral": "#5e46c9",
          "base-100": "#ffffff",
          "info": "#00c4cc",
          "success": "#1CB575",
          "warning": "#F1DA74",
          "error": "#E6334B",
        },
      }
    ],
  },
};
