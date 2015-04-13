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

        $scope.flights = $meteor.collection(function(){
            return Flights.find({}, {
                sort: $scope.getReactively('sort') // TODO: Sort by time
            });
        });

       //Angular way of autorun: Watch variables:
         $scope.$watch('orderProperty', function(){
         if($scope.orderProperty)
             $scope.sort = {name : parseInt($scope.orderProperty)};
         });

        // Meteor autorun runs everything inside it, once it knows something has changed
        // This creates an reactive variable
        $meteor.autorun($scope, function () {

            $meteor.subscribe("airlines", {
                limit: parseInt($scope.getReactively('perPage')), // So that meteor can get updates from angular
                skip: (parseInt($scope.getReactively('page'))- 1) * parseInt($scope.getReactively('perPage')),
                sort: $scope.getReactively('sort') // Sorting on the server
            }, $scope.getReactively('search'))
                .then(function () {
                $scope.airlineCounts = $meteor.object(Counts, "numberOfAirlines", false);
                console.log($scope.airlineCounts.count);
            });

            $meteor.subscribe("flights", {
                sort: $scope.getReactively('sort') // Sorting on the server
            }, $scope.getReactively('search'))
                .then(function () {
                $scope.numberOfFlights = $meteor.object(Counts, "numberOfFlights", false);
                console.log($scope.numberOfFlights.count);
            });
        });

        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.testPageChanged = function () {
            console.log("Swipe detected");
        };

        $scope.showList = function () {
          console.log("CLICKKED!");
            $scope.listView = true;
        };

        $scope.showInfo = false;

        $scope.showInfoBox = function (flight) {

            console.log(flight);

            $scope.showInfo = true;

            $scope.selectedFlight = flight;

            console.log(flight.flight_id);
            console.log(flight.gate);
            console.log(flight.schedule_time);
        };

        $scope.listView = false;

        $scope.save = function () {
        };

        $scope.reset = function () {

        };

    }]);