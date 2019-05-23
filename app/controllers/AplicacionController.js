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
    $scope.menu = 'app/views/screen1.html';
    $scope.cambioVista = function (menu) {//funcion que cambia vistas

      $scope.menu = 'app/views/' + menu + '.html';//cambio la vista cambiando la ruta de la asociacion
      // alert($scope.isMenu(menu) + " " + menu);
    };
    $scope.isMenu = function (menu) {
      return $scope.menu === 'app/views/' + menu + '.html';
    };

    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    // Recoge los books
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
      $scope.tmpClicks = 0;
      $scope.cambioVista("screen4");
    };
     // funcion que hara que bloqueara botones
     $scope.tmpClicks;
     $scope.sumar = function () {
       $scope.tmpClicks++;
       console.log($scope.tmpClicks);
     };
     $scope.restar = function () {
       $scope.tmpClicks--;
       console.log($scope.tmpClicks);
     };
 

    //// Aqui implementamos la seleccion de libros de la ventana 2 
    var librosSeleccionados = [];
    //console.log(librosSeleccionados)
    $scope.seleccionarLibro = function (libro) {


      if (librosSeleccionados.includes(libro)) {
        var posicion = librosSeleccionados.indexOf(libro)
        librosSeleccionados.splice(posicion, 1);
        //console.log(librosSeleccionados);
      } else {
        if (librosSeleccionados.length == 5) {
          alert("Seleccionaste mas de 5 libros")
        } else {
          librosSeleccionados.push(libro);
          //console.log(librosSeleccionados);
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
        //console.log(librosSeleccionados.length)
        return true;
      } else {
        return false;
      }
    };


    // http facilita la comunicación con remotos, hace una solicitud al servidor y espera una respuesta
    // Obtenemos los valores de tabla libro_has_categoria
    $http({
      method: 'GET',
      url: '././lib/js/getLibrosCategories.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.libro_has_categoria = response.data;
      console.log($scope.libro_has_categoria)
    });


    // http facilita la comunicación con remotos, hace una solicitud al servidor y espera una respuesta
    // Obtenemos los valores de tabla categoria
    $http({
      method: 'GET',
      url: '././lib/js/getCategories.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.categoria = response.data;
      console.log($scope.categoria)
    });


    /// Aqui se haran algoritmos para hacer la recomendacion
    $scope.recomendarLibros = function () {
      console.log("Libros Seleccionados")
      console.log(librosSeleccionados)

      var librosEncontradosPorAlgoritmo = []
      for (let i = 0; i < librosSeleccionados.length; i++) {
        var idLibroSeleccionado = librosSeleccionados[i].idLibro
        var n = []
        for (let j = 0; j < $scope.libro_has_categoria.length; j++) {
          if ($scope.libro_has_categoria[j].Libro_idLibro == idLibroSeleccionado) {
            n.push($scope.libro_has_categoria[j])

            // Random
            var min = 0;
            var max = n.length;
            var random = Math.floor(Math.random() * (+max - +min)) + +min;

            var LibroAleatorio = n[random]
            // console.log("Libro Aleatorio")
            // console.log(LibroAleatorio)
            var categoriaAleatoria = LibroAleatorio.Categoria_idCategoria
            // console.log("Categoria Aleatoria")
            //  console.log(categoriaAleatoria)

            var librosConCategoriaAleatoria = []
            for (let i = 0; i < $scope.libro_has_categoria.length; i++) {
              if ($scope.libro_has_categoria[i].Categoria_idCategoria == categoriaAleatoria) {
                librosConCategoriaAleatoria.push($scope.libro_has_categoria[i])
              }
            }
            //   console.log("Libros que tienen la categoria aleatoria")
            //   console.log(librosConCategoriaAleatoria)

            max = librosConCategoriaAleatoria.length
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            var Libro_has_CategoriaConCategoriaAleatoriaElegido = []
            Libro_has_CategoriaConCategoriaAleatoriaElegido.push(librosConCategoriaAleatoria[random])

            //    console.log("Libro_has_CategoriaConCategoriaAleatoriaElegido")
            //    console.log(Libro_has_CategoriaConCategoriaAleatoriaElegido)

            var idLibro_has_CategoriaConCategoriaAleatoriaElegido = Libro_has_CategoriaConCategoriaAleatoriaElegido[0].Libro_idLibro
            //    console.log("idLibro_has_CategoriaConCategoriaAleatoriaElegido")
            //    console.log(idLibro_has_CategoriaConCategoriaAleatoriaElegido)
            var libroEncontradoPorAlgoritmo = ""
            for (let i = 0; i < $scope.books.length; i++) {
              // console.log($scope.books[i].idLibro+" - "+ idLibroConCategoriaAleatoriaElegido)
              if ($scope.books[i].idLibro == idLibro_has_CategoriaConCategoriaAleatoriaElegido) {
                libroEncontradoPorAlgoritmo = $scope.books[i]
                break;
              }
            }
            //      console.log("libroEncontradoPorAlgoritmo")
            //      console.log(libroEncontradoPorAlgoritmo)
          }
        }
        if (librosEncontradosPorAlgoritmo.includes(libroEncontradoPorAlgoritmo)) {
          break;
        } else {
          librosEncontradosPorAlgoritmo.push(libroEncontradoPorAlgoritmo)
        }
        //   console.log("--------------------------")
      }

      console.log("LibrosEncontradosPorAlgoritmo")
      console.log(librosEncontradosPorAlgoritmo)
      $scope.resultado = librosEncontradosPorAlgoritmo
      $scope.cambioVista("screen3");
      $scope.limpiarLibrosSeleccionados()
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