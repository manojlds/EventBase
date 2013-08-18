'use strict';

angular.module('EventBaseApp').controller('TalksCtrl', function ($scope, angularFire) {
    var url = "https://eventbase.firebaseio.com/talks";
    
    angularFire(url, $scope, "talks", {}).then(function(){

    });

});
