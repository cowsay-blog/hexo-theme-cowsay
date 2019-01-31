/* global hexo */
hexo.extend.helper.register('post_tags', function (item) {
  return this.list_tags(item.tags, {
    show_count: false,
    separator: ' ',
    transform: s => '#' + s,
    style: 'none'
  })
})
