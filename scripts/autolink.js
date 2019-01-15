/* global hexo */

function toKebabCase (str = '') {
  return str.replace(/[A-Z]/g, matched => `-${matched.toLowerCase()}`)
}

hexo.extend.helper.register('autolink', function (url, text = url, attr = {}) {
  url = this.url_for(url)
  const isExternal = /^(http|https):\/\/*/gi.test(url)
  attr.href = url
  attr.target = attr.target || (isExternal ? '_blank' : '_self')
  const attrList = Object.keys(attr).map(k => `${toKebabCase(k)}="${attr[k]}"`).join(' ')
  return `<a ${attrList}>${text}</a>`
})
