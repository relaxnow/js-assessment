'use strict';
define([ 'use!underscore' ], function (_) {
  describe("types", function () {
    var fn, rhino, rhino2;

    beforeEach(function () {
      fn = function() {};
      rhino = {
        id: 12,
        feet: [1, 2, 3, 4],
        owner: null,
        male: '0'
      };
      rhino2 = {
        id: 12,
        feet: [1, 2, 3, 4],
        owner: null,
        male: '0'
      };
    });

    it("you should be able to detect if something is an array", function () {
      var result = 0;

      // Fix this condition, make sure your solution also works in IE7
      // Hint: look up array.isArray polyfill
      if (typeof rhino.feet === 'Array') {
        result = rhino.feet.length;
      }

      expect(result).to.be(4);
    });

    it("you should be able to detect if something is null", function() {
      var result = 'captive';

      // Fix this condition
      if (!('owner' in rhino)) {
        result = 'wild';
      }

      expect(result).to.be('wild')
    });

    it("you should be able to convert string values to booleans", function() {
      var isFemale;

      // Fix this comparison
      // Note that this differs from PHP!
      isFemale = !rhino.male;

      expect(isFemale).to.be(true);
    });

    it("you should know how to compare objects", function(){
      // Redefine fn here
      // Note: can you do this with == or ===?
      // How would you do this in PHP?
      // Think also of valueOf

      expect(fn(rhino, rhino2)).to.be(true);
    });
  });
});