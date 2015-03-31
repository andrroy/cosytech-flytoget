angular.module('trickle-webapp').controller("headerCtrl", ['$scope' , '$http',
    function($scope, $http) {

        var url = "http://api.openweathermap.org/data/2.5/weather?lat=60.1952777778&lon=11.0994444444";
        console.log("");

        $scope.getDateTime = new Date;
        console.log($scope.getDateTime);

        // Simple GET request example :
        $http.get(url).
            success(function(data, status, headers, config) {
                //console.log(data.main.temp);
                var t = (parseFloat(data.main.temp) - 273.15);
                $scope.temperature = t.toFixed(1);

                $scope.icon = data.weather[0].icon + '.png';

            }).
            error(function(data, status, headers, config) {
                $scope.temperature = 0;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }]);
