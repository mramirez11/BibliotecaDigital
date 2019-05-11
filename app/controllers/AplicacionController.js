'use strict';

(function () {
  var app = angular.module('app-controller', []);

  // una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
  // mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
  // bind entre las variables del archivo javascript hacia el DOM
  app.controller('applicationController', ['$scope', '$http', function ($scope, $http) {
    $scope.ejemplo = 'Esto es un ejemplo de Angular JS';


    //Desarrollamos funciones que nos permitirán lograr una interacción con un tab de bootstrap
    //con un ng-include de angular
    //$scope.menu='app/views/figura2.html';
    $scope.menu = 'app/views/figura3.html';
    $scope.cambioVista = function (menu) {//funcion que cambia vistas

      $scope.menu = 'app/views/' + menu + '.html';//cambio la vista cambiando la ruta de la asociacion
     // alert($scope.isMenu(menu) + " " + menu);
    }
    $scope.isMenu = function (menu) {
      return $scope.menu === 'app/views/' + menu + '.html';
    };

    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    $http({
      method: 'GET',
      url: '././lib/js/getBooks.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.books = response.data;
      console.log($scope.books)
    });
    $scope.loadBook = function (value) {
      $scope.cambioVista("figura4");
      $scope.ruta=value

    };


  }]);

  // Controlador antiguo que se encargaba de cargar los books
  /*app.controller('booksController', ['$scope', '$http',booksController])
  function booksController($scope, $http){
    // De prueba, BORRAR AL FINAL
    $scope.hola="assd"

    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    $http({
        method: 'GET',
        url: '././lib/js/getBooks.php'
      }).then(function successCallback(response) {
          // Aqui va todo lo que hacemos cuando logramos la conexion
          $scope.books = response.data;
          console.log($scope.books)
        });
}*/
})();