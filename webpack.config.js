module.exports = {
  mode: 'production',
  entry: [
    'js/cowsay.js',
    'js/cowsay-body.js',
    'js/cowsay-post.js'
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
