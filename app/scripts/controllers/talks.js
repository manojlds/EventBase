'use strict';

angular.module('EventBaseApp').controller('TalksCtrl', function ($scope, $location, angularFire, talksStorage, userService, angularFireVote) {
    var url = talksStorage.url;

    angularFire(url, $scope, "talks", {}).then(function(){
    });

    $scope.talkDetail = function(e, talkId){
        e.preventDefault();
        $location.path("/talks/" + talkId);
    };

    $scope.vote = function(e, talkId, type){
        if(!userService.user){
            alert('You must be logged in to vote');
        }

        $scope.talks[talkId]['upvotes'] = 1;


    };

});
