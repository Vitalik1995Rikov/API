angular.module('app.weather', []);

angular.module('app.weather').directive('weatherCard', function() {
    return {
        templateUrl: "templates/templateWeatherCard.html"
    }
});