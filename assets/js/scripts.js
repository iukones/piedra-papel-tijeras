function juego(usuario1) {
    // console.log(usuario1);

    var opcionesElegibles = [
        "Piedra",
        "Papel",
        "Tijeras",
        "Lagarto",
        "Spock"
    ];

    var resultadoTexto = [
        "¡Empataste 🤒!",
        "¡Ups Perdiste 😡!",
        "¡Woow Ganaste 💪!"
    ];
    // console.log("usuario1 escogio: " + opcionesElegibles[usuario1]);

    var opcionJugadas = [
        [0,2,1,2,2],
        [1,0,2,2,2],
        [2,1,0,2,2],
        [1,1,1,0,2],
        [1,1,1,1,0]
    ];

    var usuario2 = Math.floor((Math.random() * 5));
    // console.log("usuario2 escogio: " + usuario2);

    var resutadoFinal = opcionJugadas[usuario2][usuario1];

    // console.log(resutadoFinal);
    console.log("Usuario 1 escoge: " + opcionesElegibles[usuario1]);
    console.log("Usuario 2 escoge: " + opcionesElegibles[usuario2]);
    console.log(resultadoTexto[resutadoFinal]);

}