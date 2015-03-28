angular.module('trickle-webapp').controller("menuItemsCtrl",['$scope', '$meteor',
    function($scope, $meteor){

        console.log('Menu loaded...');

        $scope.applications = $meteor.collection(Applicatons);

        $scope.remove = function(application){
            $scope.applications.remove(application);
        };
    }]);