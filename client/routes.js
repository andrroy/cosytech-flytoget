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
                url: '/:slug',
                templateUrl: function ($stateParams) {
                    if($stateParams.slug == 'news'){
                        return 'client/flytoget/views/news-feed.ng.html'
                    }
                    return 'client/flytoget/views/grid.ng.html'
                },
                controllerProvider: function ($stateParams) {
                    console.log($stateParams.slug);
                    if($stateParams.slug == 'news'){
                        console.log("navigating to news");
                        return $stateParams.slug + "Ctrl";
                    }
                    var ctrlName = "gridCtrl"; // TODO: Fix this.
                    console.log("navigating to " + ctrlName);
                    return ctrlName;
                }
            });
        $urlRouterProvider.otherwise("/");
    }]);