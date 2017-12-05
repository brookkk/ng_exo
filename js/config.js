parking.config(function($routeProvider){

	$routeProvider.
	when("/exercices", {
		templateUrl: "exercices.html",
		controller: "parkingCtrl"
	}).
	otherwise({
		redirectTo : 'exercices'
	});


});