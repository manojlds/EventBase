'use strict';

angular.module('EventBaseApp')
  .controller('TalkDetailCtrl', function ($scope, $routeParams, $location, angularFire, talksStorage) {
    var url = talksStorage.url + '/' + $routeParams.talkId;

    angularFire(url, $scope, "talk", {}).then(function(){
        if(!$scope.talk.title){
            $location.path("/404");
        }

    });

  });
