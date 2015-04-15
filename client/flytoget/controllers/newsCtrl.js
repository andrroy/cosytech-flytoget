angular.module('trickle-webapp').controller("newsCtrl",['$scope', '$meteor',  '$stateParams', 'AppData',
    function($scope, $meteor, $stateParams, AppData){

        AppData.setName($stateParams.slug);

        console.log("newsFeed loaded...");
        $scope.newsEntries = $meteor.collection(NewsEntries).subscribe('newsEntries');

        console.log($scope.newsEntries);

    }]);