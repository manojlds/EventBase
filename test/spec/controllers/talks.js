'use strict';

describe('Controller: TalksCtrl', function () {

  // load the controller's module
  beforeEach(module('EventBaseApp'));

  var TalksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalksCtrl = $controller('TalksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
