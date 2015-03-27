'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myApp = angular.module('myApp.services', []);

myApp.value('version', '0.1');

myApp.factory("AuthenticationService",['$location', function($location){
    return{
        login: function(creds){
            if(creds.username == 'admin' && creds.password == '1234'){
                $location.path('/dashboard');
            } else{
                $('.alert-box').show();
            }
        },
        logout: function(){
            $location.path('/');
        }
    }
}]);

myApp.factory("CustomerService",[function(){
    var customers = [
  		{name: 'Chevy Chase', address: '222 Clark St', city: 'London United Kingdom'},
  		{name: 'Steve Trinity', address: '111 Runyan Ave', city: 'Newton NJ'},
  		{name: 'Cat Stevens', address: '33 Elm St', city: 'Fresno CA'},
  		{name: 'Kim Korver', address: '1212 Fisher Ave', city: 'Salt Lake UT'},
  		{name: 'Captain Dan ', address: '7 Forest Dr', city: 'New York NY'},
  		{name: 'Wilson', address: '677 Rick St',city: 'Paris France'}
  	];
    
    var factory = {};
    
    factory.getCustomers = function(){
        return customers;
    }
    
    factory.postCustomers = function(customer){
        //code to add customer
    }
    
    return factory;
}]);
