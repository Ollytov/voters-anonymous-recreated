'use strict';

angular.module('votersAnonymousApp')
  .directive('pollResults', function () {
    return {
      template: '<div id="results"></div>',
      restrict: 'E',
      controller: function($scope, $state, Poll) {
		this.poll = Poll.get({id: $state.params.id}).$promise.then(function(poll) {
			let question = poll.question;
			let data = [];
			for (let i = 0; i < poll.options.length; i++) {
				let count = 0;
				for (let x = 0; x < poll.votes.length; x++) {
					if (poll.options[i] === poll.votes[x]) {
						count++;
					}
				}
				data.push({
					name: poll.options[i],
					y: count
				});
			}

		angular.element('#results').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: question,
		            style: { 'font-size' : '1.5em', 'font-weight' : 'bold'}
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.y}</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.y}',
		                    style: {
		                        color: 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Votes',
		            colorByPoint: true,
		            data: data
		        }]
		    })
		})

      },
      controllerAs: 'results'
    }});
