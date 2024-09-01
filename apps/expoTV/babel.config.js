const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      [
        'module-resolver',
        {
          alias: {
            ['@gluestack/app']: path.join(
              __dirname,
              '../../packages/app/screens'
            ),
            ['screens']: path.join(__dirname, '../../packages/screens'),
            ['ui']: path.join(__dirname, '../../packages/ui'),
          },
        },
      ],
    ],
  };
};
