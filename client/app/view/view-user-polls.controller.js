'use strict';

(function() {

class ViewUserCtrl {

  constructor($http, $scope, $state, $location, socket, Poll) {
    this.$location = $location;
  	this.$state = $state;
  	this.Poll = Poll;
  	this.polls = Poll.query();
    this.author = $state.params.user;
  	this.voteError = false;
  }

  submitVote(vote, id, option) {
  	if (!vote) return this.voteError = true;
  	let self = this;
  	let newObj = {};
  	let newPoll = this.Poll.get({id: id}).$promise.then(function(val) {
  		val.votes.push(vote);
  		self.Poll.update({id: id}, {votes: val.votes});
      self.$location.path('/view/'+id+'/results');
  	});
  }
  
}

angular.module('votersAnonymousApp')
  .controller('ViewUserCtrl', ViewUserCtrl);

})();
