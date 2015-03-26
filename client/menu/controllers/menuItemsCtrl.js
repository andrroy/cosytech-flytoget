angular.module('trickle-webapp').controller("MenuItemsCtrl",['$scope', '$meteor',
    function($scope, $meteor){
        $scope.applications = $meteor.collection(Applicatons);

        $scope.remove = function(application){
            $scope.applications.remove(application);
        };
    }]);