angular.module('app.weather', []);

angular.module('app.weather').directive('weatherCard', function() {
    return {
        scope: true,
        templateUrl: "templates/templateWeatherCard.html",
        link: function ($scope) {
                let url = `http://api.openweathermap.org/data/2.5/onecall?lat=56.2&lon=44&appid=a1c23503e3844c136140a0cb126e42d2`;
                    fetch(url)
                        .then(response => response.json())
                        .then(result => {$scope.data = result})
        }
    }
});