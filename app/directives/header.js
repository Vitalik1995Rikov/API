angular.module('appHeader', []);

angular.module('appHeader').directive('appHeader', function() {
    return {
        templateUrl: "templates/templateAppHeader.html"
    }
});



angular.module('appHeader').controller('appHeaderCtrl', function($scope) {
    
    $scope.valueInput = '';
    
    $scope.oneTown = function() {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${$scope.valueInput}&appid=a1c23503e3844c136140a0cb126e42d2`;
                fetch(url)
                    .then(response => response.json())
                    .then(result => {$scope = result})
                    .then(() => console.log($scope))
    $scope.valueInput = '';
    }
});
