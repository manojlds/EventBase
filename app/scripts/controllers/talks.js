'use strict';

angular.module('EventBaseApp').controller('TalksCtrl', function ($scope, $location, angularFire) {
    var url = "https://eventbase.firebaseio.com/talks";
    
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
