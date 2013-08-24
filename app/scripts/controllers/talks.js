'use strict';

angular.module('EventBaseApp').controller('TalksCtrl', function ($scope, $location, angularFire, talksStorage) {
    var url = talksStorage.url;
    
    angularFire(url, $scope, "talks", {}).then(function(){
    });

    $scope.talkDetail = function(e, talkId){
        e.preventDefault();
        $location.path("/talks/" + talkId);
    };

    $scope.upvote = function(e, talkId){
        alert('upvote');
    };

    $scope.upvote = function(e, talkId){
        alert('upvote');
    };

});
