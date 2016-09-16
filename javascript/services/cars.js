angular.module('VehicleManagement')
.service('carService',  function($http){
	this.addCar = function(car){
		var addResult = {
			status :""
		
		}
		return $http.post("http://localhost:9090/Test/addCar",car).then(
			function(response){
				if(response.data.okSSID == true){
						addResult.status = "success";
					}
				else{
					addResult.status = "failure";
				}
				return addResult; }

					)}
	this.deleteCar = function(car){
		var deleteResult = {
			status: ""
		}
		if(confirm("Are you sure you want to delete this car ?") == true){
				return $http.post("http://localhost:9090/Test/deleteCar",car).then(
						function(response){
							if(response.data.okSSID == true){
								deleteResult.status = "success";
								
							}
							else{
								deleteResult.status = "failure";
							}
						
						return deleteResult;
					}
			

						)}
				}
	this.updateCarInfo = function(car){
		var updateResult={
				status:""
			}
		return $http.post("http://localhost:9090/Test/updateCar",car).then(
			
					function(response){
						if(response.data.okSSID == true){
							updateResult.status = "success";
						}
						else{
							updateResult.status = "failure";
						}
						return updateResult;
					}
					
				)}
	this.addTrip = function(car){
		var addTripResult ={
			status:""
		}
		return $http.post("http://localhost:9090/Test/updateTrip",car).then(

					function(response){
						if(response.data.okSSID == true){
							addTripResult.status = "success";
						}
						else{
							addTripResult.status = "failure";
						}
						return addTripResult;
					})
	}








}
)
