const excerpt = require('./excerpt')

/* global hexo */
hexo.extend.helper.register('desc', function () {
  if (this.is_post()) {
    if (this.page.description) return this.page.description
    return excerpt.call(this) || this.page.title + ' - ' + this.config.author
  }

  if (this.is_archive()) {
    const year = this.page.year || 'All'
    const month = this.page.month ? '-' + this.page.month : ''
    return 'Archive: ' + year + month
  }

  return this.config.description || 'A Blog Powered By Hexo'
})
