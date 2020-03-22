const {
  override, fixBabelImports, addWebpackAlias, setWebpackPublicPath,
} = require('customize-cra');
const path = require('path');

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
