function excerpt (post, options) {
  const { triple_dot: tripleDot } = Object.assign({}, { triple_dot: true }, options)
  post = post || this.page

  if (!post) return ''

  const excerpt = post.excerpt && post.excerpt.trim()
  const content = post.content && post.content.trim()

  if (excerpt) return excerpt + (tripleDot && post.more.trim() ? '...' : '')
  if (content) {
    const excerptLen = this.theme.excerpt || 120
    const hasMore = content.length > excerptLen
    return this.strip_html(content)
      .substr(0, excerptLen) +
        (tripleDot && hasMore ? '...' : '')
  }

  return ''
}

/* global hexo */
try {
  hexo.extend.helper.register('excerpt', excerpt)
} catch (e) {
}

if (module) {
  module.exports = excerpt
}
