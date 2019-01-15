/* global hexo */
hexo.extend.helper.register('site_title', function () {
  let siteTitle = this.page.title
  if (this.is_archive()) {
    siteTitle = this.__('archive')
    if (this.is_month()) {
      siteTitle += `: ${this.page.year}-${this.page.month}`
    } else if (this.is_year()) {
      siteTitle += `: ${this.page.year}`
    }
  } else if (this.is_category()) {
    siteTitle = `${this.__('category')}: ${this.page.category}`
  } else if (this.is_tag()) {
    siteTitle = `${this.__('tag')}: ${this.page.tag}`
  }

  if (siteTitle) {
    return `${siteTitle} | `
  } else {
    return ''
  }
})
