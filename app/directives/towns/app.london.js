angular.module('app.london', []);

angular.module('app.london').directive('londonCard', function() {
    return {
        scope: true,
        templateUrl: "templates/townsTemplates/templateLondon.html",
        link: function (scope) {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a1c23503e3844c136140a0cb126e42d2`;
                fetch(url)
                    .then(response => response.json())
                    .then(result => {scope.data = result})
        }
    }
});