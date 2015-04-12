angular.module('trickle-webapp').controller("gridCtrl",['$scope', '$meteor', '$stateParams',
    function($scope, $meteor, $stateParams){
        
        console.log("GRIDCTRL LOADED");


        // The current page of the pagination
        $scope.page = 1;
        $scope.perPage = 9;

        $scope.sort = {name: 1};
        $scope.orderProperty = '1';

        // Shorthand version for subscribing - does not allow parameters to be added.
        //$scope.airlines = $meteor.collection(Airlines).subscribe("airlines");        console.log($scope.airlines);

        // Long version with sorting parameters
        $scope.airlines = $meteor.collection(function(){
            return Airlines.find({}, {
                sort: $scope.getReactively('sort') // Sorting on the client
            });
        });

       //Angular way of autorun: Watch variables:
         $scope.$watch('orderProperty', function(){
         if($scope.orderProperty)
             $scope.sort = {name : parseInt($scope.orderProperty)};
         });

        // Meteor autorun runs everything inside it, once it knows something has changed
        // This means that
        // This creates an reactive variable
        $meteor.autorun($scope, function () {

            $meteor.subscribe("airlines", {
                limit: parseInt($scope.getReactively('perPage')), // So that meteor can get updates from angular
                skip: (parseInt($scope.getReactively('page'))- 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort') // Sorting on the server
            }, $scope.getReactively('search'))
                .then(function () {
                console.log("crashing?");
                $scope.airlineCounts = $meteor.object(Counts, "numberOfAirlines", false);
                console.log($scope.airlineCounts.count);
            });
        });

        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.testPageChanged = function () {
            console.log("Swipe detected");
        };


        // Current state of Angular-Meteor API does not allow to retreve Mongo object
        // from other than ID. In our case we try to retreve it by slug.
        // TODO: Need solution to this.

        //$scope.applications = $meteor.object(Applicatons, $stateParams.slug);
        //$scope.applications2 = $meteor.collection(Applicatons);
        //$scope.applications2 = $meteor.collection(Applicatons).subscribe("applications");

        $scope.flights = $meteor.collection(Flights).subscribe("flights");

        $scope.listView = true;

        $scope.save = function () {
        };

        $scope.reset = function () {

        };
    }]);