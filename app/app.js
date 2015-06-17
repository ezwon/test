(function () {
    'use strict';

    angular.module('angularTest', ['media'])
        .controller( 'AppCtrl', function AppCtrl ( $scope, $http ) {

            //No 'Access-Control-Allow-Origin' header is present on the requested resource
            //$http({url:'http://dev.affiliatemasterychallenge.com/videos?week_id=1&day_id=1&page=2'})
            //    .then(function(response){
            //        console.log(response);
            //    });

            //Will just manually declare the response data
            $scope.ResponseData ={
                "status": "success",
                "status_code": 200,
                "data": {
                    "total": 12,
                    "pages": 2,
                    "limit": 10,
                    "page": "1",
                    "data": [
                        {
                            "id": 1,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Soluta.",
                            "description": "Provident dolorum et aut vel labore beatae. Et aut ut unde inventore id iusto et. Tenetur perferendis id provident occaecati dolor hic sed. Dolorem recusandae enim dolores et voluptatem doloribus adipisci.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 2,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Sint.",
                            "description": "Animi voluptatem minus consequatur quo ipsa nemo. Autem ut quo ut temporibus. Quisquam odio natus error maiores natus.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 3,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Tempore.",
                            "description": "Distinctio quam pariatur voluptatem vero possimus. In incidunt quo laborum doloremque nulla nesciunt minus. Culpa enim vel inventore repellat cumque qui. Omnis asperiores est labore.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 4,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Necessitatibus.",
                            "description": "Iure quod optio et quos eaque expedita quia. Eius tenetur et culpa hic alias. Sapiente et consectetur neque nihil dolor iste. Est vero dolor maxime cupiditate delectus.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 5,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Labore.",
                            "description": "Non aut et est et accusamus. Et voluptates dolore qui ut neque rerum. A tempore magnam et dolores in ipsam dolor.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 6,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Sint laboriosam.",
                            "description": "Quibusdam velit exercitationem consequuntur consequuntur quaerat itaque. Praesentium non nulla soluta fugiat illum nulla.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 7,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Accusamus.",
                            "description": "Ut quaerat accusamus ipsum cumque sint adipisci. Consequatur dignissimos provident autem et quis.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 8,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Illum minima.",
                            "description": "Sit enim asperiores aut culpa aut. Quis maxime consequatur nobis quas deserunt ab.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 9,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Facere.",
                            "description": "Quia delectus numquam porro omnis. Provident et et quisquam consequuntur et aut. Inventore doloribus magnam dolores harum quas vel voluptas. Aut hic repudiandae labore et delectus eligendi iure quisquam.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        },
                        {
                            "id": 10,
                            "day_id": 1,
                            "week_id": 1,
                            "title": "Quas nisi.",
                            "description": "Iste illo omnis voluptatum animi nisi. Quibusdam eaque nihil et. Esse sint sed est laboriosam optio quo. Reprehenderit inventore sunt accusantium quibusdam ad molestiae eius et.",
                            "created_at": "2015-04-05 17:54:12",
                            "updated_at": "2015-04-05 17:54:12",
                            "deleted_at": null,
                            "status": 1,
                            "file": "default.mp4",
                            "thumbnail": "default.png",
                            "url": "http://dev.affiliatemasterychallenge.com/videos/watch/default.mp4",
                            "thumbnail_url": "http://dev.affiliatemasterychallenge.com/thumbnails/default.png",
                            "week": {
                                "id": 1,
                                "name": "1",
                                "description": "No Description",
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00",
                                "deleted_at": "2015-04-05 17:54:12"
                            },
                            "day": {
                                "id": 1,
                                "week_id": 1,
                                "module_title": "Some Title",
                                "name": "1",
                                "description": "Amet accusantium omnis et. Deserunt rerum aperiam eos provident ut. Aut quas occaecati nobis ut nesciunt facilis. Provident fuga magnam repellendus aliquam id vel.",
                                "deleted_at": null,
                                "created_at": "-0001-11-30 00:00:00",
                                "updated_at": "-0001-11-30 00:00:00"
                            }
                        }
                    ]
                }
            }
        });

})();


