'use strict';

(function() {

class MainController {

  constructor($http, $scope, $location, socket, Poll, Auth) {
    this.Poll = Poll;
    this.$location = $location;
    this.submitted = false;
    this.notEnoughOptions = false;
    this.optionError = false;
    this.question = "";
    this.numOfOptions = 2;
    this.pollOptions = [{option: "", id: 1}, {option: "", id: 2}];
    this.getCurrentUser = Auth.getCurrentUser;
  }

  addOption(id) {
    if (id === this.numOfOptions) {
      this.numOfOptions++;
      this.pollOptions.push({option: "", id: this.numOfOptions});
    }
  }

  createPoll(form) {
    this.notEnoughOptions = false;
    this.optionError = false;
    this.submitted = true;
    this.author = this.getCurrentUser().name || 'Guest';
    let finalOptions = [];
    let self = this;

    for (let i = 0; i < this.pollOptions.length; i++) {
      if (this.pollOptions[i].option !== undefined && this.pollOptions[i].option !== '') {
        if (finalOptions.indexOf(this.pollOptions[i].option) < 0 ) {
          finalOptions.push(this.pollOptions[i].option);
        } else {
          this.optionError = true;
        }
      }
    }

    if (finalOptions.length >= 2 && this.question && !this.optionError) {
      this.Poll.save({
        question: this.question,
        options: finalOptions,
        date: new Date(),
        author: this.author
      }, function(resp) {
        self.$location.path('/view');
      }, function(err) {
        console.log(err);
      });
    } else if (finalOptions.length < 2 && !this.optionError){
      this.notEnoughOptions = true;
    }
    
  }
  
}

angular.module('votersAnonymousApp')
  .controller('MainController', MainController);

})();
