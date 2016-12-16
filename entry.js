var vendor = require('./vendor')

require(['./async-module'], function (msg) {
  vendor(msg)
})
