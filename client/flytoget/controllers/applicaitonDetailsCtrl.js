angular.module('trickle-webapp').controller("applicationDetailsCtrl",['$scope', '$meteor', '$stateParams',
    function($scope, $meteor, $stateParams){

        $scope.airlines = $meteor.collection(Airlines);

        $scope.applications = $meteor.object(Applicatons, $stateParams.appId);

        $scope.save = function () {
        };

        $scope.reset = function () {

        };

    }]);