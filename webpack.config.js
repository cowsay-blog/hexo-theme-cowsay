module.exports = {
  mode: 'production',
  entry: [
    'themes/cowsay/source/js/cowsay.js',
    'themes/cowsay/source/js/cowsay-body.js',
    'themes/cowsay/source/js/cowsay-post.js'
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
