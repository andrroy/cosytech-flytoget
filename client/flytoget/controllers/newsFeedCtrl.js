angular.module('trickle-webapp').controller("NewsFeedCtrø",['$scope', '$meteor',
    function($scope, $meteor){
        $scope.applications = $meteor.collection(Applicatons);

    }]);