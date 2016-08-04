'use strict'

const requireDir = require('require-dir')

module.exports = function load(options) {
  const dir = requireDir('./static', Object.assign({ recurse: true }, options))
  return dir
}
