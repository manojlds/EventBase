'use strict';

angular.module('EventBaseApp').service('angularFireVote', function angularFireVote() {
    return {
        vote: function(scope, talkId, type, user){
            var votes = scope.talks[talkId].votes;
            if(!votes) {
                scope.talks[talkId].votes = {};
            }
            var existingVote = scope.talks[talkId].votes[user.id];
            if(existingVote === type) {
                alert('Already voted');
                return;
            }
            scope.talks[talkId].votes[user.id] = type;
        }
    };
});
