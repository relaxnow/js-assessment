var tests = [
  // link to test files here

  'order!tests/app/arrays',
  'order!tests/app/async',
  'order!tests/app/flowControl',
  'order!tests/app/functions',
  'order!tests/app/modules',
  'order!tests/app/objects'
];

require(tests, function() {
  mocha.run();
});
