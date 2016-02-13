'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];
  //end-non-standard

  constructor(Auth, $scope, $timeout, $mdSidenav, $log) {
    this.$mdSidenav = $mdSidenav;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  closeNav() {
    this.$mdSidenav('left').close();
  }

  toggleLeft() {
      this.$mdSidenav('left')
        .toggle();
  }
}

angular.module('votersAnonymousApp')
  .controller('NavbarController', NavbarController);
