'use strict';

angular.module('EventBaseApp').controller('ProposeCtrl', function ($scope, $location, angularFireCollection, angularFireAuth, talksStorage, userService) {
    var url = talksStorage.url;

    var ref = new Firebase(url);
    $scope.talks = angularFireCollection(ref.limit(10));

    $scope.addTalk = function() {
        if(!userService.user){
            alert('You must be logged in to propose a talk');
            return;
        }
        $scope.newTalk.id = userService.user.id;
        $scope.newTalk.email = userService.user.email;

        $scope.talks.add($scope.newTalk);
        $location.path('/');
    };
});
