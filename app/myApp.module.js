let myApp = angular.module('myApp', ['ngMaterial', 
                                    'app.weather', 
                                    'app.towns', 
                                    'app.london',
                                    'app.washington',
                                    'app.tokyo',
                                    'app.brasilia'
                                ]);



// myApp.controller('myPosition', function($scope) {
        
//     navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords;

//     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
//     fetch(url)
//         .then(response => response.json())
//         .then(result => {$scope.data = result})
//         .then(() => console.log($scope.data.name))
//     });
//     console.log($scope);
// });



myApp.controller('fiveDays', function($scope) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=a1c23503e3844c136140a0cb126e42d2`;
    fetch(url)
        .then(response => response.json())
        .then(result => {$scope.data = result})
        .then(() => console.log($scope.data))
    });
    console.log($scope)
});
