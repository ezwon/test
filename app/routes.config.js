(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .config(appConfig)
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
    function appConfig($routeProvider, $translateProvider, ngDialogProvider) {
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

        $translateProvider.translations('en', {
            TITLE: 'Hello',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german'
        });
        $translateProvider.translations('de', {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false,
            preCloseCallback: function () {
                console.log('default pre-close callback');
            }
        });
    }


})();

