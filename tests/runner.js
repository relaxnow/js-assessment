'use strict';
var tests = [
  // link to test files here
  'order!tests/app/objects',
  'order!tests/app/numbers',
  'order!tests/app/math',
  'order!tests/app/strings',
  'order!tests/app/arrays',
  'order!tests/app/dates',
  'order!tests/app/regexps',
  'order!tests/app/types',
  'order!tests/app/flowControl',
  'order!tests/app/functions',
  'order!tests/app/modules',
  'order!tests/app/async'
];

require(tests, function() {
  mocha.run();
});
