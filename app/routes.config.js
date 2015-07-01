(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .config(routeConfig);

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

