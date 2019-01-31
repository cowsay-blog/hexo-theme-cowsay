const path = require('path')
const mime = require('mime')
const sizeOfImg = require('image-size')

const regexAppleIcon = () => /apple-icon-.*?\.(png|jpg|bmp|gif|webp|ico|svg)$/
const regexAndroidIcon = () => /android-icon-.*?\.(png|jpg|bmp|gif|webp|ico|svg)$/
const regexMSIcon = () => /ms-icon-.*?\.(png|jpg|bmp|gif|webp|ico|svg)$/
const regexManifest = () => /manifest\.json$/

/**
 * @param {Buffer} icon
 * @return {[number, number]}
 */
function getImgSize (icon) {
  const { width, height } = sizeOfImg(icon)
  return [ width, height ]
}

/**
 * @typedef {{type: string, sizes: [number, number], href: string, rel: string}} IIcon
 */
/**
 * @param {IIcon|string} icon
 * @return {IIcon}
 */
function analyzeIcon (icon) {
  if (typeof icon === 'object') return icon

  const filename = path.basename(icon)

  if (filename.match(regexManifest())) {
    return {
      tag: 'link',
      attr: {
        rel: 'manifest',
        href: this.url_for(icon)
      }
    }
  }

  if (filename.match(regexMSIcon())) {
    return {
      tag: 'meta',
      attr: {
        name: 'msapplication-TileImage',
        content: this.url_for(icon)
      }
    }
  }

  const href = this.url_for(icon)
  const type = mime.getType(filename)
  const dims = filename.match(/-(\d+)x(\d+)\.(png|jpg|bmp|gif|webp|ico|svg)/)
  const sizes = dims ? ([ dims[1], dims[2] ]).join('x') : ''
  const rel = filename.match(regexAppleIcon()) ? 'apple-touch-icon'
    : 'shortcut icon'

  return sizes ? { tag: 'link', attr: { rel, href, type, sizes } } : { tag: 'link', attr: { rel, href, type } }
}

let iconsCache = null

/**
 * @return {Array<IIcon>}
 */
function favicons () {
  if (!iconsCache) {
    const icons = !Array.isArray(this.theme.favicon) ? [ this.theme.favicon ] : this.theme.favicon
    iconsCache = icons.map(analyzeIcon.bind(this))
  }
  return iconsCache
}

/* global hexo */
try {
  hexo.extend.helper.register('favicons', favicons)
} catch (e) {
}

if (module) {
  module.exports = favicons
}
