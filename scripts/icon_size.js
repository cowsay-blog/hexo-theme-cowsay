const path = require('path')

function getIconSize (icon) {
  if (typeof icon !== 'string') return

  const filename = path.basename(icon)
  const matched = filename.match(/(\d+)x(\d+)/)
  if (matched) {
    return {
      width: matched[1],
      height: matched[2]
    }
  }
}

try {
  /* global hexo */
  hexo.extend.helper.register('icon_size', getIconSize)
} catch (e) { }

if (module) {
  module.exports = getIconSize
}
