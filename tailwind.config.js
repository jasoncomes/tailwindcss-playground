module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/html/**/*.html'],
    options: {
      safelist: [],
      blocklist: [],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
