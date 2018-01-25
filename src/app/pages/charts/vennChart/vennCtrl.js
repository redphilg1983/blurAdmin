angular.module('BlurAdmin.pages.charts.vennChart')
.controller('vennCtrl', vennCtrl)

function vennCtrl($scope, $window, baConfig) {
	$scope.vennData = [
		{sets: ['Foo'], size: 12},
		{sets: ['Bar'], size: 12},
		{sets: ['Baz'], size: 12},
		{sets: ['Foo','Bar'], size: 2},
		{sets: ['Bar','Baz'], size: 2},
		{sets: ['Foo','Baz'], size: 2},
		{sets: ['Foo','Bar', 'Baz'], size: 1},
	];
};