define([ 'use!underscore' ], function (_) {
  describe("regexps", function () {
    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.";

    beforeEach(function () {
      fn = function() {};
    });

    it("you should be able to check for occurrences with a regexp", function () {
      // Redefine fn here

      expect(fn(lorem, 'amet')).to.be(true);
      expect(fn(lorem, 'DOLOR')).to.be(true);
      expect(fn(lorem, 'ECMAScript')).to.be(false);
    });

    it("you should be able to replace all occurrences of a word with a regexp", function() {
      var result = lorem;
      // Your regexp here, replace 'do' by 'to'

      expect(result).to.be('Lorem ipsum tolor sit amet, consectetur adipisicing elit, sed to eiusmod tempor incididunt ut labore.');
    });
  });
});