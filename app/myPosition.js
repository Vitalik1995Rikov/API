let myApp = angular.module('myApp', []);

myApp.controller('myPosition', function($scope) {
    $scope.towns = [
        "Wash",
        "Lon",
        "Ber"
    ]
    
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
    fetch(url)
        .then(response =>response.json())
        .then(result => {$scope.data = result})
        .then(() => console.log($scope.data))
    });
});


myApp.directive('weatherCard', function() {
    return {
        templateUrl:  "templates/templateCard.html",
    }
});


myApp.directive('townCard', function() {
    return {
        template: "<a href='' data-bs-toggle='tooltip' title='USA'>Washington</a>"
    }
});


