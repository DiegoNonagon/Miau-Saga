//Introducción

function intro(){
    alert ("===MIAU SAGA===");
    alert ("En las lejanas tierras de MichiKron nace un gran poder con la capacidad de darle el reinado a un michi.");
    alert ("El catnip supremo. Sólo uno se alzará ante los demás.");
}

//Selección de personaje

const personajes = ["Michi Ultraespadón", "Michi Katana", "Michi Mago"]
const personajeRespuestas = ["A", "B", "C"]
const textoValidacion = "\n Ingresa A, B o C para escoger."

function escogerPersonaje(){
    const personaje = prompt("Escoge a tu personaje " + "\n A) Michi Ultraespadón" + "\n B) Michi Katana" + "\n C) Michi Mago" + textoValidacion).toUpperCase()

    if (personaje == personajeRespuestas[0]){
        alert ("Escogiste a " + personajes[0])
    } else if (personaje == personajeRespuestas[1]){
        alert ("Escogiste a " + personajes[1])
    } else if (personaje == personajeRespuestas[2]){
        alert ("Escogiste a " + personajes[2])
    } else {
        alert (textoValidacion + "\n Vuelve a escoger.");
        escogerPersonaje();
    }
}
//Nombrar personaje

let nombre = ""

function nombrarPersonaje() {

    nombre = prompt("Ponle un nombre a tu Michi.")
    alert ("Tú Michi se llama " + nombre)

    if (nombre.trim()===""){
        alert("Nombre invalido, ingresar de nuevo.");
        nombrarPersonaje();
    }
}

//Nivel 1

function nivelUno(){
    alert ("Nivel 1 Bosques de suculentas");
    alert ("Los Michis del pasado se levantan en busca de poder.");
    alert ("Te encuentras con Michi garras salvajes.");
}
//Combate

//Arreglar sistema de puntos
/*function puntos(a,b){
    a + b;
    if(a == 3){
        return("Ganaste")
    } else {
        combate();
    }
}

function puntosEnemigo(a,b){
    a + b;
    if(a == 5){
        return("Has Muerto")
    } else {
        combate();
    }
}*/

function combate(){
    atacar();
    ataqueEnemigo();
    compararAtaques();
}

let jugador = ""

function atacar(){
    jugador = prompt ("ingresa 0 para usar Magia, 1 para usar Defensa o 2 Para usar Espada")

    if (jugador == 0) {
        alert (nombre + " Usó Rayo de luz nocturna");
        ataqueEnemigo();
    } else if (jugador == 1) {
        alert (nombre + " Usó Parry de Escudo");
        ataqueEnemigo();
    } else if (jugador == 2) {
        alert (nombre + " Usó Ataque en salto");
        ataqueEnemigo();
    } else {
        alert ("Solo ingresa 0, 1 o 2" + "\n Vuelve a escoger");
        atacar();
    }
}

let enemigo = ""

function ataqueEnemigo(){
    enemigo = Math.round(Math.random() * 2)

    if (enemigo == 0) {
        alert ("Enemigo uso Lanzar piedra");
        compararAtaques();
    } else if (enemigo == 1) {
        alert ("Enemigo uso Esquive con garrazo");
        compararAtaques();
    } else if (enemigo == 2) {
        alert ("Enemigo uso agarre de mordida sangrienta");
        compararAtaques();
    }
}

function compararAtaques(){
    if (jugador == enemigo) {
        alert ("Se neutralizaron los ataques");
        combate();
    } else if (jugador == 0 && enemigo == 2) {
        alert ("Acertaste el ataque");
        puntos(0,1);
    } else if (jugador == 1 && enemigo == 0) {
        alert ("Acertaste el ataque");
        puntos(0,1);
    } else if (jugador == 2 && enemigo == 1) {
        alert ("Acertaste el ataque");
        puntos(0,1);
    } else {
        alert ("Recibiste el ataque");
        puntosEnemigo(0,1);
    } 
}

//Ejecución

function miauSaga(){
    intro();
    escogerPersonaje();
    nombrarPersonaje();
    nivelUno();
    combate();
}

miauSaga();