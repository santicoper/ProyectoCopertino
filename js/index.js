let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario:");

if (nombreUsuario) {
  console.log("¡Bienvenido, " + nombreUsuario + "!");
} else {
  console.log("¡Hola, visitante!");
}

let edad;

while (true) {
  let entrada = prompt("Por favor, ingresa tu edad:");
  edad = parseInt(entrada);

  if (!isNaN(edad) && edad >= 0) {
    break;
  } else {
    alert("Por favor, ingresa un número válido para la edad.");
  }
}

console.log("Edad ingresada: " + edad);

if (edad < 18) {
  alert("Eres menor de edad. No deberias estar aqui sin supervision.");
} else {
  alert("Eres mayor de edad. Bienvenido.");
}

let nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");

nacionalidad = nacionalidad.toLowerCase();

if (nacionalidad === "argentina") {
  alert("¡VAMO ARGENTINA!");
} else {
  alert("Tu nacionalidad es: " + nacionalidad);
}

let suma = 0;

let numero = parseInt(prompt("Ingrese un número para sumar:"));

while (numero !== 0 && !isNaN(numero)) {
  suma += numero;
  numero = parseInt(prompt("Ingrese otro número para sumar y presione 0 para el total:"));
}

console.log("La suma total de los números ingresados es: " + suma);
