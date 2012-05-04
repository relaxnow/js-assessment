'use strict';
define([ 'use!underscore' ], function (_) {
  describe("dates", function () {
    var dpc;

    beforeEach(function () {
      dpc = {
        tutorials: [
          {
            name : "Web Services",
            start: new Date('Thu, 7 Jun 2012 09:30:00 +0200'),
            end  : new Date('Thu, 7 Jun 2012 12:45:00 +0200'),
            speaker: "Lorna Jane Mitchell"
          }
        ],
        conference: {
          start: new Date('Fri, 8 Jun 2012 09:30:00 +0200'),
          end: new Date('Sat, 9 Jun 2012 18:00:00 +0200')
        }
      };
    });

    it("you should be able to avoid getYear", function () {
      // Fix this result
      var result = dpc.tutorials[0].start.getYear();

      expect(result).to.be('2012');
    });

    it("you should know what setDate is for", function() {
      // Fix this result
      var result = dpc.tutorials[0].start;
      result.setDate(new Date('Thu, 7 Jun 2012 10:00:00 +0200'));

      expect(result).to.equal(new Date('Thu, 7 Jun 2012 10:00:00 +0200'));
    });

    it("you should be able to calculate durations from two dates", function() {
      // Set the result to be the number of hours from the start of the conference until the end.
      var result;

      expect(result).to.be('32:30:00');
    });

    it("Optional bonus: convert the time to UTC-8 (so at what time would someone in San Francisco experience the workshop?)", function() {
      var tutorialStart = dpc.tutorials[0].start;

      // Convert tutorialStart here

      var result = tutorialStart.getHours() + ':' + tutorialStart.getMinutes() + ':' + tutorialStart.getSeconds();
      expect(result).to.be('23:30:00');
    });
  });
});