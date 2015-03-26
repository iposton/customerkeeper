'use strict';
/* http://docs.angularjs.org/#!angular.service */

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.widgets']).
  run(['$route', '$window', '$rootScope', function($route, $window, $rootScope) {

    $route.when('/', {template: 'partials/login.html', controller: MyCtrl1});
    $route.when('/dashboard', {template: 'partials/dashboard.html', controller: MyCtrl2});
    $route.otherwise({redirectTo: '/'});

    var self = this;

    $rootScope.$on('$afterRouteChange', function(){
      $window.scrollTo(0,0);
    });
  }]);
