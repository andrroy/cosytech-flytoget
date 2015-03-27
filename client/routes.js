angular.module("trickle-webapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        // Define routes:
        $stateProvider
            .state('applications',{
                url:'/overview',
                templateUrl:'client/flytoget/views/main-menu.ng.html',
                controller: 'MenuItemsCtrl'
            })
            .state('application', {
                url: '/:applicationId',
                templateUrl: 'client/flytoget/views/application-details.ng.html',
                controller: 'ApplicationDetailsCtrl'
            });

        $urlRouterProvider.otherwise('/overview');
    }]);
