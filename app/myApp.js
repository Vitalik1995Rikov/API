let myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope) {
    $scope.object = {
            base: "stations",
            clouds = {
                all: 40
            },
            cod: 200,
            coord = {
                latitude: 56.31,
                longitude: 44.04
            },
            id: 470012,
            main = {
                feels_like: 302.09,
                humidity: 48,
                pressure: 1008,
                temp: 301.75,
                temp_max: 301.86,
                temp_min: 301.75
            },
            sys = {
                country: "RU",
                id: 48933,
                sunrise: 1626395882,
                sunset: 1626457277,
                type: 2

            },
            name: "Nizhny Novgorod",
            country: "Russian Federation",
            language: "en",
            unit: "m"
        }
    }
);

