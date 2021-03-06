'use strict';

var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
  postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
    done();
  });
};

/* global describe */
/* global it */

describe('postcss-url-hash', function () {

  /* Write tests here
   */
  it('does something', function (done) {
    test('a{ }', 'a{ }', {}, done);
  });

});
