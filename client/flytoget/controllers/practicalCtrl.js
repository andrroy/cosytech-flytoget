angular.module('trickle-webapp').controller("infoCtrl",['$scope', '$meteor', '$http',  '$stateParams', 'AppData',
    function($scope, $meteor, $http, $stateParams, AppData){

        AppData.setName($stateParams.slug)


        $scope.webcamFeed = "img/camfeed.jpeg";

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