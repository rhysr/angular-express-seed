var controllers = angular.module('myapp.controllers', []);

controllers.controller('IndexController', ['$scope', function($scope) {
    $scope.message = 'Hello From Angular';
    $scope.name = 'bob';
}]);
