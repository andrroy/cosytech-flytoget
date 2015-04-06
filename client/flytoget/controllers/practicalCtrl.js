angular.module('trickle-webapp').controller("infoCtrl",['$scope', '$meteor', '$http',
    function($scope, $meteor, $http){

        $scope.webcamFeed = "https://tjenester.avinor.no/internalservice-1.0/webcams/OSL/0";

        var refreshWebcamFeed = function() {
            var webcamImage = document.getElementsByClassName("camfeed")[0];
            var d = new Date();
            webcamImage.setAttribute("src", $scope.webcamFeed+ "?" + d.getTime());
        };

        // Refresh webcam feed every minute
        setInterval(refreshWebcamFeed, 60000);


        var getQueueTime = function() {
            $meteor.call('getQueueTime')
                .then(function(queueTime) {
                    $scope.queueTime = queueTime;
                }, function(err) {
                    console.log("QueueTime error");
                });
        };

        $scope.queueTime = getQueueTime();

        // Refresh queueTime every 30 seconds
        setInterval(getQueueTime, 30000);


    }]);