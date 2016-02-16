'use strict';

angular.module('votersAnonymousApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('view', {
        url: '/view',
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl',
        controllerAs: 'view'
      })
      .state('view-poll', {
        url: '/view/:id',
        templateUrl: 'app/view/view-post.html',
        controller: 'ViewPostCtrl',
        controllerAs: 'viewpoll'
      })
      .state('view-poll-results', {
        url: '/view/:id/results',
        templateUrl: 'app/view/view-post-results.html',
        controller: 'ViewPostCtrl',
        controllerAs: 'viewpoll'
      })
      .state('view-user-polls', {
        url: '/view/user/:user',
        templateUrl: 'app/view/view-user.html',
        controller: 'ViewUserCtrl',
        controllerAs: 'view'
      });
  });
