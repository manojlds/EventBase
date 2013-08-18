'use strict';

angular.module('EventBaseApp')
  .controller('ProposeCtrl', function ($scope, $location, angularFire) {
    var url = "https://eventbase.firebaseio.com/talks";
    angularFire(url, $scope, "talks").then(function() {
        
        $scope.addTalk = function() {
            $scope.talks.push($scope.newTalk);
            $location.path('/');
        };

    });
    
  });
