(function() {
    'use strict';
    angular.module('myApp', [])
    .controller('DIController', DIController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

    DIController.$inject=['$scope', 'lovesFilter']
    function DIController ($scope, lovesFilter ) {
        $scope.name="Anna";

        $scope.message = function () {
            var msg = "It's so bloody hot";
            return msg;
        }

        $scope.lovesMessage = function () {
            var msg = "I love the sun";
            msg = lovesFilter(msg);
            return msg;
        }
    }

    function LovesFilter() {
        return function(input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function TruthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})();