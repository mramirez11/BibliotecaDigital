function chooseBooksCtrl($scope) {
    $scope.dato = "asdas";
}

angular.module('app', [])
    .controller('chooseBooksCtrl', ['$scope', chooseBooksCtrl]);