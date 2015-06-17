(function () {
    'use strict';

    angular.module('angularTest')
        .directive('listItem', listItem)
        .controller('listItemCtrl', listItemCtrl);

    function listItem() {

        var directive = {

            restrict: "E",
            link: link,
            replace: true,
            controller: "listItemCtrl",
            templateUrl: "app/templates/listItem.html",
            scope: {
                list:"="
            }
        };

        function link(scope, element, attr) {

        }

        return directive;
    }

    function listItemCtrl($scope) {
        $scope.videoUrls = [];
        $scope.previewVideo = false;
        $scope.playVideo = function(url){
            $scope.videoUrls = [];
            $scope.videoUrls.push(url);
            $scope.previewVideo = true;
        }
        $scope.backToList = function(){
            $scope.previewVideo = false;
        }
    }

})();
