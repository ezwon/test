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
        $rootScope.openDefault = function () {
            ngDialog.open({
                template: 'dialogID',
                className: 'ngdialog-theme-default'
            });
        };
    }



})();

