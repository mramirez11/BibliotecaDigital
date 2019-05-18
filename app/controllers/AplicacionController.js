'use strict';

(function () {
  var app = angular.module('app-controller', []);

  // una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
  // mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
  // bind entre las variables del archivo javascript hacia el DOM
  app.controller('applicationController', ['$scope', '$http', function ($scope, $http) {
    $scope.ejemplo = 'Esto es un ejemplo de Angular JS';
    $scope.books;
    //Desarrollamos funciones que nos permitirán lograr una interacción con un tab de bootstrap
    //con un ng-include de angular
    $scope.menu = 'app/views/figura2.html';
    $scope.cambioVista = function (menu) {//funcion que cambia vistas

      $scope.menu = 'app/views/' + menu + '.html';//cambio la vista cambiando la ruta de la asociacion
      // alert($scope.isMenu(menu) + " " + menu);
    };
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

    $scope.loadBook = function (libro) {
      var calcularCantImg = libro.cantPaginas; // = libro.cantPaginas
      $scope.cantPaginas = parseInt(calcularCantImg)

      var paginas = [];
      for (let i = 1; i < parseInt(calcularCantImg) + 1; i++) {
        paginas.push(libro.rutaPagina.replace('Portada', i))
      }
      $scope.paginas = paginas;
      $scope.cambioVista("figura4");
    };

    //// Aqui implementamos la seleccion de libros de la ventana 2 
    var librosSeleccionados = [];
    console.log(librosSeleccionados)
    $scope.seleccionarLibro = function (libro) {
      

      if (librosSeleccionados.includes(libro)) {
        var posicion = librosSeleccionados.indexOf(libro)
        librosSeleccionados.splice(posicion,1);
        console.log(librosSeleccionados);
      } else {
        if (librosSeleccionados.length == 5 ) {
          alert("Seleccionaste mas de 5 libros")
        } else {
        librosSeleccionados.push(libro);
        console.log(librosSeleccionados);
        }
      }
    };
    $scope.estaSeleccionado = function (libro) {
      if (librosSeleccionados.includes(libro)) {
        return true;
      } else {
        return false;
      }
    };
    $scope.limpiarLibrosSeleccionados = function () {
      librosSeleccionados = [];
    };
    $scope.evaluarlibros = function () {
      if (librosSeleccionados.length == 5) {
        console.log(librosSeleccionados.length)
        return true;
      } else {
        return false;
      }
    };
    /// Aqui se haran algoritmos para hacer la recomendacion
   $scope.recomendarLibros = function () {
     var libros = librosSeleccionados;
     for (let i = 0; i < librosSeleccionados.length; i++) {
       
       
     }
   }


    $scope.search = function (menu) {//funcion que cambia vistas
      //console.log($scope.valueSearch)
      var booksFind = [];
      for (let i = 0; i < $scope.books.length; i++) {
        if ($scope.valueSearch.toLowerCase() == ($scope.books[i].titulo).toLowerCase()) {
          booksFind.push($scope.books[i])
        }
      }
      $scope.bookFind = booksFind;
      $scope.notFound = "No existen coincidencias de la búsqueda, vuelva a intentarlo"
      console.log(booksFind)
      $scope.menu = 'app/views/' + menu + '.html';//cambio la vista cambiando la ruta de la asociacion
      // alert($scope.isMenu(menu) + " " + menu);
    }

  

  }]);
})();