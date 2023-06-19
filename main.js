const inputPeso = document.getElementById("txtPeso");
const inputAltura = document.getElementById("txtAltura");
const divResultado = document.getElementById("resultado");

function calcularIMC() {
  const peso = parseFloat(inputPeso.value);
  const alturaEnCm = parseFloat(inputAltura.value);

  const alturaEnMetros = alturaEnCm / 100;  

  if (isNaN(peso) || isNaN(alturaEnCm)) {
    divResultado.textContent = "Ingresa valores válidos en los campos de peso y altura.";
    return; 
  }

  const imc = peso / (alturaEnMetros * alturaEnMetros);

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