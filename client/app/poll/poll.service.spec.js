'use strict';

describe('Service: poll', function () {

  // load the service's module
  beforeEach(module('votersAnonymousApp'));

  // instantiate service
  var poll;
  beforeEach(inject(function (_poll_) {
    poll = _poll_;
  }));

  it('should do something', function () {
    expect(!!poll).toBe(true);
  });

});
