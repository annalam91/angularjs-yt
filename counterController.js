(function () {
    'use strict';

    angular.module('myApp', [])
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];
    function CounterController($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Anna";

        $scope.showNumberOfWatchers = function () {
            console.log("# number of watchers: " + $scope.$$watchersCount);
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.countUp = function() {
            $scope.counter++;
        };

        $scope.$watch(function () {
            console.log("digest Loop Fired!");
        })
    }
})();