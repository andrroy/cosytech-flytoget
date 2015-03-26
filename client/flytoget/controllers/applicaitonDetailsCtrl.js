   angular.module('trickle-webapp').controller('ApplicationDetailsCtrl', ['$scope', '$stateParams', '$meteor',
        function ($scope, $stateParams, $meteor) {

            //$scope.applicationId = $stateParams.applicationId;
            $scope.app = $meteor.object(Applicatons, $stateParams.applicationId, false);

            $scope.save = function () {
                $scope.app.save().then(function (numberOfDocs) {
                    console.log("Success", numberOfDocs);
                }, function (error) {
                    console.log("Error", error);
                });
            };

            $scope.reset = function () {
                $scope.app.reset();
            }
        }]);