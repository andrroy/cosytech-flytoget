angular.module('trickle-webapp').controller("newsCtrl",['$scope', '$meteor',
    function($scope, $meteor){
        
        console.log("newsFeed loaded...");
        $scope.newsEntries = $meteor.collection(NewsEntries).subscribe('newsEntries');

        console.log($scope.newsEntries);

    }]);