const DisqusJS = require('disqusjs')

if (window.CONFIG.comment && window.CONFIG.comment.use) {
  switch (window.CONFIG.comment.use) {
    case 'discusjs':
      /* eslint-disable */
      let dsqjs = new DisqusJS(window.CONFIG.comment.config)
      /* eslint-enable */
      break
    case 'commentbox':
      require('commentbox.io')(window.CONFIG.comment.config.project, window.CONFIG.comment.config)
      break
  }
}
