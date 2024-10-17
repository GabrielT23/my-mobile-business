module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', 
        {
          root: ["./src"],
          alias: {
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@layouts': './src/layouts',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@screens': './src/screens',
            '@dtos': './src/dtos',
          }
        }
      ]
    ]
  };
};
