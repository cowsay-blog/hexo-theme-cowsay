const favicons = require('./favicons')

function icon () {
  const maxIcon = favicons.call(this).reduce((max, favicon) => {
    if (max) {
      const maxDim = max.sizes[0] * max.sizes[1]
      const favDim = favicon.sizes[0] * favicon.sizes[1]
      return maxDim >= favDim ? max : favicon
    }
    return favicon
  })
  return maxIcon ? maxIcon.href : '/favicon.ico'
}

/* global hexo */
try {
  hexo.extend.helper.register('icon', icon)
} catch (e) {
}

if (module) {
  module.exports = icon
}
