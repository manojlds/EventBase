'use strict';

angular.module('EventBaseApp').controller('ProposeCtrl', function ($scope, $location, angularFireCollection, angularFireAuth, talksStorage) {
    var url = talksStorage.url;
    
    angularFireAuth.initialize(url, {scope: $scope, name: "user"});

    var ref = new Firebase(url);
    $scope.talks = angularFireCollection(ref.limit(10));

    $scope.addTalk = function() {
        if(!$scope.user){
            alert('You must be logged in to propose a talk');
            return;
        }
        $scope.newTalk.id = $scope.user.id;
        $scope.newTalk.email = $scope.user.email;

        $scope.talks.add($scope.newTalk);
        $location.path('/');
    };

    $scope.login = function() {
        angularFireAuth.login("github");
    };

    $scope.logout = function() {
        angularFireAuth.logout();
    };
    
});
