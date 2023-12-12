//let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario:");

//if (nombreUsuario) {
//  console.log("¡Bienvenido, " + nombreUsuario + "!");
//} else {
//  console.log("¡Hola, visitante!");
//}

//let edad;

//while (true) {
//  let entrada = prompt("Por favor, ingresa tu edad:");
//  edad = parseInt(entrada);

//  if (!isNaN(edad) && edad >= 0) {
//    break;
//  } else {
//    alert("Por favor, ingresa un número válido para la edad.");
//  }
//}

//console.log("Edad ingresada: " + edad);

//if (edad < 18) {
//  alert("Eres menor de edad. No deberias estar aqui sin supervision.");
//} else {
//  alert("Eres mayor de edad. Bienvenido.");
//}

//let nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");

//nacionalidad = nacionalidad.toLowerCase();

//if (nacionalidad === "argentina") {
//  alert("¡VAMO ARGENTINA!");
//} else {
//  alert("Tu nacionalidad es: " + nacionalidad);
//}

//let suma = 0;

//let numero = parseInt(prompt("Ingrese un número para sumar:"));

//while (numero !== 0 && !isNaN(numero)) {
//  suma += numero;
//  numero = parseInt(prompt("Ingrese otro número para sumar y presione 0 para el total:"));
//}

//console.log("La suma total de los números ingresados es: " + suma);

const form = document.querySelector('form');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
  const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;
  const payment = calculatePayment(loanAmount, interestRate, loanTerm);
  tableBody.innerHTML = '';

  for (let i = 1; i < loanTerm; i++) {
  const row = document.createElement('tr');
  const initialBalance = loanAmount * interestRate;
  const interest = initialBalance * interestRate;
  const principal = payment - interest; 
  const balance = initialBalance - principal;
  const year = Math.ceil(i / 12);
  row.innerHTML `
  <td>${year}</td>
  <td>${initialBalance.toFixed(2)}</td>
  <td>${payment.toFixed(2)}</td>
  <td>${interest.toFixed(2)}</td>
  <td>${principal.toFixed(2)}</td>
  <td>${balance.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);
  }
});

function calculatePayment(loanAmount, interestRate, loanTerm)
{
  const monthlyInterestRate = interestRate / 12;
  const factor = (1 + monthlyInterestRate) ** loanTerm;
  return loanAmount * monthlyInterestRate * factor / (factor - 1);
};