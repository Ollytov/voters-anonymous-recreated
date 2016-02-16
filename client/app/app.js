'use strict';

angular.module('votersAnonymousApp', [
  'votersAnonymousApp.auth',
  'votersAnonymousApp.admin',
  'votersAnonymousApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial', 
  'ngMessages',
  'wu.masonry'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo', {
        'hue-1': '900'
      })
      .accentPalette('pink');
  });
