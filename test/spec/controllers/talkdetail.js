'use strict';

describe('Controller: TalkdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('EventBaseApp'));

  var TalkdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalkdetailCtrl = $controller('TalkdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
