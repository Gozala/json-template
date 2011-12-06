"use strict"

exports['test simple'] = require("./testSimple")
exports['test substitutions'] = require("./testSubstitutions")

if (module == require.main)
  require('test').run(exports)
