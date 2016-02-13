'use strict';

angular.module('votersAnonymousApp.auth', [
  'votersAnonymousApp.constants',
  'votersAnonymousApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
