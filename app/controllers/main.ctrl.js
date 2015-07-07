(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .controller('MainCtrl', MainCtrl);


    function MainCtrl($scope, $rootScope, $translate, ngDialog) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
        $rootScope.selectedLanguage = 'english';
        //11:59pm EST Tuesday 4 August 2015.
        console.log("CountDownDate",new Date('08-4-2015 23:59 EST').getTime());
        $rootScope.openDefault = function () {
            ngDialog.open({
                template: 'dialogID',
                className: 'ngdialog-theme-default'
            });
        };
    }



})();

