'use strict';

describe('Service: talksStorage', function () {

  // load the service's module
  beforeEach(module('EventBaseApp'));

  // instantiate service
  var talksStorage;
  beforeEach(inject(function (_talksStorage_) {
    talksStorage = _talksStorage_;
  }));

  it('should do something', function () {
    expect(!!talksStorage).toBe(true);
  });

});
