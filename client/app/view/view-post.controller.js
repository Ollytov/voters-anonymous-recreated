'use strict';

(function() {

class ViewPostCtrl {

  constructor($http, $scope, $state, $location, socket, Poll) {
    this.$location = $location;
  	this.$state = $state;
  	this.Poll = Poll;
  	this.poll = Poll.get({id: this.$state.params.id});
    this.voteError = false;
  }
  
  submitVote(vote, id) {
    if (!vote) return this.voteError = true;
    let self = this;
    let newObj = {};
    let newPoll = this.Poll.get({id: id}).$promise.then(function(val) {
      val.votes.push(vote);
      self.Poll.update({id: id}, {votes: val.votes});
      self.$location.path('/view/'+id+'/results')
    });
  }

}

angular.module('votersAnonymousApp')
  .controller('ViewPostCtrl', ViewPostCtrl);

})();
