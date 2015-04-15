angular.module('trickle-webapp').controller('loginCtrl', ['$scope', 'AppData',
    function ($scope, AppData) {

        AppData.setName("Login");

        console.log("Login...");
    }]);