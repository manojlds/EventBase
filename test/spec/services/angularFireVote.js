'use strict';

describe('Service: angularFireVote', function () {

  // load the service's module
  beforeEach(module('EventBaseApp'));

  // instantiate service
  var angularFireVote;
  beforeEach(inject(function (_angularFireVote_) {
    angularFireVote = _angularFireVote_;
  }));

  it('should do something', function () {
    expect(!!angularFireVote).toBe(true);
  });

});
