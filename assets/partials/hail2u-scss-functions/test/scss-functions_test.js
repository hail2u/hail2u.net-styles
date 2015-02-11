/*jshint node:true */
'use strict';

var grunt = require('grunt');
var path = require('path');

var dirActual = path.join(__dirname, '..', 'tmp');
var dirExpected = path.join(__dirname, 'expected');

exports.testAll = function (test) {
  test.expect(5);

  var testCases = [
    'color',
    'list',
    'misc',
    'number',
    'string'
  ];

  for (var i = 0, l = testCases.length; i < l; i++) {
    var testCase = testCases[i];
    var actual = grunt.file.read(path.join(dirActual, testCase + '.css'));
    var expected = grunt.file.read(path.join(dirExpected, testCase + '.css'));
    test.strictEqual(actual, expected);
  }

  test.done();
};
