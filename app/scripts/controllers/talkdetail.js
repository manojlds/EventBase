'use strict';

angular.module('EventBaseApp')
  .controller('TalkDetailCtrl', function ($scope, $routeParams, $location, angularFire) {
    var url = "https://eventbase.firebaseio.com/talks/" + $routeParams.talkId;

    angularFire(url, $scope, "talk", {}).then(function(){
        if(!$scope.talk.title){
            $location.path("/404");
        }

    });

  });
