const theCommonConfig = require('./webpack.common');

const { merge } = require('webpack-merge');

theProdConfig = {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(vue|[jt]sx?)$/i,
        exclude: '/node_modules',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
    publicPath: './'
  }
};

module.exports = merge(theCommonConfig, theProdConfig);
