angular.module('appHeader', []);

angular.module('appHeader').directive('appHeader', function() {
    return {
        templateUrl: "templates/templateAppHeader.html"
    }
});



angular.module('appHeader').controller('appHeaderCtrl', function($scope) {
    
    $scope.valueInput = 'London';
    url = `http://api.openweathermap.org/data/2.5/weather?q=${$scope.valueInput}&appid=a1c23503e3844c136140a0cb126e42d2`;
    

    $scope.oneTown = function($scope) {
                fetch(url)
                    .then(response => response.json())
                    .then(result => {$scope = result})
                    .then(() => console.log($scope))
    }
});
