angular.module('trickle-webapp').controller("entertainmentCtrl",['$scope', '$meteor', '$stateParams', 'AppData',
    function($scope, $meteor, $stateParams, AppData){

        console.log("entertainment loaded");

        AppData.setName($stateParams.slug);
    }]);