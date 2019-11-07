const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const CSS_FILE = process.env.npm_package_dsccViz_cssFile
const MANIFEST = 'manifest.json'
const INDEX_JSON = 'index.json'

const IS_DEV = process.env.NODE_ENV !== 'production'

module.exports = [
  {
    mode: IS_DEV ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join('src', CSS_FILE), to: '.' },
        { from: path.join('src', MANIFEST), to: '.' },
        { from: path.join('src', INDEX_JSON), to: '.' },
      ]),
    ],
    // Loaders configuration -> ADDED IN THIS STEP
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json'],
    },
  },
]
