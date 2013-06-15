var app = angular.module('myapp', ['myapp.controllers', 'myapp.directives']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexController'
    }).otherwise({
        redirectTo: '/'
    });
}]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);
