/* global hexo */
// const urlForV1 = hexo.extend.helper.get('url_for')

function normalizeUrl (url) {
  return url.replace(/index\.html+$/, '') || '.'
}

hexo.extend.helper.register('url_for', function (url = '/') {
  if (/^(http|https):\/\/*/gi.test(url)) {
    return normalizeUrl(url)
  }

  // relative url from the root
  url = normalizeUrl(this.relative_url('', url))

  return '/' + url.replace(/^\.\/?/, '')
})
