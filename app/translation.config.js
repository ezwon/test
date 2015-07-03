(function () {
    'use strict';
    angular
        .module('AffiliateWorldAsia')
        .config(translateConfig)
    function translateConfig($translateProvider) {

        $translateProvider.translations('english', {
            TITLE: '1500 of the industry\'s most successful marketers gather together to create the largest superaffiliate conference in the world.',
            TITLE_SPEAKERS:'speakers',
            TITLE_SCHEDULES:'schedule',
        });
        $translateProvider.translations('chinese', {
            TITLE: '该行业1500\'最成功的营销聚集在一起创造了世界上最大的superaffiliate会议。',
            TITLE_SPEAKERS:'音箱',
            TITLE_SCHEDULES:'时间表',
        });
        $translateProvider.translations('thailand', {
            TITLE: '该行业1500\'最成功的营销聚集在一起创造了世界上最大的superaffiliate会议。',
            TITLE_SPEAKERS:'ผู้พูด',
            TITLE_SCHEDULES:'ตารางเวลา',
        });
        $translateProvider.translations('indonesia', {
            TITLE: '该行业1500\'最成功的营销聚集在一起创造了世界上最大的superaffiliate会议。',
            TITLE_SPEAKERS:'pembicara',
            TITLE_SCHEDULES:'susunan acara',
        });
        $translateProvider.preferredLanguage('english');

    }

})();

