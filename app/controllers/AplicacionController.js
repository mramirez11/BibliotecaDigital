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
      // array que almacena los libros_categorias que fueron seleccionadas
      var libroCategoriaBusqueda = [];
      // Primer ciclo que recorre el array de libros seleccionados en la pantalla anterior
      for (let i = 0; i < librosSeleccionados.length; i++) {
        // Segundo ciclo que recorre el array de la bd que contiene la tabla muchos a muchos
        for (let j = 0; j < $scope.libro_has_categoria.length; j++) {
          // Condicion que verifica que el idLibro seleccionado, existe en la tabla muchos a muchos
          if (librosSeleccionados[i].idLibro == $scope.libro_has_categoria[j].Libro_idLibro) {
            // Si la condición se cumple, pusheamos el libro_categoria
            libroCategoriaBusqueda.push($scope.libro_has_categoria[j])
          }
        }
      }
      console.log("LibroCategoriaBusqueda")
      console.log(libroCategoriaBusqueda)
      var c1 = [];
      var c2 = [];
      var c3 = [];
      var c4 = [];
      var c5 = [];
      var c6 = [];
      for (let i = 0; i < libroCategoriaBusqueda.length; i++) {
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 1) {
          c1.push(libroCategoriaBusqueda[i])
        }
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 2) {
          c2.push(libroCategoriaBusqueda[i])
        }
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 3) {
          c3.push(libroCategoriaBusqueda[i])
        }
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 4) {
          c4.push(libroCategoriaBusqueda[i])
        }
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 5) {
          c5.push(libroCategoriaBusqueda[i])
        }
        if (libroCategoriaBusqueda[i].Categoria_idCategoria == 6) {
          c6.push(libroCategoriaBusqueda[i])
        }
      }
      console.log(c1)

      //console.log("Clasico: "+ c1  +" Niños: "+c2 +" Princesa: "+c3+" Animales: "+c4 + " Peliculas: "+ c5 + "Valores morales: "+c6)

      var resultado = []
      if (c1.length > 0) {
        var min = 1
        var max = c1.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log("C1 Max: " + max + " Min: " + min + "Resultado: " + azar)
        

        

      }

      if (c2.length > 0) {
        var min = 1
        var max = c2.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        for (let i = 0; i < $scope.categoria.length; i++) {
          if ($scope.categoria[i].idCategoria == azar) {
            console.log($scope.categoria[i].titulo + " Entre " + azar)
            
            console.log(resultado)
          }
        }

        console.log("C2 Max: " + max + " Min: " + min + "Resultado: " + azar)
      }
      console.log(resultado)
      if (c3.length > 0) {
        var min = 1
        var max = c3.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        for (let i = 0; i < $scope.categoria.length; i++) {
          if ($scope.categoria[i].idCategoria == azar) {
            console.log($scope.categoria[i].titulo + " Entre " + azar)
            
            console.log(resultado)
          }
        }

        console.log("C3 Max: " + max + " Min: " + min + "Resultado: " + azar)
      }
      console.log(resultado)
      if (c4.length > 0) {
        var min = 1
        var max = c4.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        for (let i = 0; i < $scope.categoria.length; i++) {
          if ($scope.categoria[i].idCategoria == azar) {
            console.log($scope.categoria[i].titulo + " Entre " + azar)
            
            console.log(resultado)
          }
        }

        console.log("C4 Max: " + max + " Min: " + min + "Resultado: " + azar)
      }
      console.log(resultado)
      if (c5.length > 0) {
        var min = 1
        var max = c5.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        for (let i = 0; i < $scope.categoria.length; i++) {
          if ($scope.categoria[i].idCategoria == azar) {
            console.log($scope.categoria[i].titulo + " Entre " + azar)
            
            console.log(resultado)
          }
        }

        console.log("C5 Max: " + max + " Min: " + min + "Resultado: " + azar)
      }
      console.log(resultado)
      if (c6.length > 0) {
        var min = 1
        var max = c6.length
        var azar = Math.floor(Math.random() * (+max - +min)) + +min;
        for (let i = 0; i < $scope.categoria.length; i++) {
          if ($scope.categoria[i].idCategoria == azar) {
            console.log($scope.categoria[i].titulo + " Entre " + azar)
            
            console.log(resultado)
          }
        }

        console.log("C6 Max: " + max + " Min: " + min + "Resultado: " + azar)
      }
      console.log(resultado)

      //$scope.resultado=resultado

      /* console.log(c1);
       console.log(c2);
       console.log(c3);
       console.log(c4);
       console.log(c5);
       console.log(c6); */

      $scope.cambioVista("figura3");
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