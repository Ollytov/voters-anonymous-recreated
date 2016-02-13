'use strict';

(function() {

function PollResource($resource) {
  return $resource('/api/polls/:id', {
  	id: '@_id'
  }, {
  	 update: {
  	 	method: 'PUT'
  	 }
  	});
}



angular.module('votersAnonymousApp.auth')
  .factory('Poll', PollResource);

})();
