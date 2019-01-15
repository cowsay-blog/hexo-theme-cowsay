/* global hexo */
hexo.extend.helper.register('nav_title', function () {
  return this.config.title.split('')
    .map(letter => letter.trim())
    .map(letter => letter ? `<span>${letter}</span>` : '')
    .join('')
})
