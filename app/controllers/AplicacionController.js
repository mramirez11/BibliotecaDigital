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
    // De preferencia hubiara hecho esto ne otro controlador pero no logre hacerlo
    var libros;
    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    $http({
      method: 'GET',
      url: '././lib/js/getBooks.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      libros = response.data;
      //
      var calcularCantImg = 11;
      console.log(libros[0].rutaPagina)
      // 'Hola EDteam'.replace('Hola','Bienvenidos a') // 'Bienvenidos a EDteam'
      //ruta = libros[0].rutaPagina.replace('Portada')
      var paginas = [];
      for (let i = 1; i < calcularCantImg+1; i++) {
        paginas.push(libros[0].rutaPagina.replace('Portada',i))
        
      }
      $scope.books = libros;
      console.log(JSON.stringify(paginas))
      console.log(libros)
    });
    // ahora que tenemos en una variable el arreglo con las rutas vamos a limpiar un poco
    //var calcularCantImg = "<?php $total_imagenes = count(glob('/lib/img/libros/Caperucita Roja/}',GLOB_BRACE)); ?>";
    //alert(calcularCantImg); SOL: Agregar un campo llamado cant imagenes a la BD.
    
    
    //Limpiamos el arreglo para que itere las paginas
    function iteradorPaginas(ruta){
      
    }

    $scope.loadBook = function (value) {
      $scope.cambioVista("figura4");
      $scope.ruta=value

    };



  }]);

 
})();