'use strict';

/* Controllers */

// App controller
function AppCtrl($scope, $http) {
  $http.get('data/pages.json').success(function(data) {
    $scope.pages = data;
    $scope.currentPage = $scope.pages[0];
  });

  $scope.setPage = function(page) {
    $scope.currentPage = page;
  }
}
AppCtrl.$inject = ['$scope', '$http'];

// Index controller
function IndexCtrl($scope) {}
IndexCtrl.$inject = ['$scope'];

// Links controller
function LinksCtrl($scope, $http) {
  $http.get('data/links.json').success(function(data) {
    $scope.links = data;
  });
}
LinksCtrl.$inject = ['$scope', '$http'];
