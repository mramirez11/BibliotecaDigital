'use strict';

(function () {
  var direc = angular.module('directives-example',[]);
  direc.directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/views/navbar.html'
    }
  });
})();
