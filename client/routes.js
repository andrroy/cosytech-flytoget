angular.module("trickle-webapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'client/flytoget/views/login.ng.html',
                controller: 'headerCtrl'
            })
            .state('appOverview', {
                url: '/',
                templateUrl: 'client/flytoget/views/main-menu.ng.html',
                controller: 'menuItemsCtrl'
            })
            .state('appDetails', {
                url: '/:appId',
                templateUrl: 'client/flytoget/views/application-details.ng.html',
                controller: 'applicationDetailsCtrl'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'client/flytoget/views/news-feed.ng.html',
                controller: 'newsFeedCtrl'
            });
        $urlRouterProvider.otherwise("/");
    }]);