(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .config(translateConfig)
    function translateConfig($translateProvider) {

        $translateProvider.translations('english', {
            TITLE: '1500 of the industry\'s most successful marketers gather together to create the largest superaffiliate conference in the world.'

        });
        $translateProvider.translations('chinese', {
            TITLE: '该行业1500\'最成功的营销聚集在一起创造了世界上最大的superaffiliate会议。'

        });
        $translateProvider.preferredLanguage('english');

    }

})();

