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

var originalMorgan = require('morgan');

/**
 * Expose `morgan`.
 */

module.exports = originalMorgan;

originalMorgan.middleware = morgan;

/**
 * morgan wrapper.
 */

function morgan() {
  var args = arguments;
  return function* morgan(next) {
    yield* next;
    originalMorgan.apply(null, args)(this.req, this.res, noop);
  }
}

function noop() {}