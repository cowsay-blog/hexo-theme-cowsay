const { name } = require('../package.json')
const _pick = require('lodash.pick')

/* init plugins */

const defaultPluginsConfig = {
  'hexo-fontmin': true,
  'hexo-renderer-webpack4-extra': true,
  'hexo-renderer-nunjucks-extra': true,
  'hexo-renderer-scss': true
}

const pluginList = Object.keys(defaultPluginsConfig)

const pluginsConfig = Object.assign(
  {},
  defaultPluginsConfig,
  _pick(hexo.theme.config.plugin, pluginList),
  _pick(hexo.config.theme_config.plugin, pluginList)
)

hexo.extend.filter.register('after_init', function () {
  return Promise.all(Object.keys(pluginsConfig).map(loadPlugin))
})

function loadPlugin (plugin) {
  return hexo
    .loadPlugin(require.resolve(plugin))
    .then(() => {
      hexo.log.info('[%s] use "%s"', name, plugin)
    })
}
