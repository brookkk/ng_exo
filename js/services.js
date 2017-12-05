
parking.factory("parkingService", function(parkingConfig){
	var _calculateTicket = function(car){
		var departHour = new Date().getHours();
		var entranceHour = car.entrance.getHours() -1;

		var parkingPeriod = departHour - entranceHour;
		var parkingPrice = parkingPeriod * parkingConfig.parkingRate ;

		console.log("departHour" + departHour);
		console.log("entranceHour" + entranceHour);
		console.log("parkingPeriod" + parkingPeriod);
		console.log("parkingPrice" + parkingPrice);

		return {
			period : parkingPeriod,
			price : parkingprice
		};
	};

	return {
		calculateTicket : _calculateTicket
	}
});


parking.service("parkingService2", function(parkingConfig){
	this.calculateTicket = function(car){
		var departHour = new Date() . getHours();
		var entranceHour = car.entrance.getHours();

		var parkingPeriod = departHour - entranceHour;
		var parkingPrice = parkingPeriod * parkingConfig.parkingRate ;
		
		console.log("departHour" + departHour);
		console.log("entranceHour" + entranceHour);
		console.log("parkingPeriod" + parkingPeriod);
		console.log("parkingPrice" + parkingPrice);

		return {
			period : parkingPeriod,
			price : parkingprice
		};
	};
});




parking.factory("parkingHttpFacade", function($http){

	var _getExercices = function(){
		return $http.get("http://localhost/brainss/web/app_dev.php/api/exercices");
	};

	var _getExercice= function(id){
		return $http.get("http://localhost/brainss/web/app_dev.php/api/exercices/"+id+"/parties");
	};



	return {
		getExercices: _getExercices,
		getExercice: _getExercice
	};

});