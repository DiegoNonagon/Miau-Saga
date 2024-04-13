//Titulo
alert ("===MIAU SAGA===")

//Introducción
alert ("Prólogo")
alert ("En las lejanas tierras de MichiKron nace un gran poder con la capacidad de darle el reinado a un michi.")
alert ("El catnip supremo. Sólo uno se alzará ante los demás.")

//Selección de personaje

const personajes = ["Michi Ultraespadón", "Michi Katana", "Michi Mago"]
const personajeRespuestas = ["A", "B", "C"]
const personajeTextos = ["\n A)  Michi Ultraespadón", "\n B)  Michi Katana", "\n C)  Michi Mago"]

let loop = true
while (loop){
    
const textoValidacion = "\n Escoge ingresando A, B o C."

let escogerPersonaje = ""

escogerPersonaje = prompt("Escoge a tu personaje " + personajeTextos + textoValidacion).toUpperCase()
if (escogerPersonaje == personajeRespuestas[0]){
    alert ("Escogiste a " + personajes[0])
}
else if (escogerPersonaje == personajeRespuestas[1]){
    alert ("Escogiste a " + personajes[1])
}
else if (escogerPersonaje == personajeRespuestas[2]){
    alert ("Escogiste a " + personajes[2])
}
else {
    alert (textoValidacion + "\n Vuelve a escoger")
}

loop = confirm ("¿Quieres cambiar a tu personaje?" + "\n Preciona cáncelar para continuar con el juego")
}

//Nombrar personaje

let nombre = ""
nombre = prompt("Ponle un nombre a tu Michi")
alert ("Tú Michi se llama " + nombre)

//Nivel 1
alert ("Nivel 1 Bosques de suculentas")
alert ("Los Michis del pasado se levantan en busca de poder.")

alert ("Te encuentras con Michi garras salvajes.")

//Combate

let loopCombate = true
while (loopCombate){

let personaje = prompt ("ingresa 0 para usar Magia, 1 para usar Defensa o 2 Para usar Espada")
if (personaje == 0) {
    alert (nombre + " Usó Rayo de luz nocturna")
}
else if (personaje == 1) {
    alert (nombre + " Usó Parry de Escudo")
}
else if (personaje == 2) {
    alert (nombre + " Usó Ataque en salto")
}
else {
    alert ("Solo ingresa 0, 1 o 2" + "\n Vuelve a escoger")
}

let enemigo = Math.round(Math.random() * 2)

if (enemigo == 0) {
    alert ("Enemigo uso Lanzar piedra")
}
else if (personaje == 1) {
    alert ("Enemigo uso Esquive con garrazo")
}
else if (personaje == 2) {
    alert ("Enemigo uso agarre de mordida sangrienta")
}

if (personaje == enemigo) {
    alert ("Se neutralizaron los ataques")
} 
else if (personaje == 0 && enemigo == 2) {
    alert ("Acertaste el ataque")
}
else if (personaje == 1 && enemigo == 0) {
    alert ("Acertaste el ataque")
}
else if (personaje == 2 && enemigo == 1) {
    alert ("Acertaste el ataque")
}
else {
    alert ("Recibiste el ataque")
}

loopCombate = confirm ("¿Quieres atacar de nuevo?")
}

let combate = Math.round(Math.random() * 2)
if (combate == 0) {
    alert ("Ganaste")
}
else if (combate == 1) {
    alert ("Ganaste")
}
else {
    alert ("Perdiste")
}









