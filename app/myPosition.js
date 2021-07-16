let myApp = angular.module('myApp', []);
myApp.controller('myPosition', function($scope) {
    
    navigator.geolocation.getCurrentPosition(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude, longitude);
    
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    $scope.data = JSON.parse(xhr.response);
    
    console.log($scope.data);
    return $scope.data;
    });
});

