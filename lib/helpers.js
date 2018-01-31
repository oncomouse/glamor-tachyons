'use strict'


var atRuleRegExp = /^\.?(.*)-([nsml]{1,2})$/

exports.getAtRuleSize = function (selector) {
  return selector.replace(atRuleRegExp, '$2')
}