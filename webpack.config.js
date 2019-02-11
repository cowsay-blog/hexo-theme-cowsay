module.exports = {
  mode: 'production',
  entry: {
    cowsay: 'js/cowsay.js',
    'cowsay-body': 'js/cowsay-body.js',
    'cowsay-post': 'js/cowsay-post.js'
  },
  output: {
    path: '/js/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
