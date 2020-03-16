const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack(config) {
    const resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin(),
      ],
    };

    return { ...config, resolve };
  },
};
