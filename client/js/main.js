var app = angular.module('CoverSharks', ['ngRoute', 'CoverSharks.controllers']);

app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/about',{
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })
            .when('/promotions',{
                templateUrl: 'views/promotions.html',
                controller: 'promotionsController'
            })
            .when('/howtoplay',{
                templateUrl: 'views/howtoplay.html',
                controller: 'howtoplayController'
            })
            .otherwise({
                redirectTo: '/home'
            })
    }]);