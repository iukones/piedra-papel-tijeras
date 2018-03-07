

// jugador vs maquina

function juego(usuario1) {
    // console.log(usuario1);

    var opcionesElegibles = [
        "Piedra",
        "Papel",
        "Tijeras",
        "Lagarto",
        "Spock"
    ];

    var opcionJugadas = [
        [0,2,1,2,2],
        [1,0,2,2,2],
        [2,1,0,2,2],
        [1,1,1,0,2],
        [1,1,1,1,0]
    ];
    // console.log("usuario1 escogio: " + opcionesElegibles[usuario1]);

    var resultadoTexto = [
        "¡Empataste 🤒!",
        "¡Ups Perdiste 😡!",
        "¡Woow Ganaste 💪!"
    ];    

    var usuario2 = Math.floor((Math.random() * 5));
    // console.log("usuario2 escogio: " + usuario2);

    var resutadoFinal = opcionJugadas[usuario2][usuario1];

    // console.log(resutadoFinal);
    console.log("Usuario 1 escoge: " + opcionesElegibles[usuario1]);
    console.log("Usuario 2 escoge: " + opcionesElegibles[usuario2]);
    console.log(resultadoTexto[resutadoFinal]);

}

// duda existencial
// var a = 10, b = 20;
// console.log(-+a++-+-+b--);




// codigo jugador vs jugador. 

var jugarFacetoFace = function(){
    confirm("¡Bienvenido, vamos a jugar!");

    var jugador1 = prompt('Jugador 1, es tu turno de elegir: "piedra", "papel" o "tijera".');
    var jugador2 = prompt('Jugador 2, es tu turno de elegir: "piedra", "papel" o "tijera".');

    if (jugador1 === jugador2) {
        confirm("Empate 🤒");
    }
    else if (jugador1 === "piedra" && jugador2 === "tijera"){
        confirm("¡Gana el Jugador 1!");
    }
    else if (jugador1 === "tijera" && jugador2 === "papel"){
        confirm("¡Gana el Jugador 1!");
    }
    else if (jugador1 === "papel" && jugador2 === "piedra"){
        confirm("¡Gana el Jugador 1!");
    }
    else {
        confirm("¡Gana el Jugador 2!");
    }
    if(confirm("¿Quieres jugar de nuevo?")){
        jugarFacetoFace();
    }
    else {
        console.log("Nos veremos pronto :)");
    }
};

