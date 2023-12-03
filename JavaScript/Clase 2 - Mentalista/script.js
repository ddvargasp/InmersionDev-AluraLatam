var numeroSecreto = parseInt(Math.random() * 100 + 1);

alert(numeroSecreto);

while (numeroSecreto != numeroDigitado) {
  var numeroDigitado = prompt("Ingrese un numero entre 1 y 100");

  if (numeroSecreto == numeroDigitado) {
    alert("Acertáste");
  } else if (numeroSecreto > numeroDigitado) {
    alert("Erraste.. el numero secreto es mayor al numero digitado");
  } else if (numeroSecreto < numeroDigitado) {
    alert("Erraste.. el numero secreto es menor al numero digitado");
  }
}

// Indicar si el numero es menor o mayor al indicado
// Indicar la cantidad de intentos (contador)
// Colocar limite de intentos
