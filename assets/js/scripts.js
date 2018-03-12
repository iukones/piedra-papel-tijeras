
// humano vs maquina

function jugarHvsM(humano) {
    // console.log(humano);

    // colocamos la variable con las opciones de personajes
    var opcionesElegibles = [
        "frankenstein",
        "leia",
        "padme",
        "zombie",
        "vampiro"
    ];

    // aqui se configura una matriz con las opciones de juego para ambos jugadores.
    var opcionJugadas = [
        [0,2,1,1,2],
        [1,0,2,2,1],
        [2,1,0,2,2],
        [2,1,1,0,2],
        [1,2,1,1,0]
    ];
    // console.log("humano escogio: " + opcionJugadas[humano]);

    // descripcion jugadas
    var descripcionJugada = [
        ['Esto es empate','leia cubre frankenstein','frankenstein rompe padme','frankenstein descalabra zombie','vampiro vaporiza a frankenstein'],
        ['leia cubre frankenstein','Esto es empate','padme cortan leia','zombie devora leia','leia desautoriza a vampiro'],
        ['frankenstein rompe padme','padme cortan leia','Esto es empate','zombie devora padme','vampiro vaporiza padme'],
        ['frankenstein descalabra zombie','zombie devora leia','zombie devora padme','Esto es empate','vampiro vaporiza zombie'],
        ['vampiro vaporiza a frankenstein','leia desautoriza a vampiro','vampiro vaporiza padme','vampiro vaporiza zombie','Esto es empate']
    ];

    var resultadoTexto = [
        "¡nadie gana!",
        "¡has perdido!",
        "¡Excelente has Ganado!"
    ];

    var maquina = Math.floor((Math.random() * 5));
    // console.log("maquina escogio: " + maquina);
    var resutadoFinal = opcionJugadas[maquina][humano];
    // console.log("maquina escogio: " + opcionJugadas[maquina]);


    // console.log(resutadoFinal);
    console.log("Tu escogiste: " + opcionesElegibles[humano]);
    console.log("Maquina escogiste: " + opcionesElegibles[maquina]);
    console.log(descripcionJugada[maquina][humano]);
    console.log(resultadoTexto[resutadoFinal]);

    var voz1;
    var voz2;
    var voz3;
    var voz4;

    voz1 = new SpeechSynthesisUtterance("Tu escogiste: " + opcionesElegibles[humano]);
    voz2 = new SpeechSynthesisUtterance("Maquina escogiste: " + opcionesElegibles[maquina]);
    voz3 = new SpeechSynthesisUtterance(descripcionJugada[maquina][humano]);
    voz4 = new SpeechSynthesisUtterance(resultadoTexto[resutadoFinal]);

    window.speechSynthesis.speak(voz1);
    window.speechSynthesis.speak(voz2);
    window.speechSynthesis.speak(voz3);
    window.speechSynthesis.speak(voz4);

}

// duda existencial
// var a = 10, b = 20;
// console.log(-+a++-+-+b--);


// codigo jugador vs jugador FaceToFace.

var jugarFacetoFace = function(){
    confirm("¡Bienvenido, vamos a jugar!");

    var jugador1 = prompt('Jugador 1, es tu turno de elegir: "piedra", "papel", "tijera", "lagarto", "spock".');
    var jugador2 = prompt('Jugador 2, es tu turno de elegir: "piedra", "papel", "tijera", "lagarto", "spock".');

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
    else if (jugador1 === "spock" && jugador2 === "lagarto") {
        confirm("¡Gana el Jugador 1!");
    }
    else {
        confirm("¡Gana el Jugador 2!");
    }
    if(confirm("¿Quieres jugar de nuevo?")){
        jugarFacetoFace();
    }
    else {
        console.log("Fin del juego 😡");
    }
};


function playclip() {
    var sonido = document.getElementById("myAudio");
    sonido.play();
}
function pauseclip() {
    var sonido = document.getElementById("myAudio");
    sonido.pause();
}

