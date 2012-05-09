'use strict';
define([ 'use!underscore' ], function (_) {
  describe("strings", function () {
    var fn, story;

    beforeEach(function () {
      fn = function() {};
      story = 'There once was...';
    });

    it("you should know how to define a multi-line string safely", function(){
      // Redefine story here

      expect(story.split(/\r\n|\r|\n/).length).to.be.greaterThan(1);
    });

    it("you should know how to trim strings safely", function () {
      // Make this work in IE7 (no need to fire up a VM, just dry code it and have it checked)
      // Hint: look up String trim polyfill

      expect(" trimmed ".trim()).to.be("trimmed");
    });

    it("you should know how to convert string to a number", function() {
      // Redefine fn here
      // Note that you have a choice of the + operator or the Number function
      // experiment with both!

      expect(fn('19')).to.be(19);
      expect(fn(null)).to.be(0);
      expect(isNaN(fn(undefined))).to.be(true);
    });

    it("you should know how to convert string to a number strictly", function() {
      // Redefine fn here

      expect(fn("9")).to.be(9);
      expect(isNaN(fn("99 bottles"))).to.be(true);
    });

    it("you should know how to convert string to a number loosely", function() {
      // Redefine fn here

      expect(fn("9")).to.be(9);
      expect(fn("99 bottles")).to.be(99);
      expect(fn("099 bottles")).to.be(99);
    });
  });
});