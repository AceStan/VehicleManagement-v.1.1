angular.module('VehicleManagement')
.component("addCar",{
    templateUrl:"/templates/pages/addcar/index.html",
    bindings: {
        value : "<"
    }
})