'use strict';

angular.module('EventBaseApp')
  .controller('LoginCtrl', function ($scope, userService, angularFireAuth) {
  	var url = "https://eventbase.firebaseio.com/talks";
    angularFireAuth.initialize(url, {scope: $scope, name: "user"});

  	$scope.login = function() {
        angularFireAuth.login("github");
        
    };
    $scope.logout = function() {
        angularFireAuth.logout();
    };

    $scope.$on("angularFireAuth:login", function(evt, user) {
      userService.user = $scope.user;
      userService.isLogged = true;
    });

    $scope.$on("angularFireAuth:logout", function(evt) {
      userService.isLogged = false;
      userService.user = null;
    });
});
