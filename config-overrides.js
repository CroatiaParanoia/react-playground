const {
  override,
  fixBabelImports,
  addWebpackAlias,
  setWebpackPublicPath
} = require('customize-cra');
const path = require('path');
const fs = require('fs');

const basePath = process.env.NODE_ENV === 'production' ? './' : '';

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, './src'),
    '@utils': path.resolve(__dirname, './src/utils')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  setWebpackPublicPath(basePath)
);
