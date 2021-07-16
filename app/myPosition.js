let myApp = angular.module('myApp', []);
myApp.controller('myPosition', function($scope) {


    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
    fetch(url)
        .then(response =>response.json())
        // .then(result => console.log(result))
        .then(result => {$scope.data = result})
        .then(() => console.log($scope.data))
    });
});








// let myApp = angular.module('myApp', []);
// myApp.controller('myPosition', function($scope) {

//     navigator.geolocation.getCurrentPosition(position => {
//         latitude = position.coords.latitude;
//         longitude = position.coords.longitude;
//         console.log(latitude, longitude);
//         return latitude;
//     });
//     console.log(latitude)
        
//     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, false);
//     xhr.send();
//     $scope.data = JSON.parse(xhr.response);
    
//     console.log($scope.data);
//     return $scope.data;
// });


