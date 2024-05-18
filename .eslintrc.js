module.exports = {
  extends: 'next',
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  root: true,
  rules: {
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'always'],
    // we use 2 spaces to indent our code
    indent: ['error', 2],

    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
  },
};
