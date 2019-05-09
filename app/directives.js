'use strict';

(function () {
  var direc = angular.module('directives-example',[]);

  direc.directive('miPanel1',function(){
    return {
      restric : 'A',
      templateUrl : 'app/views/panel1.html'
      
    }
  });
  
  direc.directive('miPanel2',function(){
    return {
      restric : 'E',
      templateUrl : 'app/views/panel2.html'
      
    }
  }); 
  direc.directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/views/navbar.html'
    }
  });
})();
