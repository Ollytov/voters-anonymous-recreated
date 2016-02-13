'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Poll) {
    this.Poll = Poll;
    this.question = "";
    this.numOfOptions = 2;
    this.pollOptions = [{option: "", id: 1}, {option: "", id: 2}];
  }

  addOption(id) {
    if (id === this.numOfOptions) {
      this.numOfOptions++;
      this.pollOptions.push({option: "", id: this.numOfOptions});
    }
  }

  createPoll(form) {
    // FIX THIS //
    // POLLS SHOULD NOT ALLOW EMPTYU OPTIONS //
    // MAJOR BUG //

    // for (let i = 0; i < this.pollOptions.length; i++) {
    //   if (this.pollOptions[i].option === undefined) {
    //     this.pollOptions.splice(i, 1);
    //     console.log(thispollOptions);
    //     i = 0;
    //   }
    // }
    this.Poll.save({
      question: this.question,
      options: this.pollOptions,
      date: new Date(),
      author: "Guest"
    });
  }
  
}

angular.module('votersAnonymousApp')
  .controller('MainController', MainController);

})();
