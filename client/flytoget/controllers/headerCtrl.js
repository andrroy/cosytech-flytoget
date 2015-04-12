angular.module('trickle-webapp')
    .controller("headerCtrl", ['$scope' , '$meteor',
        function($scope, $meteor) {

            // Date
            $scope.getDateTime = new Date;

            // Temp
            var getTemp = function() {
                $meteor.call('getTemp')
                    .then(function(temp) {
                        $scope.temperature = temp;
                    }, function(err) {
                        console.log("Temp error");
                    });
            };

            $scope.temperature = getTemp();

            // refresh temp every 60 sec
            setInterval(getTemp, 60000);

            // Icon
            var getIcon = function() {
                $meteor.call('getIcon')
                    .then(function(icon) {
                        $scope.icon = icon;
                    }, function(err) {
                        console.log("Icon error");
                    });
            };

            $scope.icon = getIcon();

            // Refresh icon every 60 sec
            setInterval(getIcon, 60000);

        }])

    .directive('zippy', function () {
        //console.log("directive");
        return {
            restrict: 'E', // Element Attribute Class Comment
            link: function (scope, element, attribute) {
                scope.atitle = attribute.title
            },
            template: '<h1>Rikard<h1>'
        };
    });
