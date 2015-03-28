angular.module('trickle-webapp').controller("applicationDetailsCtrl",['$scope', '$meteor', '$stateParams',
    function($scope, $meteor, $stateParams){

        console.log('ApplicaitonDetals CONTROLLER');
        console.log($stateParams);


        $scope.applications = $meteor.object(Applicatons, $stateParams.appId);

        $scope.save = function () {
        };

        $scope.reset = function () {

        };
    }]);