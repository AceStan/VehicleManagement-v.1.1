angular.module('VehicleManagement')
.service('searchService',function($http){
	this.searchCar = function(content){

		return $http.post("http://localhost9090/Test/search",content).then(function(response){
			console.log(response);
		})

		

	}
})