'use strict';

(function () {
  var controlador = angular.module('app-controller',[]);

  // una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
  // mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
  // bind entre las variables del archivo javascript hacia el DOM
  controlador.controller('applicationController', ['$scope', function($scope){
    $scope.ejemplo='Esto es un ejemplo de Angular JSS';
    

    //Desarrollamos funciones que nos permitirán lograr una interacción con un tab de bootstrap
    //con un ng-include de angular
    //$scope.menu='app/views/figura2.html';
    $scope.menu='app/views/figura2.html';
    $scope.cambioVista= function (menu) {//funcion que cambia vistas

      $scope.menu = 'app/views/'+menu+'.html';//cambio la vista cambiando la ruta de la asociacion
      alert($scope.isMenu(menu) +" "+ menu);
		}
    $scope.isMenu= function (menu) {
      return $scope.menu==='app/views/'+menu+'.html';
    };
    
    
  }]);
})();