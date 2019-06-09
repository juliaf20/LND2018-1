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
  }
} while (flag != false);

// EJERCICIO 1
function ejercicio1() {
  alert("Juan Carlos Acosta Perabá");
  alert("Esto funciona");
}

// EJERCICIO 2
function ejercicio2() {
  // Apartado A
  var nombre = "-- Juan Carlos Acosta Perabá --";
  alert(nombre);

  // Aparatado B
  var mensaje;
  var edad;
  mensaje = prompt("Dime tu nombre");
  edad = parseInt(prompt("Dime tu edad"));
  alert(mensaje + " tiene " + edad + " año(s).\n\n" + mensaje + " = " + typeof mensaje + "\n" + edad + " = " + typeof edad);
}

// EJERCIO 3
function ejercicio3() {
  function par_o_impar(numero) {
    if ((numero % 2) == 0) {
      alert(numero + " es par.");
    } else{
      alert(numero + " es impar.");
    }
  }
  par_o_impar(2);
}

// EJERCICIO 4
function ejercicio4() {
  var numero1 = 5;
  var numero2 = 8;

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
  var semana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
  var sem = "";

  for (var i = 0; i < semana.length; i++) {
    sem = sem.concat(semana[i] + "\n");
  }
  alert(sem);
}

// EJERCICIO 6
function ejercicio6() {

}

// EJERCICIO 7
function ejercicio7() {

}

// EJERCICIO 8
function ejercicio8() {

}

// EJERCICIO 9
function ejercicio9() {

}
