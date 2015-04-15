angular.module('trickle-webapp').filter("airlineFltr", [function () {
    return function (flights, selectedAirline) {
        
        if(!selectedAirline){
            console.log("No filter should be applied");
            return true;
        }

        return _.filter(flights, function (flight) {
            if(flight.airline != selectedAirline){
                console.log("filter applied");
                return false;
            }
            else return true;
        });
    };
}]);
