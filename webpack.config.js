const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {

  entry: `${SRC_DIR}/index.jsx`,
  output: {
    publicPath: '/',
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env', {'targets': 'defaults'}]],
        },
      }
    ]
  }
};
