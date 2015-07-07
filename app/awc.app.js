(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia', ['ngRoute', 'ngSanitize', 'ngLodash', 'ngAnimate', 'pascalprecht.translate', 'timer', 'ngDialog', 'duScroll'])
        .controller('ScheduleCtrl', ScheduleCtrl)
        .controller('LocationCtrl', LocationCtrl)
        .filter('timeLineStart', timeLineStart)
        .filter('timeLineLength', timeLineLength)
        .filter('timeCenterPopUp', timeCenterPopUp)
        .controller('navMenuCtrl', navMenuCtrl)
        .directive('navMenu', navMenu)
        .directive('langMenu', langMenu)
        .service('apiService', apiService);

    function ScheduleCtrl($scope, $timeout, $window, apiService, $routeParams, $location, $document, lodash) {
        var w = angular.element($window);
        w.bind('resize', function () {
            $scope.$apply();
        });
        $(window).resize(UpdateSizeWindow);

        $scope.SelectSchedule = function (id) {
            for (var i = 0; i < $scope.schedules.length; i++) {
                $scope.schedules[i].isSelected = false;
                if ($scope.schedules[i].scheduleID == id)
                    $scope.schedules[i].isSelected = true;
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



        $scope.ShowTooltip = function(entry){
            entry.showTooltip = true;
        }

        $scope.HideTooltip = function(entry){
            entry.showTooltip = false;
        }
        $scope.ScrollToTimeEntry = function (entry) {
            console.log("ScrollToTimeEntry",'time-entry-' + entry.timeStart.format('YYYYMMDDhhmmss') + '-' + entry.id);

            $document.scrollToElementAnimated(angular.element(document.getElementById('time-entry-' + entry.timeStart.format('YYYYMMDDhhmmss') + '-' + entry.id)));

            if(entry.longDescription == '#') return;
            entry.showDetails = true;
        }

        $scope.MockMajorSponsors = apiService.mockMajorSponsor;
        $scope.MockSponsors = apiService.mockSponsors;

        function UpdateSizeWindow() {
            $scope.UpdateSize($scope.selectedIndex);
        }

        apiService.get().then(function (response) {
            var event = response.data.data,
                tabs = [],
                itineraryList = [],
                schedule = null,
                timeEntries = [],
                uniqueItineraries = [];

            console.log("Service Response: ", event)
            for (var i = 0; i < event.schedules.length; i++) {
                schedule = event.schedules[i];
                schedule.timeLineEntries = [];
                itineraryList = [];
                uniqueItineraries = [];

                for (var j = 0; j < schedule.itineraries.length; j++) {
                    var itinerary = schedule.itineraries[j];
                    var eventDate = moment(schedule.date_time_start, "MM/DD/YYYY hh:mm");
                    timeEntries = [];
                    for (var k = 0; k < itinerary.entries.length; k++) {
                        var entry = itinerary.entries[k];
                        var timeEntry = {
                            id: k + 1,
                            itineraryId: j + 1,
                            itinerary: itinerary.title,
                            colorScheme: itinerary.color_scheme,
                            isKeynote: entry.is_keynote == '1' ? true : false,
                            title: entry.title,
                            showDetails: false,
                            secondTitle: entry.second_title,
                            websiteUrl: entry.website,
                            facebookUrl: entry.fb_link,
                            twitterUrl: entry.twitter_link,
                            instagramUrl: entry.instagram_link,
                            imageUrl: entry.image_url,
                            shortDescription: entry.short_description,
                            longDescription: entry.long_description,
                            timeStr: moment(entry.time_starts, "hh:mm").format('hh:mma') + " - " + moment(entry.time_ends, "hh:mm").format('hh:mma'),
                            orderId: entry.id,
                            timeStart: moment(eventDate.format("MM/DD/YYYY") + " " + entry.time_starts, "MM/DD/YYYY hh:mm"),
                            timeEnds: moment(eventDate.format("MM/DD/YYYY") + " " + entry.time_ends, "MM/DD/YYYY hh:mm"),
                            timeStartCalendar: moment(eventDate.format("MM/DD/YYYY") + " " + entry.time_starts + " +0700", "MM/DD/YYYY hh:mm Z"),
                            timeEndsCalendar: moment(eventDate.format("MM/DD/YYYY") + " " + entry.time_ends + " +0700", "MM/DD/YYYY hh:mm Z"),
                            duration: moment(entry.time_ends, "hh:mm").diff(moment(entry.time_starts, "hh:mm"), 'minutes')
                        };

                        timeEntries.push(timeEntry);
                        schedule.timeLineEntries.push(timeEntry);
                    }


                    if (lodash.findIndex(uniqueItineraries, function (i) {
                            return i.title == itinerary.title
                        }) == -1) {
                        uniqueItineraries.push({
                            title: itinerary.title,
                            colorScheme:itinerary.color_scheme,
                            timeEntries: []
                        })
                    }


                    itineraryList.push({
                        id: j + 1,
                        title: itinerary.title,
                        enabled: itinerary.enabled == "1" ? true : false,
                        cssClass: '',
                        colorScheme: itinerary.color_scheme,
                        timeEntries: timeEntries
                    });


                }

                //schedule.timeLineEntries.sort( function (a,b) {
                //    return parseInt(a.orderId) > parseInt(b.orderId);
                //})


                tabs.push({
                    scheduleID: i + 1,
                    timeLineEntries: schedule.timeLineEntries,
                    isSelected: i == 0 ? true : false,
                    scheduleDateStr: moment(schedule.date_time_start, "MM/DD/YYYY hh:mm").format('dddd, D MMMM'),
                    timeLineStart: moment(schedule.date_time_start, "MM/DD/YYYY hh:mm"),
                    itinerary: itineraryList,
                    uniqueItinerary: uniqueItineraries
                });


            }

            for (var i = 0; i < tabs.length; i++) {
                var schedule = tabs[i];

                for (var j = 0; j < schedule.timeLineEntries.length; j++) {
                    var entry = schedule.timeLineEntries[j];

                    console.log(entry.itinerary);

                    for (var k = 0; k < schedule.uniqueItinerary.length; k++) {
                        var uniqueItinerary = schedule.uniqueItinerary[k];

                        if(entry.itinerary == uniqueItinerary.title)
                            uniqueItinerary.timeEntries.push(entry);
                        
                    }

                }
            }



            if ($routeParams.schedule)
                for (var i = 0; i < tabs.length; i++) {
                    tabs[i].isSelected = false;
                    if (tabs[i].scheduleID == $routeParams.schedule)
                        tabs[i].isSelected = true;
                }

            console.log("Parsed Schedules: ", tabs);
            $scope.schedules = tabs;
            $scope.selectedIndex = 1;
            $timeout(function () {
                $scope.UpdateSize();
                if ($routeParams.schedule)
                    $scope.SelectSchedule($routeParams.schedule);
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
            controller: 'navMenuCtrl',
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

    function langMenu() {
        var directive = {
            restrict: "AE",
            link: link,
            replace: true,
            templateUrl: "app/views/template/home-lang.html",
            scope: {
                activeMenu: "@"
            }
        };

        function link(scope, element, attr) {

        }

        return directive;
    }

    function navMenuCtrl($scope, $rootScope, $translate) {
        $scope.showMobileMenu = false;
        $scope.openTranslations = true;
        $scope.translationMap = [
            {
                active: true,
                key: 'english',
                flagUrl: 'assets/images/lang-england.png',
                altText: 'england flag'
            },
            {
                active: false,
                key: 'chinese',
                flagUrl: 'assets/images/lang-china.png',
                altText: 'china flag'
            },
            {
                active: false,
                key: 'indonesia',
                flagUrl: 'assets/images/lang-indonesia.png',
                altText: 'indonesia flag'
            },
            {
                active: false,
                key: 'thailand',
                flagUrl: 'assets/images/lang-thailand.png',
                altText: 'thailand flag'
            }
        ]
        $scope.changeLanguage = function (key) {
            for (var i = 0; i < $scope.translationMap.length; i++) {
                $scope.translationMap[i].active = false;
                if (key == $scope.translationMap[i].key)
                    $scope.translationMap[i].active = true;
            }

            $scope.translationMap.sort(function (a) {
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
            return input.diff(timeLineStart, 'minutes') * 1.33;
        }
    }

    function timeLineLength() {
        return function (input) {
            return input * 1.33;
        }
    }

    function timeCenterPopUp() {
        return function (input, width) {
            if (width < 410) {
                width = (410 - width) / 2;
                return width * -1;
            }
            else {
                width = (width - 410) / 2;
                return width
            }
        }
    }

    function apiService($http, $sce) {

        var mockMajorSponsors = [
            {
                Name: "Drew Eric Whitman",
                Position: 'Advertising Expert and Author of "Ca$hvertising"',
                AvatarUrl: "assets/images/speakers/portrait-eric-whitman.png",
                Description: "Drew worked for the direct-response division of the largest ad-agency in Philadelphia,  was Senior Direct Response Copywriter for one of the largest direct-to-the-consumer insurance companies in the world, and Associate Copy Chief for catalog giant, Day-Timers. ",
                OtherInfo: "Drew created powerfully effective advertising for companies ranging from small retail shops to giant, multi-million dollar corporations. His work has been used by many of the most successful companies and organisations in the United States including: American Automobile Association, Advertising Specialty Institute, American Legion, Amoco, Office Max, Faber-Castell, Texaco, Staples, TV Guide, and many others.",
                OtherInfo2: 'He is the author of best-seller, "CA$HVERTISING: How to Use More Than 100 Secrets of Ad-Agency Psychology to Make Big Money Selling Anything to Anyone".',
                SocialLinks: {
                    facebook: 'https://www.facebook.com/pages/Drew-Eric-Whitman-Teaches-You-the-Secrets-of-Advertising-Persuasion/110921085643973',
                    twitter: 'https://twitter.com/DrewEricWhitman',
                    website: 'http://www.drewericwhitman.com/'
                }
            }
        ];
        var mockSponsors = [
            {
                Name: "Tim Tetra",
                Position: "CMO/Co-founder of Tetra Communications",
                AvatarUrl: "assets/images/speakers/portrait-tim-tetra.png",
                Description: "Tim Tetra is a serial entrepreneur whose ads reached over 337 million people in 173 countries worldwide in 2014.  Tim has integrated lessons learned from founding six successful businesses to create inimitable edges that separate his company from the rest of the affiliate marketing pack.",
                OtherInfo: $sce.trustAsHtml("In his spare time, Tim is a huge advocate of the all-or-nothing mindset.  It is not uncommon for him to pick up a new hobby, spend 80 hours a week immersed in it with the best mentors out there, and then mastering it in record time."),
                SocialLinks: {
                    facebook: '',
                    twitter: '',
                    website: 'http://www.tetraprmedia.com'
                }
            },
            {
                Name: "Charles Ngo",
                Position: "Writer and Internet Marketer",
                AvatarUrl: "assets/images/speakers/portrait-charles-ngo.png",
                Description: "Charles Ngo is one of the most well-known and respected internet marketers in the world generating several millions dollars in profit within his first year of starting.",
                OtherInfo: $sce.trustAsHtml('He has gone on to become one of the leading authorities in affiliate marketing information. He and his team specialise in traffic sources such as Facebook, mobile, and display buys. He writes on his popular blog and speaks at conferences, and provides affiliate marketing training at <a href="https://affcelerator.instapage.com" target="_blank">AFFcelerator</a>.'),
                SocialLinks: {
                    facebook: 'https://www.facebook.com/charlesngodotcom',
                    twitter: 'https://twitter.com/dr_ngo',
                    website: 'http://www.charlesngo.com'
                }
            },
            {
                Name: "Lorenzo Green",
                Position: "Co-director Stack That Money Forums",
                AvatarUrl: "assets/images/speakers/portrait-lorenzo-green.png",
                Description: "Lorenzo Green co-directs Stack That Money forums, the number one rated affiliate forum and is a veteran in the industry with more than nine years experience. He is known for his marketing creativity, and constantly being at the forefront of the next big thing in the affiliate space. This combination has yielded him consistent seven figure/year profits with his affiliate operations.",
                OtherInfo: $sce.trustAsHtml("He has also founded a number of other successful business including a successful affiliate network and <a href='http://www.greenmantle.co.nz/' target='_blank'>Greenmantle Estate</a>, one of the most prestigious luxury lodges in his home country, New Zealand."),
                SocialLinks: {
                    facebook: 'https://www.facebook.com/mrgreen.stm',
                    twitter: 'https://twitter.com/mrlorenzogreen',
                    website: 'http://www.stackthatmoney.com/'
                }
            },
            {
                Name: "Hugh Hancock",
                Position: "Affiliate Expert and Founder of Strange Company",
                AvatarUrl: "assets/images/speakers/portrait-hugh2.png",
                Description: "Hugh has been considered an expert on internet marketing for over 20 years. He has built multiple successful web businesses including one of the most successful online video channels in the world (over 4 billion total views). His work has been featured in the New York Times, live on CNN, and in media around the world from Entertainment Weekly to The Guardian.",
                OtherInfo: "Currently he uses affiliate marketing to fund his work as a filmmaker, and is Stack That Money Forum’s Guardian Of The Guides, curating, writing and updating many of the most influential guides to affiliate marketing on the internet today.",
                SocialLinks: {
                    facebook: '',
                    twitter: 'https://twitter.com/hughhancock',
                    website: 'http://www.strangecompany.org'
                }
            },
            {
                Name: "Besmir B",
                Position: "Co-director Stack That Money Forums",
                AvatarUrl: "assets/images/speakers/portrait-besimir-b.png",
                Description: "Coming from a technical background, Besmir found affiliate marketing by pure coincidence. Besmir has been in the industry long enough to see many trends come and go. He understands that it's not about that special niche or traffic source but it's all about persistence, hard work and loving what you do.",
                OtherInfo: $sce.trustAsHtml("Lately he has been focusing on mobile marketing and investing on building new and successful companies including Stack That Money, the number one rated forum in the affiliate industry, which he is co-director of."),
                SocialLinks: {
                    facebook: '',
                    twitter: 'https://twitter.com/bbregu',
                    website: 'http://www.stackthatmoney.com/'
                }
            }
        ]
        var svc = {
            get: get,
            mockMajorSponsor: mockMajorSponsors,
            mockSponsors: mockSponsors
        }

        return svc;

        function get() {
            return awaAPI("GET", "events/latest?with=schedules.itineraries.entries");
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
                url: 'http://awa-api.istackmanila.com/' + resource,
                responseType: 'json',
                contentType: "application/json",
                data: data,
                cache: true
            });
        }
    }

})();

