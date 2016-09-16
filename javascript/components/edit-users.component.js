angular.module('VehicleManagement')
.component("editUsers",{

	templateUrl : "/templates/pages/users/index.html",
	bindigs:{
		value: "<"
	},
	controller:["$http", function($http){
		var model = this ;
		var users = [];

		model.$onInit = function(){
			$http.post("http://localhost:9090/Test/getAllUsers").then(function(response){
			model.users = response.data;
			console.log(model.users);
			})
			$http.post("http://localhost:9090/Test/AllUsersXls").then(function(response){
			console.log("Xls report generated !")	
			})
			$http.post("http://localhost:9090/Test/AllUsersPdf").then(function(response){
			console.log("Pdf report generated !")
			})
			$http.post("http://localhost:9090/Test/OwnersPdf").then(function(response){
			console.log("OwnersPdf Generated !")
			})


		}
		
		model.deleteUser = function(user) {
			console.log(user);
			if(user.role === "admin")
			{
				alert("You can't delete an admin !!!")
			}
			else
			{
				if(confirm("Are you sure you want to delete this user ?") == true)
				{
						$http.post("http://localhost:9090/Test/deleteUser",user).then(function(response){

						})
				}

			}
			
		}
		model.makeAdmin = function(user){
			console.log(user);
			$http.post("http://localhost:9090/Test/makeAdmin",user).then(function(response){
				

			})
		}

		
	}]
	

})