module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    'postcss-reporter': {
      clearReportedMessages: true,
    },
  },
};
