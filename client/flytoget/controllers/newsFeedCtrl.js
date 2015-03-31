angular.module('trickle-webapp').controller("NewsFeedCtrl",['$scope', '$meteor',
    function($scope, $meteor){
        $scope.newsEntries = $meteor.collection(NewsEntries);
        console.log($scope.newsEntries);
    }]);