angular.module('VehicleManagement')
.service('authService',function($http){
	this.signInFunction = function(user){
     var resultSI = {
        status : "",
        reason : "",
        data : []
    }

    return $http.post("http://localhost:9090/Test/signIn",user).then(function(response){
                    //console.log("THIS IS THE RETURN FROM HTTP");
                   // console.log(response);
                  
                   if(response.data.okPass == false)
                   {
                    resultSI.status = "failure";
                    resultSI.reason = "password";
                }
                if(response.data.okUser == false)
                {
                    resultSI.status = "failure";
                    resultSI.reason = "username";
                }
                if(response.data.okPass == true && response.data.okUser == true)
                {
                    resultSI.status = "success";
                    resultSI.reason = "";
                    resultSI.data = response.data.data;
                }
                   // console.log("resultSI BEFORE RETURN !");
                   // console.log(resultSI);
                   return resultSI;
               }

               )
}
this.signUpFunction = function(user){
    var resultSU = {
        status : "",
        reason : "",
        data : []
    }
    return $http.post('http://localhost:9090/Test/getUserInfo',user).then(function(response){
     if(response.data.okSSID == false)
     {
        resultSU.status = "failure";
        resultSU.reason = "SSID";
    }
    else if(response.data.okPass == false)
    {
        resultSU.status = "failure";
        resultSU.reason = "password";
    }
    else if(response.data.okUser == false)
    {
        resultSU.status = "failure";
        resultSU.reason = "username";
    }
    else    {
        resultSU.status = "success";
        resultSU.reason = "";
        resultSU.data = response.data.data;
    }
    return resultSU;

})
}


})