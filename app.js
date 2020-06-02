(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.comidasDia = "rice, meat";
  $scope.mensaje = "";
  $scope.colorMensaje="";
  $scope.setMensaje = function(){
    var nComidas = contarCadenasSeparadasPorComa($scope.comidasDia);
    var respuestas = determinarSiSonDemasiadas(nComidas);
    $scope.colorMensaje = respuestas[0];
    $scope.mensaje = respuestas[1];
  };

  function contarCadenasSeparadasPorComa(string){ //count no empties strings separate for , 
    var tamanioVector = 0;
    var vector = string.split(",")
    var n = 0;
    var cadena = "";
    if (string.length>""){
      tamanioVector = vector.length;
      for (var i=0;i<tamanioVector;i++){
        cadena = vector[i];
        if (!!cadena)
          n+=1;
      }
    }
    return n;
  };
  function determinarSiSonDemasiadas(numeroDeComidas){ //determinate if too much items
    var respuestas = new Array();
    respuestas[0]="black";
    if (numeroDeComidas==0){
      respuestas[1]="Please enter data first";
      respuestas[0]="red";
    }
    else if (numeroDeComidas>0 && numeroDeComidas<=3){
      respuestas[1]="Enjoy!";
      respuestas[0]="green";
    }
    else if (numeroDeComidas>3){
      respuestas[1]="Too much!!";
      respuestas[0]="green";
    }
    return respuestas;
  }
}

})();
