var directives = angular.module('myapp.directives', []);
directives.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<p>Hello from directive</p>'
    };
});
