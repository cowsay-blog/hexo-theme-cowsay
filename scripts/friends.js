const url = require('url')

hexo.extend.helper.register('listFriends', function (friendList) {
  return friendList.map(friend => {
    let ret = {
      name: '',
      thumbnail: '',
      href: '',
      site: '',
      description: ''
    }

    if (typeof friend === 'string') {
      const urlObj = url.parse(friend)
      const domains = urlObj.hostname.split('.')
      ret.name = domains[domains.length - 2]
      ret.site = urlObj.hostname
      ret.href = urlObj.href
    } else if (typeof friend === 'object') {
      Object.assign(ret, friend)
    }

    return ret
  })
})
