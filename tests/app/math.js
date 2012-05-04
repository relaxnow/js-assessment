'use strict';
define([ 'use!underscore' ], function (_) {
  describe("math", function () {
    var fn;

    beforeEach(function () {
      fn = function() {};
    });

    it("you should know how to turn floats into integers", function () {
      // Redefine fn here

      expect(fn(5.3)).to.be(5);
      expect(fn(5.6)).to.be(5);
    });

    it("you should know how to turn average floats into integers", function () {
      // Redefine fn here

      expect(fn(5.3)).to.be(5);
      expect(fn(5.6)).to.be(6);
    });

    it("you should know how to generate random integers between 1 and 1000", function() {


      expect(fn().not.to.equal(fn()));
      expect(fn()).to.be.lessThan(1000);
      expect(fn()).to.be.greaterThan(1);
      expect(fn() % 1).to.be(0);
    });
  });
});