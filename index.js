/*!
 * morgan
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

const thenify = require('thenify')
const morgan = require('morgan')

/**
 * Expose `morgan`.
 */

module.exports = morgan

morgan.middleware = morganWrapper

/**
 * morgan wrapper.
 */

function morganWrapper() {
  var middleware = thenify(morgan.apply(null, arguments))
  return function* morgan(next) {
    yield middleware(this.req, this.res)
    next && (yield next)
  }
}
