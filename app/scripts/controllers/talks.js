'use strict';

angular.module('EventBaseApp').controller('TalksCtrl', function ($scope, angularFireCollection) {
    var url = "https://eventbase.firebaseio.com/talks";
    
    var ref = new Firebase(url);
    $scope.talks = angularFireCollection(ref.limit(10));
    
});
