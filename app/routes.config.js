(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .config(routeConfig)
        .run(function ($rootScope, $location, $anchorScroll, $routeParams) {
            //when the route is changed scroll to the proper element.
            $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
                $location.hash($routeParams.go);
                $anchorScroll();
                //console.log($location.path());
                //$location.path($location.path(), false);
            });
        })
        .run(function ($route, $rootScope, $location) {
            var original = $location.path;
            $location.path = function (path, reload) {
                if (reload === false) {
                    var lastRoute = $route.current;
                    var un = $rootScope.$on('$locationChangeSuccess', function () {
                        $route.current = lastRoute;
                        un();
                    });
                }
                return original.apply($location, [path]);
            };
        })
    function routeConfig($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'})
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: ''
            })
            .when('/events', {
                templateUrl: 'app/views/events.html',
                controller: ''
            })
            .when('/schedules', {
                templateUrl: 'app/views/schedules.html',
                controller: 'ScheduleCtrl'
            })
            .when('/schedules/:schedule', {
                templateUrl: 'app/views/schedules.html',
                controller: 'ScheduleCtrl'
            })
            .when('/tickets', {
                templateUrl: 'app/views/tickets.html',
                controller: ''
            })
            .when('/markets', {
                templateUrl: 'app/views/markets.html',
                controller: ''
            })
            .when('/locations', {
                templateUrl: 'app/views/location-details.html',
                controller: 'LocationCtrl'
            });
    }
})();

