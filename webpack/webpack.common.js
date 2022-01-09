const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const theCommonConfig = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'le cvlevc'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

module.exports = theCommonConfig;
