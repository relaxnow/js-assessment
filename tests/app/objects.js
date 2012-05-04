'use strict';
define([ 'use!underscore' ], function (_) {
  describe("objects", function () {
    var person;

    beforeEach(function () {
      person = { name:"John Doe", firstName:"John", surname:"Doe", twitter:"https://twitter.com/JohnDoe" };
    });

    it("you should be able to remove properties from an object", function () {
      // Modify the person object here

      expect(typeof person.twitter).to.be('undefined');
    });

    it("you should be able to set a propertyname with a space in it", function () {
      // Modify the person object here

      expect(person['bank number']).to.be('1010101');
    });

    it("you should be able to set a propertyname with a reserved word", function () {
      // Modify the person object here

      expect(person['this']).to.be(person);
    });
  });
});