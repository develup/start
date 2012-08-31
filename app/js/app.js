'use strict';


// Declare app level module which depends on filters, and services
angular.module('startApp', ['startApp.filters', 'startApp.services', 'startApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: IndexCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
