angular.module('appHeader', []);

angular.module('appHeader').directive('appHeader', function() {
    return {
        scope: true,
        templateUrl: "templates/templateAppHeader.html",
        link: function (scope, valueInput) {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&appid=a1c23503e3844c136140a0cb126e42d2`;
                fetch(url)
                    .then(response => response.json())
                    .then(result => {scope.data = result})
                    .then(() => console.log(result))
        }

    }
});