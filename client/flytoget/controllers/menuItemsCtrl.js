angular.module('trickle-webapp').controller("menuItemsCtrl",['$scope', '$meteor',
    function($scope, $meteor){

        console.log('Menu loaded...');


        if(navigator.userAgent.match(/Android/i)){
            window.scrollTo(0,1);
        }

        // This will let us to the applicaitons, based on the rules defined in server/applications.js:
        $scope.applications = $meteor.collection(Applicatons).subscribe("applications");

        console.log($scope.applications);

        //console.log($scope.applications);

        $scope.remove = function(application){
            $scope.applications.remove(application);
        };
    }]);