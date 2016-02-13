'use strict';

describe('Directive: pollResults', function () {

  // load the directive's module
  beforeEach(module('votersAnonymousApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poll-results></poll-results>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pollResults directive');
  }));
});
