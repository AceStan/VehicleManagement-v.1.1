angular.module('VehicleManagement')
.component("searchResults",{
	templateUrl : "/templates/pages/listsearch/index.html",
	bindings: {
		value : "<"
	},
	controller : function ($http) {
		var model = this;
		
		model.owner = {
		name : "",
		lastName : "",
		mobile : "",
		email : "",
		username : "",
		password : "",
		ssid : "",
		role : "",
		cars : []

		}

		model.getOwner =  function(id){
				$http.post("http://localhost:9090/Test/getOwner",id).then(function(response){
				console.log(response.data)
				alert("The owner of this car is "+response.data.name+" "+response.data.lastName+ " Contact : Mobile: "+response.data.mobile+" E-mail: "+response.data.email);
			})
		}

		model.carDocumentation = function(car){
			console.log(car);
			$http.post("http://localhost:9090/Test/carDocumentation",car).then(function(response){

			})
		}
	}
})