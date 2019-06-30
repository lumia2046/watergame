const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /* 入口 */
  entry: path.join(__dirname, 'src/app.js'),

  /* 输出 */
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: 8081,
    contentBase: path.join(__dirname, './'),
    historyApiFallback: true,
    host: '0.0.0.0',
    // proxy: {
    //   '/data-quality-engine': {
    //     target: 'http://127.0.0.1:8090',
    //     pathRewrite: {'^' : ''},
    //     secure: true,// 设置支持https协议的代理
    //   }
    // }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'water',
      hash: true,
      template: 'src/index.html',
      // 禁止横屏
      meta: {
        "screen-orientation": 'portrait',
        "x5-orientation": 'portrait',
      }
    })
  ],

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      img: path.join(__dirname, 'src/assets/img'),
      style: path.join(__dirname, 'src/assets/style'),
    }
  },
};