'use strict';

angular.module('EventBaseApp', ['firebase'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/propose', {
        templateUrl: 'views/propose.html',
        controller: 'ProposeCtrl'
      })
      .when('/talks', {
        templateUrl: 'views/talks.html',
        controller: 'TalksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
