(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.comidasDia = "pan,cafe";
  $scope.mensaje = "";
  $scope.colorMensaje="";
  $scope.setMensaje = function(){
    var nComidas = contarCadenasSeparadasPorComa($scope.comidasDia);
    determinarSiSonDemasiadas(nComidas);
  };

  function contarCadenasSeparadasPorComa(string){
    var tamanioVector = 0;
    var vector = string.split(",")
    if (string.length>"")
      tamanioVector = vector.length;
    return tamanioVector;
  };
  function determinarSiSonDemasiadas(numeroDeComidas){
    $scope.colorMensaje="black";
    if (numeroDeComidas==0){
      $scope.mensaje="Ingrese los datos primero";
    }
    else if (numeroDeComidas>0 && numeroDeComidas<=3){
      $scope.mensaje="DISFRUTA";
      $scope.colorMensaje="green";
    }
    else if (numeroDeComidas>3){
      $scope.mensaje="Demasiado!!";
      $scope.colorMensaje="red";
    }
  }
});

})();
