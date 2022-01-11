const commonConfig = require('./webpack.common');

const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

devConfig = {
  devServer: {
    hot: true,
    open: true
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(vue|[jt]sx?)$/i,
        exclude: '/node_modules',
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel']
            }
          }
        ]
      }
    ]
  },
  plugins: [new ReactRefreshWebpackPlugin()]
};

module.exports = merge(commonConfig, devConfig);
