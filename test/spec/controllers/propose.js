'use strict';

describe('Controller: ProposeCtrl', function () {

  // load the controller's module
  beforeEach(module('EventBaseApp'));

  var ProposeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProposeCtrl = $controller('ProposeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
