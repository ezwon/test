(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia',[])
        .controller('ScheduleCtrl', ScheduleCtrl);

    function ScheduleCtrl($scope, $timeout, $window) {
        //mock data object for Schedules
        var tabs = [
                {scheduleID: 0, isSelected:true, scheduleDateStr: "Monday, 7 December"},
                {scheduleID: 1, isSelected:false, scheduleDateStr: "Tuesday, 8 December"},
                {scheduleID: 2, isSelected:false, scheduleDateStr: "Wednesday, 9 December"},
            ],
            w = angular.element($window);

        w.bind('resize', function () {
            $scope.$apply();
        });

        $(window).resize(UpdateSizeWindow);

        $scope.tabs = tabs;
        $scope.selectedIndex = 0;

        $scope.SelectTab = function(tab){

            for (var i = 0; i < $scope.tabs.length; i++)
                tabs[i].isSelected = false;

            tab.isSelected = true;
            $scope.UpdateSize(tab.scheduleID);
        }
        $scope.UpdateSize = function(index){
            var windowWidth = w[0].innerWidth,
                schedEdntryWidth = ($(".schedule-day")[0].clientWidth) + 60, //60 - total margin left and right for each schedule entry
                pixelToCenter = 0,
                schedEntryExcessWidth = 0,
                selectedIndex = index;

            $scope.selectedIndex = selectedIndex;

            var windowWidthHalf = windowWidth / 2,
                schedEdntryWidthHalf = schedEdntryWidth /2;

            if (schedEdntryWidth > windowWidthHalf){
                schedEntryExcessWidth = schedEdntryWidth - windowWidthHalf;
                pixelToCenter =  schedEdntryWidthHalf - schedEntryExcessWidth - 8;
            }

            if(selectedIndex > 0)
                pixelToCenter -= (selectedIndex * schedEdntryWidth);

            $(".schedule-day-list-wrapper").css("left",(pixelToCenter)+ "px");

            console.log("selectedIndex: ",selectedIndex);
            console.log("window width: ", windowWidth);
            console.log("entry width: ", schedEdntryWidth);
            console.log("window width half: ", windowWidthHalf);
            console.log("entry width half: ", schedEdntryWidthHalf);
            console.log("schedEntryExcessWidth: ",schedEntryExcessWidth);
            console.log("pixelToCenter: ",pixelToCenter);

        }

        $timeout(function(){
            $scope.UpdateSize();
        },100)

        function UpdateSizeWindow(){
            $scope.UpdateSize($scope.selectedIndex);
        }

    }
})();

