/* global hexo */
hexo.extend.helper.register('post_categories', function (item) {
  return this.list_categories(item.categories, {
    show_count: false,
    separator: ' &gt; ',
    style: 'none'
  })
})
