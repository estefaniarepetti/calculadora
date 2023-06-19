const inputPeso = document.getElementById("txtPeso");
const inputAltura = document.getElementById("txtAltura");
const divResultado = document.getElementById("resultado");

function calcularIMC() {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if (isNaN(peso) || isNaN(altura)) {
    divResultado.textContent = "Ingresa valores válidos en los campos de peso y altura.";
    return; // Detener la ejecución del cálculo del IMC si faltan valores válidos
  }

  const imc = peso / (altura * altura);

  if (imc >= 0.0 && imc <= 22.0) {
    divResultado.textContent = "IMC: " + imc.toFixed(2) + " - Bajo peso";
  } else if (imc >= 22.1 && imc <= 27.0) {
    divResultado.textContent = "IMC: " + imc.toFixed(2) + " - Peso normal";
  } else if (imc >= 27.1 && imc <= 32.0) {
    divResultado.textContent = "IMC: " + imc.toFixed(2) + " - Sobrepeso";
  } else if (imc >= 32.1 && imc <= 41.9) {
    divResultado.textContent = "IMC: " + imc.toFixed(2) + " - Obesidad";
  } else if (imc >= 42.0) {
    divResultado.textContent = "IMC: " + imc.toFixed(2) + " - Obesidad mórbida";
  }
}

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularIMC);



