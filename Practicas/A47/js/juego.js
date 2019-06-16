/* DECLARACIÓN DE VARIABLES */
// Contador de vueltas
var contador;
// Generamos array con colores
var colors = ['yellow','white','red','orange','magenta','green','gray','gold','cyan','blue'];
// Generamos número random
var r = Math.random() * (colors.length - 1);
// Truncamos el random
var target_index = Math.floor(r);
// Guardamos el color random
var target = colors[target_index];
// Elección del user
var guess_input;
// Mensaje principal
var mensajeI = "I am thinking of one of these colors\n\n" + colors.sort() + "\n\nWhat color am I thinking of?";
// Mensaje error
var mensajeE = "Sorry, I don't recognize your color.\n\nPlease try again.";
// Mensaje Higher
var mensajeH = "Sorry, your guess is not correct!\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.";
// Mensaje Lower
var mensajeL = "Sorry, your guess is not correct!\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.";
// Flag controlador del programa
var flag = true;

/* PROGRAMA */
alert(target);
contador = 0;
do_game();

/* FUNCIONES */
// Función guess_input = target
function congrats() {
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=target;
    alert("Congratulations! You have guessed the color!\n\nIt took you " + contador + " guesses to finish the game!\n\nYou can see colour in the background.");
    flag = false;
}
// Función guess_input < target
function low() {
  if (guess_input < target) {
    alert(mensajeL);
    flag = true;
  }
}
// Función guess_input > target
function high() {
  if (guess_input > target) {
    alert(mensajeH);
    flag = true;
  }
}
// Función do_game
function do_game() {
  while (flag == true) {
    guess_input = prompt(mensajeI);
    contador++;
    if (guess_input == target) {
      congrats();
      break;
    }
    check_guess();
  }
}
// Función check_guess
function check_guess() {
  for (var i = 0; i < (colors.length - 1); i++) {
    if (guess_input != colors[i]) {
      alert(mensajeE);
      flag = true;
    }
    if (guess_input == colors[i]) {
      high();
      low();
      break;
    }
  }
}
