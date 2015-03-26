'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

myApp.controller('LoginController',['$scope','$location', function($scope, $location) {
      $scope.creds = {username: "", password: ""};
      
      $scope.login = function(){
        if($scope.creds.username == 'admin' && $scope.creds.password == '1234'){
            $location.path('/dashboard');
        } else{
            $('.alert-box').show();
        }
      },
        $scope.logout = function(){
            $location.path('/');
        }
}]);


myApp.controller('DashController',['$scope', function($scope) {
      $scope.title ="Dashboard";
}]);

myApp.controller('CustomerController',['$scope', function($scope) {
    $scope.customers = [
  		{name: 'John Samson', address: '155 Main St', city: 'Boston MA'},
  		{name: 'Steve Smith', address: '233 Mass Ave', city: 'Cambridge MA'},
  		{name: 'Carol Stevens', address: '12 Congress St', city: 'Amesbury MA'},
  		{name: 'Kyle Savon', address: '111 School St', city: 'Amesbury MA'},
  		{name: 'Benjamin Button', address: '122 Union St', city: 'Lynn MA'},
  		{name: 'Derek Salmon', address: '15 Marston st',city: 'Lawrence MA'}
  	];
}]);