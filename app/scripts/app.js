'use strict';

angular.module('EventBaseApp', ['firebase', '$strap.directives'])
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
      .when('/talks/:talkId', {
        templateUrl: 'views/talkdetail.html',
        controller: 'TalkDetailCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: '404Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
