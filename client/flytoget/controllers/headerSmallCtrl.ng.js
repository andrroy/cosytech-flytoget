angular.module('trickle-webapp')
    .controller("headerSmallCtrl", ['$scope', "AppData",
        function($scope, AppData) {

            $scope.name = AppData.getName();
            
            console.log($scope.name);

        }]);