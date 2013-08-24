'use strict';

angular.module('EventBaseApp')
  .controller('LoginCtrl', function ($scope, angularFireAuth) {
  	var url = "https://eventbase.firebaseio.com/talks";
    angularFireAuth.initialize(url, {scope: $scope, name: "user"});

  	$scope.login = function() {
        angularFireAuth.login("github");
    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };
  });
