define([ 'use!underscore' ], function (_) {
  describe("numbers", function () {
    var product1PriceDollars, product2PriceDollars, fn;

    beforeEach(function () {
      product1PriceDollars = 0.1;
      product2PriceDollars = 0.2;
      fn = function() {
      }
    });

    it("you should know how to safely work with floats", function () {
      // Redefine fn here

      expect(fn(product1PriceDollars, product2PriceDollars)).to.be(0.3);
    });

    it("you should know how to detect NaN", function () {
      // Redefine fn here

      expect(fn(product1PriceDollars, "fifteen")).to.be(false);
    });
  });
});