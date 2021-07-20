angular.module('app.towns', []);

angular.module('app.towns').directive('townCard', function() {
    return {
        templateUrl: "templates/templateTownCard.html",
    }
});