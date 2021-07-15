let myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope) {
    $scope.object = {
            type: "City",
            query: "Nizhny Novgorod",
            country: "Russian Federation",
            language: "en",
            unit: "m"
        }
    }
);

