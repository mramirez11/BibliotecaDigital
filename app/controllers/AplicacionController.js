'use strict';

(function () {
  var app = angular.module('app-controller', []);

  // una vez importado los módulos de angular en nuestra variable creamos el código que contendrá el controlador
  // mencionado en index.html y este debe recibir por parametro al $scope para poder utilizarlo y lograr hacer el
  // bind entre las variables del archivo javascript hacia el DOM
  app.controller('applicationController', ['$scope', '$http', function ($scope, $http) {
    // Variables a utilizar en el sistema
    $scope.books;
    $scope.tmpClicks;
    // 0=Desactivado 1=Activado, corresponde al estado del switch de audio
    $scope.value = 0;
    // Configuramos pantalla inicial
    $scope.menu = 'app/views/screen1.html';
    
    

    // Funcion que actualiza el estado del switch
    $scope.valueCheckBox = function () {
      // Activamos
      if ($scope.value == 0) {
        $scope.value = 1
        $scope.playAudioVista("screen1")
      } else {
        // Desactivamos
        $scope.value = 0;
      }
    };

    // Declaramos la variable audio global para acceder a ella desde todo el sistema
    var audio
    // Funcion que se encarga de reproducir el audio
    $scope.playAudio = function (id) {
      // Si esta activado el audio, se reproduce
      if ($scope.value == 1) {
        console.log("Audio Activado")
        audio = new Audio($scope.audios[id]);
        audio.play();
        // Caso contrario no se reproduce
      } else {
        console.log("Audio desactivado")
      }

    }
    // Boton logo en navbar que vuelve a pantalla inicial
    $scope.volverPantallaInicial = function () {
      // Si el audio esta habilitado detenemos la reproducción y seteamos el value a desactivado
      if ($scope.value == 1) {
        audio.pause()
        $scope.value = 0
      }
      // Dirigimos a la pantalla inicial
      $scope.menu = 'app/views/screen1.html';
    };

    // Funcion que cambia vistas
    $scope.cambioVista = function (menu) {
      // Cambiamos la vista con la ruta de la asociacion
      $scope.menu = 'app/views/' + menu + '.html';
      $scope.playAudioVista(menu)
    };

    $scope.isMenu = function (menu) {
      return $scope.menu === 'app/views/' + menu + '.html';
    };

    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    // Obtenemos los valores de tabla libro
    $http({
      method: 'GET',
      url: '././lib/js/getBooks.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.books = response.data;
      console.log($scope.books)
    });

    // Obtenemos los valores de tabla libro_has_categoria
    $http({
      method: 'GET',
      url: '././lib/js/getLibrosCategories.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.libro_has_categoria = response.data;
      console.log($scope.libro_has_categoria)
    });

    // Obtenemos los valores de tabla categoria
    $http({
      method: 'GET',
      url: '././lib/js/getCategories.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.categoria = response.data;
      console.log($scope.categoria)
    });

    // Obtenemos los valores de tabla audio_guia
    $http({
      method: 'GET',
      url: '././lib/js/getAudioGuia.php'
    }).then(function successCallback(response) {
      // Aqui va todo lo que hacemos cuando logramos la conexion
      $scope.audioGuia = response.data;
      console.log($scope.audioGuia)
      
    });

    // Declaramos la variable audio global para acceder a ella desde todo el sistema
    var audio
    $scope.loadBook = function (libro) {
      // Almacenamos la cantidad de paginas del libro
      var calcularCantImg = libro.cantPaginas;
      $scope.cantPaginas = parseInt(calcularCantImg)

      // Ciclo que llena el array paginas con las paginas del libro
      var paginas = [];
      for (let i = 1; i < parseInt(calcularCantImg) + 1; i++) {
        paginas.push(libro.rutaPagina.replace('Portada', i))
      }
      // Asignamos el array al scope para acceder a ella desde la vista
      $scope.paginas = paginas;
      // Inicializamos variable para controlar el id de las paginas
      $scope.tmpClicks = 0;

      // --------------------Codigo para audio----------------------------
      // Iniciamos array que almacenara rutas de audios
      var audios = [];
      // Ciclo que llena el array con las rutas de los audios
      for (let i = 1; i < parseInt(calcularCantImg) + 1; i++) {
        audios.push(libro.rutaAudio.replace('Portada.png', i + ".mp3"))
      }
      // Asignamos el aray al scope para acceder a ella desde la vista
      $scope.audios = audios;
      // Reproducimos por defecto la primera pagina
      $scope.playAudio(0)
      // Redireccionamos a pantalla de paginas
      $scope.cambioVista("screen4");
    };

    // Funcion que bloqueara botones del carrusel de pantalla paginas
    $scope.restar = function () {
      $scope.tmpClicks--;
      audio.pause()
      $scope.playAudio($scope.tmpClicks)
      console.log($scope.tmpClicks);
    };
    $scope.sumar = function () {
      $scope.tmpClicks++;
      audio.pause()
      $scope.playAudio($scope.tmpClicks)
      console.log($scope.tmpClicks)
    }

    // Implementacion seleccion de libros de la ventana 2 
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
        return true;
      } else {
        return false;
      }
    };

    /// Algoritmo para la recomendacion
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
            var categoriaAleatoria = LibroAleatorio.Categoria_idCategoria
            var librosConCategoriaAleatoria = []
            for (let i = 0; i < $scope.libro_has_categoria.length; i++) {
              if ($scope.libro_has_categoria[i].Categoria_idCategoria == categoriaAleatoria) {
                librosConCategoriaAleatoria.push($scope.libro_has_categoria[i])
              }
            }
            max = librosConCategoriaAleatoria.length
            random = Math.floor(Math.random() * (+max - +min)) + +min;
            var Libro_has_CategoriaConCategoriaAleatoriaElegido = []
            Libro_has_CategoriaConCategoriaAleatoriaElegido.push(librosConCategoriaAleatoria[random])

            var idLibro_has_CategoriaConCategoriaAleatoriaElegido = Libro_has_CategoriaConCategoriaAleatoriaElegido[0].Libro_idLibro

            var libroEncontradoPorAlgoritmo = ""
            for (let i = 0; i < $scope.books.length; i++) {
              if ($scope.books[i].idLibro == idLibro_has_CategoriaConCategoriaAleatoriaElegido) {
                libroEncontradoPorAlgoritmo = $scope.books[i]
                break;
              }
            }
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

    // Función que realiza la busqueda, considera busquedas por palabra
    $scope.search = function (menu) {
      // Si el audio esta habilitado, se detiene
      try {
        if ($scope.value == 1) {
          audio.pause()
        }
      } catch (error) {
        console.log("No existe audio iniciado")
      }

      var booksFind = [];
      // Separamos el valor de la busqueda y lo almacenamos en un array
      var word = $scope.valueSearch.toLowerCase()
      var wordSeparate = word.split(" ");

      // Establecemos el largo de la palabra separada. 
      var largo = wordSeparate.length
      //Se agrega la condicion en el caso particular de largo==1 por la validación del for
      if (largo == 1) largo++;
      // Ciclo que recorre todos los libros
      for (let i = 0; i < $scope.books.length; i++) {
        var titleBook = $scope.books[i].titulo.toLowerCase()
        // Ciclo que recorre el arreglo del valor de la búsqueda
        for (let j = 0; j < largo - 1; j++) {
          if (titleBook.includes(wordSeparate[j])) {
            booksFind.push($scope.books[i])
          }
        }
      }
      $scope.bookFind = booksFind;
      $scope.notFound = "No existen coincidencias de la búsqueda, vuelva a intentarlo"
      console.log(booksFind)
      // Actualizamos la vista
      $scope.menu = 'app/views/' + menu + '.html';

    }

    // Funcion que reproduce audios de las vistas
    var audio2
    $scope.playAudioVista = function (ruta) {
      if($scope.value==1){
        console.log("lib/audio/vista/"+ruta+".mp3")
        audio2=new Audio("lib/audio/vista/"+ruta+".mp3")
        audio2.play()
      }
    };
    
    

  }]);
})();