angular.module('trickle-webapp')
    .controller("headerCtrl", ['$scope' , '$http',
        function($scope, $http) {
            
            console.log("HeaderCtrl...");

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
        }])

    .directive('zippy', function () {
        console.log("directive");
        return {
            restrict: 'E', // Element Attribute Class Comment
            link: function (scope, element, attribute) {
                scope.atitle = attribute.title
            },
            template: '<h1>Rikard<h1>'
        };
    });
