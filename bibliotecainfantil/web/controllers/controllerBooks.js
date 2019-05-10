// 1. Vinculamos el js con el html a traves de app
var app = angular.module('app', []);

// 3. Funcion del controlador
function controllerBooks($scope, $http){
    // De prueba, BORRAR AL FINAL
    $scope.hola="assd"

    // http facilita la comunicación con remotos, hace una solcitud al servidor y espera una respuesta
    $http({
        method: 'GET',
        url: './getBooks.php'
      }).then(function successCallback(response) {
          // Aqui va todo lo que hacemos cuando logramos la conexion
          $scope.books = response.data;
          console.log($scope.books)
        });
}

// 2. Inicializamos el controller, scope es para enviar los datos entre el controller y html, http para comunicacion con remotos
app.controller('controllerBooks', ['$scope', '$http',controllerBooks])