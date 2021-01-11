const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: process.env.NODE_ENV === 'production' ? {} : false,
    cssnano: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    '@fullhuman/postcss-purgecss': {
      contentFunction(sourceInputFileName) {
        const component = path.basename(path.dirname(sourceInputFileName));
        return [
          `./src/components/${component}/template.js`,
          `./src/components/${component}/index.js`,
        ];
      },
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches =
          content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      keyframes: true,
      fontFace: true,
      safelist: [':host', '::slotted'],
    },
  },
};
