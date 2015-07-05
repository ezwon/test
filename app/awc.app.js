(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia', ['ngRoute','ngAnimate','pascalprecht.translate','timer','ngDialog'])
        .controller('MainCtrl', MainCtrl)
        .controller('ScheduleCtrl', ScheduleCtrl)
        .controller('LocationCtrl', LocationCtrl)
        .filter('timeLineStart', timeLineStart)
        .filter('timeLineLength', timeLineLength)
        .controller('navMenuCtrl', navMenuCtrl)
        .directive('navMenu', navMenu)
        .service('apiService', apiService);

    function MainCtrl($scope,$rootScope,$translate, ngDialog) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
        $rootScope.selectedLanguage = 'english';
        $rootScope.openDefault = function () {
            ngDialog.open({
                template: 'dialogID',
                className: 'ngdialog-theme-default'
            });
        };
    }

    function ScheduleCtrl($scope, $timeout, $window, apiService,$routeParams,$location ,$anchorScroll) {
        var w = angular.element($window);
        w.bind('resize', function () {
            $scope.$apply();
        });
        $(window).resize(UpdateSizeWindow);

        $scope.SelectTab = function (id) {

            for (var i = 0; i < $scope.tabs.length; i++){
                $scope.tabs[i].isSelected = false;
                if($scope.tabs[i].scheduleID == id)
                    $scope.tabs[i].isSelected = true;
            }

            $scope.UpdateSize(id);
            $location.path('/schedules/' + id, false);
        }
        $scope.UpdateSize = function (index) {
            var windowWidth = w[0].innerWidth,
                schedEdntryWidth = ($(".schedule-day")[0].clientWidth) + 60, //60 - total margin left and right for each schedule entry
                pixelToCenter = 0,
                schedEntryExcessWidth = 0,
                selectedIndex = index;


            $scope.selectedIndex = selectedIndex;

            var windowWidthHalf = windowWidth / 2,
                schedEdntryWidthHalf = schedEdntryWidth / 2;

            if (schedEdntryWidth > windowWidthHalf) {
                schedEntryExcessWidth = schedEdntryWidth - windowWidthHalf;
                pixelToCenter = schedEdntryWidthHalf - schedEntryExcessWidth - 8;
            }

            selectedIndex -= 1;
            if (selectedIndex > 0)
                pixelToCenter -= (selectedIndex * schedEdntryWidth);

            $(".schedule-day-list-wrapper").css("left", (pixelToCenter) + "px");

            //console.log("selectedIndex: ", selectedIndex);
            //console.log("window width: ", windowWidth);
            //console.log("entry width: ", schedEdntryWidth);
            //console.log("window width half: ", windowWidthHalf);
            //console.log("entry width half: ", schedEdntryWidthHalf);
            //console.log("schedEntryExcessWidth: ", schedEntryExcessWidth);
            //console.log("pixelToCenter: ", pixelToCenter);

        }
        $scope.ScrollToTimeEntry = function(id){
            $location.hash('time-entry-' + id);
            $anchorScroll();

            for (var i = 0; i < $scope.tabs.length; i++) {
                var schedule = $scope.tabs[i];
                for (var j = 0; j < schedule.timeLineEntries.length; j++) {
                    var entry = schedule.timeLineEntries[j];
                    if(id == entry.id){
                        entry.showDetails = true;
                        console.log(entry);
                    }

                }

            }


        }

        function UpdateSizeWindow() {
            $scope.UpdateSize($scope.selectedIndex);
        }

        $scope.MockMajorSponsors = apiService.mockMajorSponsor;
        $scope.MockSponsors = apiService.mockSponsors;



        apiService.get().then(function (response) {
            var mockTabs = [
                {
                    scheduleID: 1, isSelected: true, scheduleDateStr: "Monday, 7 December",
                    timeLineStart: moment({hour: 10, minute: 0}),
                    itinerary: [
                        {
                            title: "speeches & panels",
                            enabled: true,
                            cssClass: "speech",
                            colorScheme: "#fa7b65",
                            timeEntries: [
                                {
                                    id:1,
                                    title: "STM",
                                    showDetails: false,
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Opening address",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "10:00am - 10:00am",
                                    timeStart: moment({hour: 10, minute: 0}),
                                    duration: 60 //in minutes
                                },
                                {
                                    id:2,
                                    title: "Tim Tetra",
                                    showDetails: false,
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Why good design matters and why you should care",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "11:10am - 11:25am",
                                    timeStart: moment({hour: 11, minute: 10}),
                                    duration: 15 //in minutes
                                },
                                {
                                    id:3,
                                    title: "KEYNOTE",
                                    showDetails: false,
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Why good design matters and why you should care",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "11:30am - 12:00nn",
                                    timeStart: moment({hour: 11, minute: 30}),
                                    duration: 30 //in minutes
                                },
                                {
                                    id:4,
                                    title: "MOBVISTA",
                                    showDetails: false,
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Why good design matters and why you should care",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "12:30pm - 2:00pn",
                                    timeStart: moment({hour: 12, minute: 30}),
                                    duration: 90 //in minutes
                                }

                            ]
                        },
                        {
                            title: "market",
                            enabled: true,
                            cssClass: "market",
                            colorScheme: "#6dcff6",
                            timeEntries: [
                                {
                                    id:5,
                                    title: "MARKET OPENS",
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Meet, greet and talk some ****",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "11:00am - 7:00pm",
                                    timeStart: moment({hour: 11, minute: 0}),
                                    duration: 480 //in minutes
                                }
                            ]
                        },
                        {
                            title: "traffic source meetups",
                            enabled: true,
                            cssClass: "traffic",
                            colorScheme: "#B2D034",
                            timeEntries: [
                                {
                                    id:6,
                                    title: "Dating Network Drinks",
                                    secondTitle: "",
                                    websiteUrl: '',
                                    imageUrl: '',
                                    shortDescription: "Meet, greet and talk some ****",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "6:00pm - 9:00pm",
                                    timeStart: moment({hour: 18, minute: 0}),
                                    duration: 180 //in minutes
                                }
                            ]
                        },
                        {
                            title: "training workshops",
                            enabled: false,
                            cssClass: "training",
                            colorScheme: "",
                            timeEntries: []
                        },
                        {
                            title: "networking",
                            enabled: false,
                            cssClass: "networking",
                            colorScheme: "",
                            timeEntries: []
                        }
                    ]
                },
                {
                    scheduleID: 2, isSelected: false, scheduleDateStr: "Tuesday, 8 December",
                    timeLineStart: moment({hour: 10, minute: 0}),
                    itinerary: [
                        {
                            title: "speeches & panels",
                            enabled: true,
                            cssClass: "speech",
                            colorScheme: "#fa7b65",
                            timeEntries: [
                                {
                                    title: "David Savory",
                                    showDetails: false,
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "10:00am - 12:00nn",
                                    timeStart: moment({hour: 16, minute: 0}),
                                    duration: 40 //in minutes
                                },
                                {
                                    title: "Jayson Daquer",
                                    showDetails: false,
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "1:00pm - 2:30pm",
                                    timeStart: moment({hour: 11, minute: 30}),
                                    duration: 90 //in minutes
                                }
                            ]
                        },
                        {
                            title: "market",
                            enabled: true,
                            cssClass: "market",
                            colorScheme: "#6dcff6",
                            timeEntries: [
                                {
                                    title: "David Savory",
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "10:00am - 12:00nn",
                                    timeStart: moment({hour: 11, minute: 0}),
                                    duration: 120 //in minutes
                                }
                            ]
                        },
                        {
                            title: "traffic source meetups",
                            enabled: true,
                            cssClass: "traffic",
                            colorScheme: "#B2D034",
                            timeEntries: []
                        },
                        {
                            title: "training workshops",
                            enabled: false,
                            cssClass: "training",
                            colorScheme: "",
                            timeEntries: []
                        },
                        {
                            title: "networking",
                            enabled: false,
                            cssClass: "networking",
                            colorScheme: "",
                            timeEntries: []
                        }
                    ]
                },
                {
                    scheduleID: 3, isSelected: false, scheduleDateStr: "Wednesday, 9 December",
                    timeLineStart: moment({hour: 10, minute: 0}),
                    itinerary: [
                        {
                            title: "speeches & panels",
                            enabled: true,
                            cssClass: "speech",
                            colorScheme: "#fa7b65",
                            timeEntries: [
                                {
                                    title: "David Savory",
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "10:00am - 12:00nn",
                                    timeStart: moment({hour: 11, minute: 0}),
                                    duration: 120 //in minutes
                                },
                                {
                                    title: "Jayson Daquer",
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "1:00pm - 2:30pm",
                                    timeStart: moment({hour: 13, minute: 30}),
                                    duration: 90 //in minutes
                                }
                            ]
                        },
                        {
                            title: "market",
                            enabled: true,
                            cssClass: "market",
                            colorScheme: "#6dcff6",
                            timeEntries: [
                                {
                                    title: "David Savory",
                                    secondTitle: "President of iStack Manila",
                                    websiteUrl: 'http://istackholdings.com/',
                                    imageUrl: '',
                                    shortDescription: "How to pay designers in your sleep",
                                    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                    timeStr: "10:00am - 12:00nn",
                                    timeStart: moment({hour: 11, minute: 0}),
                                    duration: 120 //in minutes
                                }
                            ]
                        },
                        {
                            title: "traffic source meetups",
                            enabled: true,
                            cssClass: "traffic",
                            colorScheme: "#B2D034",
                            timeEntries: []
                        },
                        {
                            title: "training workshops",
                            enabled: false,
                            cssClass: "training",
                            colorScheme: "",
                            timeEntries: []
                        },
                        {
                            title: "networking",
                            enabled: false,
                            cssClass: "networking",
                            colorScheme: "",
                            timeEntries: []
                        }
                    ]
                }
            ];
            var event = response.data.event,
                tabs = [],
                entriesTimeLine = [],
                schedule = null,
                itinerary = [],
                timeEntries = [];

            for (var i = 0; i < mockTabs.length; i++) {
                var schedule = mockTabs[i];
                schedule.timeLineEntries = [];
                for (var j = 0; j < schedule.itinerary.length; j++) {
                    var itinerary = schedule.itinerary[j];
                    for (var k = 0; k < itinerary.timeEntries.length; k++) {
                        var entry = itinerary.timeEntries[k];
                        entry.colorScheme = itinerary.colorScheme;
                        entry.cssClass = itinerary.cssClass;
                        schedule.timeLineEntries.push(entry);
                    };
                }

                schedule.timeLineEntries.sort( function (a,b) {
                    return a.timeStart > b.timeStart;
                })

            }

            $scope.tabs = mockTabs;
            $scope.selectedIndex = 1;
            $timeout(function () {
                $scope.UpdateSize();
                if($routeParams.schedule)
                    $scope.SelectTab($routeParams.schedule);
            }, 100)

            return;

            for (var i = 0; i < event.schedules.length; i++) {
                schedule = event.schedules[i];
                itinerary = [];
                timeEntries = [];

                for (var j = 0; j < schedule.itineraries.length; j++) {
                    var obj = schedule.itineraries[j];

                    timeEntries = [];
                    for (var k = 0; k < obj.entries.length; k++) {
                        var entry = obj.entries[k];


                        timeEntries.push({
                            title: entry.title,
                            showDetails: false,
                            secondTitle: entry.second_title,
                            websiteUrl: entry.website,
                            imageUrl: entry.image_url,
                            shortDescription: entry.short_description,
                            longDescription: entry.long_description,
                            timeStr: entry.time_starts + " - " + entry.time_ends,
                            timeStart: moment({hour: 11, minute: 0}), //moment(new Date(schedule.date_time_start)),
                            duration: 60 //in minutes
                        })
                    }

                    itinerary.push({
                        title: obj.title,
                        enabled: obj.enabled == "1" ? true : false,
                        cssClass: '',
                        colorScheme: obj.color_scheme,
                        timeEntries: timeEntries
                    });
                }

                tabs.push({
                    scheduleID: schedule.id,
                    isSelected: i == 0 ? true : false,
                    scheduleDateStr: moment(schedule.date_time_start, "YYYY-MM-D hh:mm:ss").format('dddd, D MMMM'),
                    timeLineStart: moment({hour: 10, minute: 0}),
                    itinerary: itinerary
                });

            }


            if($routeParams.schedule)
                for (var i = 0; i < tabs.length; i++){
                    tabs[i].isSelected = false;
                    console.log(tabs[i].scheduleID.toString() == $routeParams.schedule.toString());
                    if(tabs[i].scheduleID == $routeParams.schedule)
                        tabs[i].isSelected = true;
                }

            $scope.tabs = mockTabs;
            $scope.selectedIndex = 1;
            $timeout(function () {
                $scope.UpdateSize();
                if($routeParams.schedule)
                    $scope.SelectTab($routeParams.schedule);
            }, 100)
        });

    }

    function LocationCtrl($scope) {
        //google map custom marker

        var myCenter = new google.maps.LatLng(13.746730, 100.539568);

        function initialize() {

            var mapProp = {
                center: myCenter,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'assets/images/marker.png'
            });

            marker.setMap(map);
        }
        initialize();


    }

    function navMenu() {
        var directive = {
            restrict: "AE",
            link: link,
            controller:'navMenuCtrl',
            replace: true,
            templateUrl: "app/views/template/navigation.html",
            scope: {
                activeMenu: "@"
            }
        };

        function link(scope, element, attr) {

        }

        return directive;
    }

    function navMenuCtrl($scope,$rootScope,$translate){
        $scope.showMobileMenu = false;
        $scope.openTranslations = true;
        $scope.translationMap = [
            {
                active:true,
                key:'english',
                flagUrl:'assets/images/lang-england.png',
                altText:'england flag'
            },
            {
                active:false,
                key:'chinese',
                flagUrl:'assets/images/lang-china.png',
                altText:'china flag'
            },
            {
                active:false,
                key:'indonesia',
                flagUrl:'assets/images/lang-indonesia.png',
                altText:'indonesia flag'
            },
            {
                active:false,
                key:'thailand',
                flagUrl:'assets/images/lang-thailand.png',
                altText:'thailand flag'
            }
        ]
        $scope.changeLanguage = function (key) {
            for (var i = 0; i < $scope.translationMap.length; i++) {
                $scope.translationMap[i].active = false;
                if (key == $scope.translationMap[i].key)
                    $scope.translationMap[i].active = true;
            }

            $scope.translationMap.sort( function (a) {
                return a.active == false;
            })
            $translate.use(key);
            $scope.openTranslations = !$scope.openTranslations;
            $rootScope.selectedLanguage = key;
        };

        $scope.changeLanguage($rootScope.selectedLanguage);
    }

    function timeLineStart() {
        return function (input, timeLineStart) {
            return input.diff(timeLineStart, 'minutes') * 1.5;
        }
    }

    function timeLineLength() {
        return function (input) {
            return input * 1.5;
        }
    }

    function apiService($http) {
        var mockTabs = [
            {
                scheduleID: 0, isSelected: true, scheduleDateStr: "Monday, 7 December",
                timeLineStart: moment({hour: 10, minute: 0}),
                itinerary: [
                    {
                        title: "speeches & panels",
                        enabled: true,
                        cssClass: "speech",
                        colorScheme: "#fa7b65",
                        timeEntries: [
                            {
                                title: "David Savory",
                                showDetails: false,
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 11, minute: 0}),
                                duration: 120 //in minutes
                            },
                            {
                                title: "Jayson Daquer",
                                showDetails: false,
                                secondTitle: "Web Developer",
                                websiteUrl: 'http://jaysondaquer.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "1:00pm - 2:30pm",
                                timeStart: moment({hour: 13, minute: 30}),
                                duration: 90 //in minutes
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: [
                            {
                                title: "David Savory",
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 11, minute: 0}),
                                duration: 120 //in minutes
                            }
                        ]
                    },
                    {
                        title: "traffic source meetups",
                        enabled: true,
                        cssClass: "traffic",
                        colorScheme: "#6a7378",
                        timeEntries: []
                    },
                    {
                        title: "training workshops",
                        enabled: false,
                        cssClass: "training",
                        colorScheme: "",
                        timeEntries: []
                    },
                    {
                        title: "networking",
                        enabled: false,
                        cssClass: "networking",
                        colorScheme: "",
                        timeEntries: []
                    }
                ]
            },
            {
                scheduleID: 1, isSelected: false, scheduleDateStr: "Tuesday, 8 December",
                timeLineStart: moment({hour: 10, minute: 0}),
                itinerary: [
                    {
                        title: "speeches & panels",
                        enabled: true,
                        cssClass: "speech",
                        colorScheme: "#fa7b65",
                        timeEntries: [
                            {
                                title: "David Savory",
                                showDetails: false,
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 16, minute: 0}),
                                duration: 40 //in minutes
                            },
                            {
                                title: "Jayson Daquer",
                                showDetails: false,
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "1:00pm - 2:30pm",
                                timeStart: moment({hour: 11, minute: 30}),
                                duration: 90 //in minutes
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: [
                            {
                                title: "David Savory",
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 11, minute: 0}),
                                duration: 120 //in minutes
                            }
                        ]
                    },
                    {
                        title: "traffic source meetups",
                        enabled: true,
                        cssClass: "traffic",
                        colorScheme: "#6a7378",
                        timeEntries: []
                    },
                    {
                        title: "training workshops",
                        enabled: false,
                        cssClass: "training",
                        colorScheme: "",
                        timeEntries: []
                    },
                    {
                        title: "networking",
                        enabled: false,
                        cssClass: "networking",
                        colorScheme: "",
                        timeEntries: []
                    }
                ]
            },
            {
                scheduleID: 2, isSelected: false, scheduleDateStr: "Wednesday, 9 December",
                timeLineStart: moment({hour: 10, minute: 0}),
                itinerary: [
                    {
                        title: "speeches & panels",
                        enabled: true,
                        cssClass: "speech",
                        colorScheme: "#fa7b65",
                        timeEntries: [
                            {
                                title: "David Savory",
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 11, minute: 0}),
                                duration: 120 //in minutes
                            },
                            {
                                title: "Jayson Daquer",
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "1:00pm - 2:30pm",
                                timeStart: moment({hour: 13, minute: 30}),
                                duration: 90 //in minutes
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: [
                            {
                                title: "David Savory",
                                secondTitle: "President of iStack Manila",
                                websiteUrl: 'http://istackholdings.com/',
                                imageUrl: '',
                                shortDescription: "How to pay designers in your sleep",
                                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales velit. Nullam sodales mi euismod enim congue gravida.",
                                timeStr: "10:00am - 12:00nn",
                                timeStart: moment({hour: 11, minute: 0}),
                                duration: 120 //in minutes
                            }
                        ]
                    },
                    {
                        title: "traffic source meetups",
                        enabled: true,
                        cssClass: "traffic",
                        colorScheme: "#6a7378",
                        timeEntries: []
                    },
                    {
                        title: "training workshops",
                        enabled: false,
                        cssClass: "training",
                        colorScheme: "",
                        timeEntries: []
                    },
                    {
                        title: "networking",
                        enabled: false,
                        cssClass: "networking",
                        colorScheme: "",
                        timeEntries: []
                    }
                ]
            }
        ];
        var mockMajorSponsors = [
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
                OtherInfo: "of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id",
                OtherInfoUrl: ''
            },
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
                OtherInfo: "of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id",
                OtherInfoUrl: ''
            },
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
                OtherInfo: "of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id",
                OtherInfoUrl: ''
            }
        ];
        var mockSponsors = [
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."

            },
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."

            },
            {
                Name: "Barack Obama",
                Position: "President of the USA",
                AvatarUrl: "",
                Description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."

            }
        ]
        var svc = {
            get: get,
            mockMajorSponsor: mockMajorSponsors,
            mockSponsors: mockSponsors
        }

        return svc;

        function get() {
            return awaAPI("GET", "events", "?with=schedules.itineraries.entries");
        }

        function awaAPI(method, resource, data) {

            /*
             *  Resources: events, schedules, itineraries, entries
             *  POST, GET to http://awa-api.istackmanila.com/{resource}
             *  PUT, DELETE and GET to http://awa-api.istackmanila.com/{resource}/{id}
             *  http://awa-api.istackmanila.com/v2/events
             *  http://awa-api.istackmanila.com/events/1?with=schedules ----with schedules
             *  http://awa-api.istackmanila.com/events/1?with=schedules.itineraries --with itineraries under schedules
             *  http://awa-api.istackmanila.com/events/1?with=schedules.itineraries.entries with entries under itineraries under schedules
             */

            $http.defaults.cache = true;
            return $http({
                method: method,
                url: 'http://awa-api.istackmanila.com/v2/' + resource,
                responseType: 'json',
                contentType: "application/json",
                data: data,
                cache: true
            });
        }
    }

})();

