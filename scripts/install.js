const { name, dependencies } = require('../package.json')
const _pick = require('lodash.pick')

/* init plugins */

const pluginList = Object.keys(dependencies)
const defaultPluginsConfig = pluginList
  .filter(pluginName => pluginName.startsWith('hexo-'))
  .reduce((cfg, pluginName) => Object.assign(cfg, { [pluginName]: true }), {})

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
