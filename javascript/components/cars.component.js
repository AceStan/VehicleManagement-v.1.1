angular.module('VehicleManagement')
.component("listCars",{
	templateUrl:"/templates/pages/cars/index.html",
	bindings: {
		value : "<"
	}
})