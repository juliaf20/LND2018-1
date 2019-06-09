//    /* DECLARACIÓN DE VARIABLES */
// Variable para elegir una opción en el menú
var e = 0;

// Variable Flag que controla la salida del programa
var flag = true;

// String con texto del menú
var menu = "Menú\n1 -> Ejercicio 1\n2 -> Ejercicio 2\n3 -> Ejercicio 3\n4 -> Ejercicio 4\n5 -> Ejercicio 5\n6 -> Ejercicio 6\n7 -> Ejercicio 7\n8 -> Ejercicio 8\n9 -> Ejercicio 9";

// String con texto de error;
var error = "Opción errónea!";

//    /* PROGRAMA DE JAVASCRIPT */
// Bucle Do/While
do {
  // Elegimos una oción del menú
  e = parseInt(prompt(menu));

  if (e == 1 || e == 2 || e == 3 || e == 4 || e == 5 || e == 6 || e == 7 || e == 8 || e == 9) {
    switch (e) {
      case 1:
        ejercicio1();
        flag = false;
        break;
      case 2:
        ejercicio2();
        flag = false;
        break;
      case 3:
        ejercicio3();
        flag = false;
        break;
      case 4:
        ejercicio4();
        flag = false;
        break;
      case 5:
        ejercicio5();
        flag = false;
        break;
      case 6:
        ejercicio6();
        flag = false;
        break;
      case 7:
        ejercicio7();
        flag = false;
        break;
      case 8:
        ejercicio8();
        flag = false;
        break;
      case 9:
        ejercicio9();
        flag = false;
        break;
    }
  } else {
    alert(error);
    flag = false;
  }
} while (flag != false);

// EJERCICIO 1
function ejercicio1() {
  // Imprimimos el mensaje de mi nombre completo
  alert("Juan Carlos Acosta Perabá");
  // Imprimimos el mensaje "Esto funciona"
  alert("Esto funciona");
}

// EJERCICIO 2
function ejercicio2() {
  // APARTADO A
  alert("Apartado A");
  var nombre = "-- Juan Carlos Acosta Perabá --";
  alert(nombre);

  // APARTADO B
  alert("Apartado B");
  // Declaramos las variables
  var mensaje;
  var edad;
  // Inicializamos las variables
  mensaje = prompt("Dime tu nombre");
  edad = parseInt(prompt("Dime tu edad"));
  alert(mensaje + " tiene " + edad + " año(s).\n\n" + mensaje + " = " + typeof mensaje + "\n" + edad + " = " + typeof edad);
}

// EJERCIO 3
function ejercicio3() {
  // Creamos la función
  function par_o_impar(numero) {
    if ((numero % 2) == 0) {
      alert(numero + " es par.");
    } else {
      alert(numero + " es impar.");
    }
  }
  // Llamamos la función
  par_o_impar(2);
}

// EJERCICIO 4
function ejercicio4() {
  var numero1 = 5;
  var numero2 = 8;
  // Ponemos las condiciones en los if
  if (numero1 < numero2) {
    alert("numero1 no es mayor que numero2");
  }
  if (0 < numero2) {
    alert("numero2 es positivo");
  }
  if (numero1 < 0) {
    alert("numero1 es negativo o distinto de cero");
  }
  if ((numero1 + 1) < numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
  }
}

// EJERCICIO 5
function ejercicio5() {
  // DECLARAMOS LAS VARIABLES
  // Declaramos el array con los días de la semana
  var semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  // Declaramos una variable string vacía
  var sem = "";
  // Bucle for para guardar los días de la semana en el string vacío
  for (var i = 0; i < semana.length; i++) {
    sem = sem.concat(semana[i] + "\n");
  }
  // Imprimimos los días de la semana
  alert(sem);
}

