const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = (process.env.PORT || 3000)

module.exports = {
  entry: './src/app/js/index.js',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js'
  },
  devServer: {
    port: port
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      filename: `${__dirname}/index.html`
    })
  ]
}
