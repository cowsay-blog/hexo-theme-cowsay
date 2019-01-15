/* global hexo */
hexo.extend.helper.register('each_post', function (posts) {
  const ret = []
  if (posts && typeof posts.each === 'function') {
    posts.each(function (item) {
      ret.push(item)
    })
  }
  return ret
})