// EJERCICIO 6
function ejercicio6() {
  var valores = [true, 3, false, "hola", "adiós", 5];
  // APARTADO A
  alert("Apartado A");
  var str1, str2;
  // Calcular el string más alto del array
  // Bucle for para ver cada elemento del array
  for (var i = 0; i < valores.length; i++) {
    // Condicional if para comprobar que el elemento es un String
    if (valores[i] == "hola") {
      str1 = valores[i];
    }
    if (valores[i] == "adiós") {
      str2 = valores[i];
    }
  }
  if (str1 < str2) {
    alert(str1 + " es mayor que " + str2);
  }
  if (str1 > str2) {
    alert(str1 + " es menor que " + str2);
  }

  // APARTADO B
  alert("Apartado B");
  // Mostrar los booleanos del array
  // Bucle for para ver cada elemento del array
  for (var i = 0; i < valores.length; i++) {
    // Condicional if para comprobar que el elemento es un booleano true
    if (valores[i] == true) {
      alert("El valor del array con índice " + i + " es " + valores[i]);
    }
    if (valores[i] == false) {
      alert("El valor del array con índice " + i + " es " + valores[i]);
    }
  }

  // APARTADO C
  alert("Apartado C");
  var int1, int2;
  // Operaciones matemáticas con los números del array
  // Bucle for para ver cada elemento del array
  for (var i = 0; i < valores.length; i++) {
    if (valores[i] == 3) {
      int1 = valores[i];
    }
    if (valores[i] == 5) {
      int2 = valores[i];
    }
  }
  // Suma
  var sum = int1 + int2;
  alert("Suma\n" + int1 + " + " + int2 + " = " + sum);
  // Resta
  var res = int1 - int2;
  alert("Resta\n" + int1 + " - " + int2 + " = " + res);
  // División
  var div = int1 / int2;
  alert("División\n" + int1 + " / " + int2 + " = " + div);
  // Multiplicación
  var mul = int1 * int2;
  alert("Multiplicación\n" + int1 + " * " + int2 + " = " + mul);
  // Módulo
  var mod = int1 % int2;
  alert("Módulo\n" + int1 + " % " + int2 + " = " + mod);
}

// EJERCICIO 7
function ejercicio7() {
  // DECLARACIÓN DE VARIABLES
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var nDNI, lDNI, index, letra;
  var numDNI = "Dime el número de tu DNI";
  var letDNI = "Dime la letra de tu DNI";
  var error = "El número proporcionado no es válido";

  // INICIO PROGRAMA
  // Se pide el número del DNI
  nDNI = parseInt(prompt(numDNI));
  // Se comprueba que el número introducido sea válido
  if (0 < nDNI && nDNI < 99999999) {
    // Se pide la letra del DNI
    lDNI = prompt(letDNI);
    index = nDNI % 23;
    letra = letras[index];
    if (letra == lDNI) {
      alert("Tu DNI es correcto\n" + nDNI + lDNI);
    } else {
      alert("La letra introducida no es correcta");
    }
  } else {
    alert(error);
  }
}

// EJERCICIO 8
function ejercicio8() {
  // APARTADO A
  alert("Apartado A");
  // Variable de la que calcular el factorial
  var a = parseInt(prompt("Valor del que calcular el factorial"));
  // Variable para almacenar el resultado
  var resultado1 = 1;
  // Bucle for para calcular el factorial
  for (var i = 1; i <= a; i++) {
    resultado1 = resultado1 * i;
  }
  alert(a + "! = " + resultado1);

  // APARTADO B
  alert("Apartado B");
  // Variable de la que calcular el factorial
  var b = parseInt(prompt("Valor del que calcular el factorial"));
  // Función que calcula el factorial de un número
  function factorial(valor) {
    if (valor == 0) {
      return 1;
    }
    return valor * factorial(valor - 1);
  }
  // Imrpimir el resultado de la función
  alert(b + "! = " + factorial(b));
}

// EJERCICIO 9
function ejercicio9() {
  // Variable para la cadena de texto
  var mensaje = prompt("Dime el mensaje");
  // Función que inspecciona el mensaje
  function inspector(text) {
    if (text == text.toUpperCase()) {
      alert("El mensaje está escrito entero en mayúsculas.");
    } else {
      if (text == text.toLowerCase()) {
        alert("El mensaje está escrito entero en minúsculas.");
      } else {
        alert("El mensaje está escrito con mayúsculas y minúsculas.");
      }
    }
  }
  // Se llama la función
  inspector(mensaje);
}
