const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
const fs = require('fs');

const basePath = process.env.NODE_ENV === 'production' ? './' : '/react-playground/';

const setWebpackPublicPath = publicPath => config => {
  fs.writeFile('./config.json', JSON.stringify(config, null, 3), err => {
    if (!err) {
      console.log('输出');
    }
  });

  if (publicPath) {
    // eslint-disable-next-line no-param-reassign
    config.output.publicPath = publicPath;
  }
  return config;
};

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, './src'),
    '@utils': path.resolve(__dirname, './src/utils'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  setWebpackPublicPath(basePath),
);
