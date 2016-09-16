var app = angular.module('VehicleManagement',['ngRoute'])


app.controller('VehicleManagementController',['searchService','carService','authService','$location','$http',function(searchService,carService,authService,$location,$http){
	
	this.showWelcome = true;
	this.showSignUp = false;
	this.showSignIn = false;
	this.showProfile = false;
	this.showCars = false;
	this.showAddCar = false;
	this.showStats = false;
	this.showResults = false;
	this.showEditUsers = false;
	this.searchContent  = "";
	this.searchResult = [];
	this.authService = authService;
	var vm = this;
	this.user = {
		name : "Aleksandar",
		lastName : "Stanoevski",
		mobile : "070 000 000",
		email : "acestan@gmail.com",
		username : "acestan",
		password : "122345",
		ssid : "2208993111111",
		role : "",
		cars : []

	}
	this.signInUser = {
		username : "acestan",
		password : "122345"
	}
	this.carToAdd = {
		id : "",
		brand : "Opel",
		model : "Corsa",
		engine : "75",
		lastService : "2015-12-12",
		fuelCompsumption : "4.9",
		km : "0",
		fk:  vm.user.ssid
	}
	

	
	this.onSignUpClicked = function(){
		authService.signUpFunction(this.user).then(function(resultSU){
			if(resultSU.status === "failure")
			{
				alert("Failed  to sign up ! Reason : The "+resultSU.reason+" is not unique !");
			}
			else
			{

				alert("Successfull sign up ! Welcome !");
				$location.path("/profile");
			}
			//console.log(resultSU);
		})
	}
	/*this.onSignUpClicked = function () {
		$http.post('http://localhost:9090/Test/getUserInfo',this.user).then(
			function(response) {
				if(response.data.okSSID == false){
					alert("Your ssid isn't unique, please change it so you can sign up !");
				}
				else if(response.data.okUser == false){
					alert("Your username isn't unique, plase change it so you can sign up !");
				}
				else if(response.data.okPass == false){
					alert("Your password isn't unique, please change it so you can sign up !");
				}		
				else{
					$location.path("/profile");
					alert("Sucessfull sign up !");
				}
				console.log(response.data);
			},
			function(error) {
				console.log("error");
			}
			);}*/
	this.onSignInClicked = function(){
		//console.log("Rezultat vo app.js");
		authService.signInFunction(this.signInUser).then(function(resultSI){
			if(resultSI.status === "failure")
			{
				alert("Failed to sign in ! Reason:  "+resultSI.reason+"is incorect or does not exist");
			}
			else
			{
				vm.showWelcome = false;
				vm.showCars = true;
				vm.user = resultSI.data;
				$location.path("profile");
			}

		});
			}	
	/*
	this.onSignInClicked = function() {
			this.showCars = true;	
			$http.post("http://localhost:9090/Test/signIn",this.signInUser).then(
				function(response){
					if(response.data.okUser == false){
						alert("This user does not exist,please try again!");
					}
					else if(response.data.okPass == false){
						alert("Incorect password!");
					}
					else
					{
						vm.user = response.data.data;
						console.log(response.data.data);
						$location.path("/profile");

					}
					vm.showWelcome = false;		
					console.log(vm.user);		
				},
				function(error){

					console.log("error");
				}

				)}*/
this.logOut = function(){
	$location.path('/');
	this.showEditUsers = false;
	this.showWelcome = true;
	this.showSignUp = false;
	this.showSignIn = false;
	this.showProfile = false;
	this.showCars = false;
	this.showAddCar = false;
	this.showStats = false;
	this.showResults = false;
	this.sear = "";
	this.user = {
		name : "Aleksandar",
		lastName : "Stanoevski",
		mobile : "070 000 000",
		email : "acestan@gmail.com",
		username : "acestan",
		password : "122345",
		ssid : "2208993111111",
		role : "",
		cars : []

	}
	this.signInUser = {
		username : "acestan",
		password : "122345"
	}
	this.carToAdd = {
		id : "",
		brand : "Opel",
		model : "Corsa",
		engine : "75",
		lastService : "2015-12-12",
		fuelCompsumption : "4.9",
		km : "0",
		fk:  vm.user.ssid
	}

}
	this.editUsers =function(){
		this.showEditUsers = true;
		this.showStats = false;
		this.showCars = false;
		this.showAddCar =false;
		this.showResults = false;
	}
	
	this.onClickSignUp = function(){ 
		this.showSignUp = true;
		this.showWelcome = false;
		$location.path('/signup');};
	this.onClickSignIn = function(){ 
		this.showSignIn = true;
		this.showWelcome = false;
		$location.path('/signin');};
	this.onCarsClicked = function(){
				this.showEditUsers = false;
				this.showAddCar = false;
				this.showCars = true;
				this.showStats = false;
			this.showResults = false;}
	this.onStatsClicked = function(){
				this.showEditUsers = false;
				this.showStats = true;
				this.showCars = false;
				this.showAddCar =false;
			this.showResults = false;}

	this.onMngCarsClicked = function(){
				console.log(vm.carToAdd);
				this.showAddCar = true;
				this.showEditUsers = false;
				this.showCars = false;
				this.showStats = false;
				this.showResults = false;}
	this.BackClicked = function(){
				$location.path('/');
				this.showWelcome = true;
				this.showSignUp = false;
				this.showSignIn = false;
				this.showProfile = false;
				this.showCars = false;
				this.showAddCar = false;
				this.showStats = false;}
	this.carBack = function(){
					console.log(vm.user.cars);
					$location.path('/profile');}
	this.editCar = function(car){
				vm.carToAdd = car;
				$location.path('/edit');}
	this.addCar =  function(){
		carService.addCar(vm.carToAdd).then(function(addResult){
			if(addResult.status === "success")
			{
				vm.user.cars.push(vm.carToAdd);
				vm.showCars = true;
				vm.showAddCar = false;
				$location.path("/profile");
				vm.carToAdd = {
								id : "",
								brand : "Opel",
								model : "Corsa",
								engine : "75",
								lastService : "2015-12-12",
								fuelCompsumption : "4.9",
								fk:  vm.user.ssid}
			}
			else
			{
				alert("Failed to add car ! Reason : The car whit this id is already added !")
			}

		})}
	/*this.addCar = function(){
				$http.post("http://localhost:9090/Test/addCar",this.carToAdd).then(
					function(response){
						if(response.data.okSSID == true){
							console.log(response.data);
							console.log(vm.carToAdd);
							console.log("ABOVE IS THE DATA TO ADD");
							vm.user.cars.push(vm.carToAdd);
							vm.showCars = true;
							vm.showAddCar = false;
							$location.path("/profile");
							vm.carToAdd = {
								id : "",
								brand : "Opel",
								model : "Corsa",
								engine : "75",
								lastService : "2015-12-12",
								fuelCompsumption : "4.9",
								fk:  vm.user.ssid
							}
							console.log(vm.user.cars);
						}
						else{
							alert("This identification number is not uniqe,please add another one,all the used id number can be looked up in the cars tab")
						}
					},
					function(error){

					})}*/
	this.deleteCar = function(car){
		carService.deleteCar(car).then(function(deleteResult){
			console.log(deleteResult);
			if(deleteResult.status === "success")
			{
				vm.user.cars.splice(vm.user.cars.indexOf(car),1);
				$location.path("/profile");
			}
		})}
	/*this.deleteCar = function(car)
			{
				if(confirm("Are you sure you want to delete this car ?") == true){
					$http.post("http://localhost:9090/Test/deleteCar",car).then(
						function(response){
							if(response.data.okSSID == true){
								console.log(response.data);
								vm.user.cars.splice(vm.user.cars.indexOf(car),1);
								$location.path("/cars");
							}
							else{
								alert("Unsccessfull delete !");
							}
						},
						function(error){

						})
				}


			}*/
	this.updateCarInfo = function(car){
		carService.updateCarInfo(car).then(function(updateResult){
			if(updateResult.status === "success"){
				vm.carToAdd = {
								id : "",
								brand : "Opel",
								model : "Corsa",
								engine : "75",
								lastService : "2015-12-12",
								fuelCompsumption : "4.9",
								fk:  vm.user.ssid
							}
							vm.showCars = true;
							$location.path("/profile");
			}
			else{
				alert("Unsccessfull update !");
			}
			console.log(updateResult)
		})}
	/*this.updateCarInfo = function(car){
				console.log(vm.carToAdd);
				$http.post("http://localhost:9090/Test/updateCar",car).then(

					function(response){
						if(response.data.okSSID == true){
							console.log(response.data);
							vm.carToAdd = {
								id : "",
								brand : "Opel",
								model : "Corsa",
								engine : "75",
								lastService : "2015-12-12",
								fuelCompsumption : "4.9",
								fk:  vm.user.ssid
							}
							vm.showCars = true;
							$location.path("/profile");

						}
						else{
							alert("Unsccessfull update!");
						}
					},
					function(error){

					})}*/
	/*this.addTrip =  function(car){
		vm.carToAdd =  car;
		carService.addTrip(car).then(function(addTripResult){
			console.log(addTripResult);
			if(addTripResult.status === "success")
			{
				vm.carToAdd = {
				id : "",
				brand : "Opel",
				model : "Corsa",
				engine : "75",
				lastService : "2015-12-12",
				fuelCompsumption : "4.9",
				fk:  vm.user.ssid
			}
			this.showCars = true;
			$location.path("/profile");
			}
			else{
				alert("Unsccessfull update!");
			}
		})
	}*/
	this.addTrip = function(car){
				vm.carToAdd = car;
				console.log(vm.CarToAdd);
				$http.post("http://localhost:9090/Test/updateTrip",vm.carToAdd).then(

					function(response){
						if(response.data.okSSID == true){
							console.log(response.data);
							vm.carToAdd = {
								id : "",
								brand : "Opel",
								model : "Corsa",
								engine : "75",
								lastService : "2015-12-12",
								fuelCompsumption : "4.9",
								km : "0",
								fk:  vm.user.ssid
							}
							this.showCars = true;
							$location.path("/profile");
						}
						else{
							alert("Unsccessfull update!");
						}
					},
					function(error){

					})}
	this.searchCars = function(){
		this.showResults = true;
		this.showCars = false;
		this.showStats = false;
		this.showAddCar = false;
		this.showEditUsers = false;

		$http.post("http://localhost:9090/Test/search",vm.searchContent).then(

			function(response){
				console.log(response);
				vm.searchResult = response.data;
			}
			)

	}
	this.adminDeleteCar = function(car)
	{

				if(confirm("Are you sure you want to delete this car ?") == true){
					$http.post("http://localhost:9090/Test/deleteCar",car).then(
						function(response){
							if(response.data.okSSID == true){
								console.log(response.data);
								vm.user.cars.splice(vm.searchResult.indexOf(car),1);
								vm.showResults = false;
								$location.path("/profile");
							}
							else{
								alert("Unsccessfull delete !");
							}
						},
						function(error){

						})
				}

	}		

			}]);
app.config(function($routeProvider) {
	$routeProvider.when('/signup',
	{
		templateUrl: 'templates/pages/signup/index.html'
	})
	/*.when('/signin',
	{
		templateUrl: 'templates/pages/signin/index.html'
	})*/
.when('/profile',
{
	templateUrl: 'templates/pages/userprofile/index.html'
})
.when('/cars',
{
	templateUrl: 'templates/pages/cars/index.html'
})
.when('/mngcars',
{
	templateUrl: 'templates/pages/mngcars/index.html'
})
.when('/stats',
{
	templateUrl: 'templates/pages/stats/index.html'
})
.when('/edit',
{
	templateUrl:'templates/pages/edit/index.html'
})
.otherwise({redirectTo : '/'})	
}
);
/*app.component('listSearch'{
	templateUrl = "templates/listSearch/index.html";
})*/