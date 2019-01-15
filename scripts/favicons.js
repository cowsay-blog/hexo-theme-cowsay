const path = require('path')
const mime = require('mime')
const sizeOfImg = require('image-size')

/**
 * @param {Buffer} icon
 * @return {[number, number]}
 */
function getImgSize (icon) {
  sizeOfImg
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
  const href = this.url_for(icon)
  const type = mime.getType(filename)
  const dims = filename.match(/-(\d+)x(\d+)\.(png|jpg|bmp|gif|webp|ico|svg)/)
  const sizes = dims ? [ dims[1], dim[2] ] : getImgSize(this.route.get(icon))
  theme_color

  const appleIcon = filename.match(/apple-icon.*?-(\d+)x(\d+)\.(png|jpg|bmp|gif|webp|ico|svg)/)
  if (appleIcon) {
    return {
      rel: 'apple-touch-icon',
      sizes: [
        appleIcon[1],
        appleIcon[2]
      ],
      href,
      type
    }
  }
  const androidIcon = filename.match(/android-icon.*?-(\d+)x(\d+)\.(png|jpg|bmp|gif|webp|ico|svg)/)
  if (androidIcon) {
    return {
      rel: 'icon',
      sizes: [
        androidIcon[1],
        androidIcon[2]
      ],
      href,
      type
    }
  }
}

/**
 * @return {Array<IIcon>}
 */
function favicons () {
  const iconObj = {
    type: '',
    sizes: '',
    href: '',
    rel
  }
  
  if (Array.isArray(this.theme.favicon)) {
    this.theme.favicon.map(analyzeIcon)
  }
}

/* global hexo */
try {
  hexo.extend.helper.register('favicons', favicons)
} catch (e) {
}

if (module) {
  module.exports = favicons
}
