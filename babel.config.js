module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', {jsxImportSource: 'nativewind'}],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: './src',
          alias: {
            app: './src/app',
            screens: './src/screens',
            features: './src/features',
            shared: './src/shared',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
