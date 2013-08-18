'use strict';

angular.module('EventBaseApp')
  .controller('ProposeCtrl', function ($scope, $location, angularFire, angularFireAuth) {
    var url = "https://eventbase.firebaseio.com/talks";
    
    angularFireAuth.initialize(url, {scope: $scope, name: "user"});
    
    angularFire(url, $scope, "talks").then(function() {

        $scope.addTalk = function() {
            if(!$scope.user){
                alert('You must be logged in to propose a talk');
                return;
            }

            $scope.talks.push($scope.newTalk);
            $location.path('/');
        };

        $scope.login = function() {
            angularFireAuth.login("github");
        };

        $scope.logout = function() {
            angularFireAuth.logout();
        };

    });
    
  });
