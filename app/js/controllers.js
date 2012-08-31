'use strict';

/* Controllers */

// App controller
function AppCtrl($scope, $http) {
  $http.get('data/tools.json').success(function(data) {
    $scope.tools = data;
    $scope.currentTool = $scope.tools[0];
  });

  $scope.setTool = function(tool) {
    $scope.currentTool = tool;
  }
}
AppCtrl.$inject = ['$scope', '$http'];

// Index controller
function IndexCtrl($scope) {}
IndexCtrl.$inject = ['$scope'];

// Projects controller
function ProjectsCtrl($scope, $http) {
  $http.get('data/projects.json').success(function(data) {
    $scope.projects = data;
  });
}
ProjectsCtrl.$inject = ['$scope', '$http'];
