(function () {
    "use strict";

    angular.module('app').config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "main/home.tpl.html",
                    controller: "HelloWorldController",
                    title: 'Home'
                })
                .state('404', {
                    url: "/404",
                    templateUrl: "httpcode/404.tpl.html",
                    title: 'Page Not Found'
                })
                .state('about', {
                    url: "/about",
                    templateUrl: "main/about.tpl.html",
                    controller: "AboutController",
                    title: 'About'
                });

            // the known route
            $urlRouterProvider.when('', '/');

            // For any unmatched url, send to 404
            $urlRouterProvider.otherwise('/404');
        }
    ]);
})();