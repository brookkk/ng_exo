 	parking.controller("parkingCtrl", function($scope, parkingService2, $http, $q, parkingHttpFacade){



    		$scope.cars = [];

    		$scope.colors=["white", "black", "blue", "red", "silver"];

    		$scope.appTitle="Exercices";

    		$scope.park = function(car){
    			car.entrance = new Date();
    			$scope.cars.push(car);
    			delete $scope.car;
    		};

          $scope.calculateTicket = function(car){
                $scope.ticket = parkingService2.calculateTicket(car);
            };





   
            $scope.loading=true;


             $scope.exos = [];

            var retreiveExercices = function(){

                 //$http.get('http://localhost/brainss/web/app_dev.php/api/exercices')
                 parkingHttpFacade.getExercices()
                    .success(function(data, status, headers, config){
                        $scope.exos = data;
                        $scope.loading=false;

                    })
                    .error(function(data, status, headers, config){
                        switch(status){
                            case 401 : {
                                $scope.message = "You must be Authenticated!";
                                break;
                            }
                            case 500 : {
                                $scope.message = "Something went wrong!";
                                break;
                            }
                        }
                        
                    });
            };


            retreiveExercices();



    	});	