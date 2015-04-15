angular.module("trickle-webapp").factory('AppData', [
    function nameFactory () {

    var appData = {
        Name: 'Note yet set'
    };

    return {
        getName: function () {
            return appData.Name;
        },
        setName: function (name) {
            appData.Name = name;
        }
    };
}]);