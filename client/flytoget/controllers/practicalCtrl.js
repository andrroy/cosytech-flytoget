angular.module('trickle-webapp').controller("practicalCtrl",['$scope', '$meteor',
    function($scope, $meteor){

        $scope.webcamFeed = "https://tjenester.avinor.no/internalservice-1.0/webcams/OSL/0";

        var refreshWebcamFeed = function() {
            var webcamImage = document.getElementsByClassName("camfeed")[0];
            var d = new Date();
            webcamImage.setAttribute("src", $scope.webcamFeed+ "?" + d.getTime());
        };

        // Refresh webcam feed every minute
        setInterval(refreshWebcamFeed, 60000);

    }]);