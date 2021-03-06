angular.module('currentPlace', []);

angular.module('currentPlace').directive('currentPlace', function() {
    return {
        scope: true,
        templateUrl: "templates/placeTemplate/templateCurrentPlace.html",
        
        link: function ($scope) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                
                let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a1c23503e3844c136140a0cb126e42d2`;
                    fetch(url)
                        .then(response => response.json())
                        .then(result => {$scope.data = result})
                        .then(() => console.log($scope.data.name))
            });
        }
    }
});


