var requireDir = require('require-dir')

module.exports = function load(options) {
  return requireDir('./static', Object.assign({ recurse: true }, options))
}
