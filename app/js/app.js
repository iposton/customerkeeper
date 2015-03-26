'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
        templateUrl: 'partials/login.html', 
        controller: 'LoginController'
});
  $routeProvider.when('/dashboard', {
        templateUrl: 'partials/dashboard.html', 
        controller: 'DashController'
});
  $routeProvider.otherwise({
        redirectTo: '/'
});
}]);