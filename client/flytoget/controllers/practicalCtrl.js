angular.module('trickle-webapp').controller("practicalCtrl",['$scope', '$meteor', '$http',
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


        }

        $http.get("https://avinor.no/Api/QueueTime/OSL?language=no&_=1425427077776")
            .success(function(res) {
                console.log(res);
                $scope.queueTime = JSON.parse(res).QueueTime.replace ( /[^\d.]/g, '' );
            })
            .error(function(err) {
                console.log("QueueTime errro");
            });

    }]);