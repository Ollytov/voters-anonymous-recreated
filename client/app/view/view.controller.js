'use strict';

(function() {

class ViewCtrl {

  constructor($http, $scope, $state, socket, Poll) {
  	this.$state = $state;
  	this.Poll = Poll;
  	this.polls = Poll.query();
  	this.voteError = false;
  }

  submitVote(vote, id) {
  	if (!vote) return this.voteError = true;
	let self = this;
	let newObj = {};
	let newPoll = this.Poll.get({id: id}).$promise.then(function(val) {
		val.votes.push(vote);
		self.Poll.update({id: id}, {votes: val.votes});
	});
  }
  
}

angular.module('votersAnonymousApp')
  .controller('ViewCtrl', ViewCtrl);

})();
