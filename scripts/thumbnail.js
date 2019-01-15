const icon = require('./icon')

/* global hexo */
hexo.extend.helper.register('thumbnail', function () {
  if (this.is_post() && this.page.thumbnail) {
    return this.page.thumbnail
  }
  return this.theme.logo || icon.call(this).href
})
