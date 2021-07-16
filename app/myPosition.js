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
        template:  "<div class='card flex' style='width: 11rem; height: 16rem'>" +
                        "<span>Day before yestarday</span>" +
                        "<div class='flex'>" +
                            "<img src='https://img.icons8.com/ios/50/000000/windy-weather--v1.png' style='width: 5rem;' class='card-img-top' alt='...'>" +
                        "</div>" +
                        "<div class='card-body'>" +
                            "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
                        "</div>" +
                    "</div>"
    }
});


myApp.directive('townCard', function() {
    return {
        template: "<a href='' data-bs-toggle='tooltip' title='USA'>Washington</a>"
    }
});


