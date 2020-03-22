const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

const setWebpackPublicPath = publicPath => config => {
  // eslint-disable-next-line no-param-reassign
  config.output.publicPath = publicPath;
  return config;
};

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@utils': path.resolve(__dirname, './src/utils'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  setWebpackPublicPath('./'),
);
