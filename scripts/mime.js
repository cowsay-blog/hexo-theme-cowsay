const path = require('path')
const mime = require('mime')

/* global hexo */
hexo.extend.helper.register('mime', function getMimeType (file) {
  const filename = path.basename(file)
  return mime.getType(filename)
})
