(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia', [])
        .controller('ScheduleCtrl', ScheduleCtrl);

    function ScheduleCtrl($scope, $timeout, $window) {
        var w = angular.element($window);

        console.log(moment({hour: 14, minute: 0}));
        //mock data object for Schedules
        var tabs = [
            {
                scheduleID: 0, isSelected: true, scheduleDateStr: "Monday, 7 December",
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
                                timeStr: "11:00am - 12:00nn",
                                timeStart: moment({hour: 14, minute: 0}),
                                minutes: 60
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: []
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
                                timeStr: "11:00am - 12:00nn",
                                timeStart: moment({hour: 14, minute: 0}),
                                minutes: 60
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: []
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
                                timeStr: "11:00am - 12:00nn",
                                timeStart: moment({hour: 14, minute: 0}),
                                minutes: 60
                            }
                        ]
                    },
                    {
                        title: "market",
                        enabled: true,
                        cssClass: "market",
                        colorScheme: "#6dcff6",
                        timeEntries: []
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
        ];


        w.bind('resize', function () {
            $scope.$apply();
        });

        $(window).resize(UpdateSizeWindow);

        $scope.tabs = tabs;
        $scope.selectedIndex = 0;

        $scope.SelectTab = function (tab) {

            for (var i = 0; i < $scope.tabs.length; i++)
                tabs[i].isSelected = false;

            tab.isSelected = true;
            $scope.UpdateSize(tab.scheduleID);
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

        function UpdateSizeWindow() {
            $scope.UpdateSize($scope.selectedIndex);
        }

        $timeout(function () {
            $scope.UpdateSize();
        }, 100)

    }
})();

