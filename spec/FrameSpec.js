describe('Frame', function () {
  var game;

  beforeEach(function () {
    frame = new Frame;
  });

  describe('start new game', function () {

    it('will start with a score of 0', function () {
      expect(frame.score).toBe(0)
    });

    it('turnInFrame is at 1', function () {
      expect(frame.rollInFrame).toBe(1)
    });

    it('strike is at false', function () {
      expect(frame.isStrike).toBe(false)
    });
  });

describe('first ball rolled not strike or spare', function() {

  it('adds downded pins to frame score', function () {
    frame.ballRoll(8)
    expect(frame.frameScore).toBe(8)
  });
});



})
