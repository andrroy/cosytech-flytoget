angular.module('trickle-webapp').filter("airlineFltr", [function () {
    return function (flights, airline) {

        if(!airline){
            return true;
        }

        return _.filter(flights, function (flight) {
            if(flight.airline != airline){
                return false;
            }
            else return true;
        });
    };
}]);
