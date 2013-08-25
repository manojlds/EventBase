'use strict';

angular.module('EventBaseApp').service('angularFireVote', function angularFireVote(talksStorage, angularFire) {
    var url = talksStorage.url;
    return {
        vote: function(scope, talkId, type, user){
            var voteUrl = url + '/' + talkId;
            var scope = {};
            angularFire(voteUrl, scope, "talk", {}).then(function(){
                if(!scope.talk['upvotes']){
                    scope.talk['upvotes'] = [];
                }
                scope.talk['upvotes'].push(user.id)
            });
        }
    };
});
