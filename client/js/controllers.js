var c = angular.module('CoverSharks.controllers', []);


c.controller('HomeController', ['$scope','$location', function($scope, $location){
    console.log("controlling the home page");
    
    $scope.moreInfo = function() {
        $location.path('/about/');
    }

    $scope.play = function() {
        $location.path('/howtoplay/');
    }

    $scope.subscribe = function() {
        alert('Thanks for subscribing to our email list!');
    }
}]);