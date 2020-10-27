const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|mjs|jsx|png|jp(e*)g|svg|gif)$/,
        enforce: 'pre',
        loader: 'eslint-loader', 'file-loader',
        options: {
          name: 'images/[hash]-[name].[ext]'
        };
      },
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        loader: 'css-loader'
      }
    ]
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  }
};