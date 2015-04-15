angular.module('trickle-webapp').controller("gridCtrl",['$scope', '$meteor', '$stateParams', 'AppData',
    function($scope, $meteor, $stateParams, AppData){

        AppData.setName($stateParams.slug);

        console.log("GRIDCTRL LOADED");


        // The current page of the pagination
        $scope.page = 1;
        $scope.perPage = 9;

        $scope.sort = {name: 1};
        $scope.orderProperty = '1';

        // Shorthand version for subscribing - does not allow parameters to be added.
        $scope.miniairlines = $meteor.collection(MiniAirlines, false).subscribe("mini-airlines");

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
        $scope.$watch('orderProperty',function(){
            if($scope.orderProperty)
                $scope.sort = {name : parseInt($scope.orderProperty)};
        });

        $scope.$watch('search', function (value) {
            if(value){
                if(value.toString().length > 0) {
                    $scope.listView = true;
                }
            }else{
                $scope.showInfo = false;
                $scope.listView = false;
            }
        });

        // Meteor autorun runs everything inside it, once it knows something has changed
        // This creates an reactive variable
        $meteor.autorun($scope, function () {

            /*            $meteor.subscribe("airlines", {
             limit: parseInt($scope.getReactively('perPage')), // So that meteor can get updates from angular
             skip: (parseInt($scope.getReactively('page'))- 1) * parseInt($scope.getReactively('perPage')),
             sort: $scope.getReactively('sort') // Sorting on the server
             }, $scope.getReactively('search'))
             .then(function () {
             $scope.airlineCounts = $meteor.object(Counts, "numberOfAirlines", false);
             console.log($scope.airlineCounts.count);
             });*/

            $meteor.subscribe("flights", {
                sort: $scope.getReactively('sort') // Sorting on the server
            }, $scope.getReactively('search'))
                .then(function () {
                    $scope.numberOfFlights = $meteor.object(Counts, "numberOfFlights", false);
                    console.log($scope.numberOfFlights.count);
                });
        });

        $scope.getGate = function (flight) {
            if(flight.gate == ""){
                return "N/A";
            }else return flight.gate;
        };

        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.testPageChanged = function () {
            console.log("Swipe detected");
        };

        $scope.showList = function (airline) {
            console.log(airline);
            console.log("CLICKKED!");

            $scope.selectedAirline = airline.name;
            $scope.listView = true;
        };
        
        console.log("listview: " + $scope.listView);

        $scope.showInfo = false;

        $scope.selectedAirline = '';

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