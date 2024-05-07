const personajes = ["Michi Guts",
"Michi Sekiro", 
"Michi Gandalf", 
"Michi Garras Salvajes", 
"Michi Aliento Venenoso", 
"Michi Mago Oscuro"]

let ataqueJugador
let ataqueEnemigo
let corazonesJugador = 5
let corazonesEnemigo = 3
let nombrePersonaje

function iniciarJuego () {
    let sectionEscogerAtaque = document.getElementById("escoger-ataque")
    sectionEscogerAtaque.style.display = "none"
    let sectionEscogerPersonaje = document.getElementById("escoger-personaje")
    sectionEscogerPersonaje.style.display = "none"
    let sectionEscogerPersonajes = document.getElementById("escoger-personajes")
    sectionEscogerPersonajes.style.display = "none"
    let sectionFinal = document.getElementById("section-final")
    sectionFinal.style.display = "none"
    let btnpersonaje = document.getElementById("boton-personaje")
    btnpersonaje.style.display = "none"
    let sectionNombrarPersonaje = document.getElementById("nombrar-personaje")
    sectionNombrarPersonaje.style.display = "none"

    let comenzarJuego = document.getElementById("comenzar-juego")
    comenzarJuego.addEventListener("click", startGame)

    let name = document.getElementById("nombre-personaje")
    name.addEventListener("submit", (e) => {
        e.preventDefault()
        localStorage.setItem("list", JSON.stringify(name));
    })
    let btnNombrarPersonaje = document.getElementById("boton-nombre")
    btnNombrarPersonaje.addEventListener("click", (e) => {
        e.preventDefault()
        nombrePersonaje = name
    })
    btnNombrarPersonaje.addEventListener("click", nombrarPersonaje)

    let btnEscogerPersonaje = document.getElementById("botonPersonaje")
    btnEscogerPersonaje.addEventListener("click", escogerPersonaje)

    let btnEspada = document.getElementById("boton-espada")
    btnEspada.addEventListener("click", ataqueEspada)
    let btnMagia = document.getElementById("boton-magia")
    btnMagia.addEventListener("click", ataqueMagia)
    let btnContraataque = document.getElementById("boton-contraataque")
    btnContraataque.addEventListener("click", ataqueContraataque)

    let btnReiniciar = document.getElementById("boton-reiniciar")
    btnReiniciar.addEventListener("click", reiniciarJuego)
}

function startGame(){
    let sectionPantallaTitulo = document.getElementById("pantalla-titulo")
    sectionPantallaTitulo.style.display = "none"

    let sectionNombrarPersonaje = document.getElementById("nombrar-personaje")
    sectionNombrarPersonaje.style.display = "flex"
}

function nombrarPersonaje(){
    let sectionNombrarPersonaje = document.getElementById("nombrar-personaje")
    sectionNombrarPersonaje.style.display = "none"

    let sectionEscogerPersonaje = document.getElementById("escoger-personaje")
    sectionEscogerPersonaje.style.display = "block"
    let sectionEscogerPersonajes = document.getElementById("escoger-personajes")
    sectionEscogerPersonajes.style.display = "flex"
    let btnpersonaje = document.getElementById("boton-personaje")
    btnpersonaje.style.display = "flex"
}

function escogerPersonaje () {
    let sectionNombrarPersonaje = document.getElementById("nombrar-personaje")
    sectionNombrarPersonaje.style.display = "none"
    let sectionEscogerAtaque = document.getElementById("escoger-ataque")
    sectionEscogerAtaque.style.display = "flex"
    let sectionEscogerPersonaje = document.getElementById("escoger-personaje")
    sectionEscogerPersonaje.style.display = "none"
    let sectionEscogerPersonajes = document.getElementById("escoger-personajes")
    sectionEscogerPersonajes.style.display = "none"
    let btnpersonaje = document.getElementById("boton-personaje")
    btnpersonaje.style.display = "none"

    let inputMichiGuts = document.getElementById("michiGuts")
    let inputMichiSekiro = document.getElementById("michiSekiro")
    let inputMichiGandalf = document.getElementById("michiGandalf")
    let spanEscogerPersonaje = document.getElementById("personajes")

    if (inputMichiGuts.checked) {
        spanEscogerPersonaje.innerHTML = personajes[0]
    } else if (inputMichiSekiro.checked) {
        spanEscogerPersonaje.innerHTML = personajes[1]
    } else if (inputMichiGandalf.checked) {
        spanEscogerPersonaje.innerHTML = personajes[2]
    }

    personajeEnemigo()
}

function personajeEnemigo () {
    let personajeAleatorio = aleatorio(1,3)
    let spanPersonajeEnemigo = document.getElementById("enemigo")

    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = personajes[3]
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = personajes[4]
    } else (
        spanPersonajeEnemigo.innerHTML = personajes[5]
    )
}

function ataqueEspada () {
    ataqueJugador = "Espadaso en Salto"
    ataqueEnemigoAleatorio ()
}

function ataqueMagia () {
    ataqueJugador = "Bolido Oscuro"
    ataqueEnemigoAleatorio ()
}

function ataqueContraataque () {
    ataqueJugador = "Estocada con Parry"
    ataqueEnemigoAleatorio ()
}

function ataqueEnemigoAleatorio () {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Espadaso en Salto"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Bolido Oscuro"
    } else {
        ataqueEnemigo = "Estocada con Parry"
    }

    combate()
}

function crearAlerta (resultado) {
    let sectionAlertas = document.getElementById("alertas")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = nombrePersonaje + " atacó con " + ataqueJugador + ", El enemigo atacó con " + ataqueEnemigo + ", " + resultado

    sectionAlertas.appendChild(parrafo)
}

function combate () {
    let spanCorazonesJugador = document.getElementById("corazonesJugador")
    let spanCorazonesEnemigo = document.getElementById("corazonesEnemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearAlerta("Se neutralisaron los ataques")
    } else if (ataqueJugador == "Espadaso en Salto" && ataqueEnemigo == "Bolido Oscuro") {
        crearAlerta("Acertaste el ataque")
        corazonesEnemigo--
        spanCorazonesEnemigo.innerHTML = corazonesEnemigo
    } else if (ataqueJugador == "Bolido Oscuro" && ataqueEnemigo == "Estocada con Parry") {
        crearAlerta("Acertaste el ataque")
        corazonesEnemigo--
        spanCorazonesEnemigo.innerHTML = corazonesEnemigo
    }else if  (ataqueJugador == "Estocada con Parry" && ataqueEnemigo == "Espadaso en Salto") {
        crearAlerta("Acertaste el ataque")
        corazonesEnemigo--
        spanCorazonesEnemigo.innerHTML = corazonesEnemigo
    } else {
        crearAlerta("Recibiste el ataque")
        corazonesJugador--
        spanCorazonesJugador.innerHTML = corazonesJugador
    }

    comprobarCorazones()
}

function comprobarCorazones() {
    if(corazonesEnemigo == 0){
        crearFinal("¡HAS GANADO!")
    } else if (corazonesJugador == 0){
        crearFinal("¡HAS MUERTO!")
    }
}

function crearFinal (resultadoFinal) {
    let sectionFinal = document.getElementById("section-final")
    sectionFinal.style.display = "flex"

    let sectionAlertas = document.getElementById("alertas")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionAlertas.appendChild(parrafo)

    let btnEspada = document.getElementById("boton-espada")
    btnEspada.disabled = true
    let btnMagia = document.getElementById("boton-magia")
    btnMagia.disabled = true
    let btnContraataque = document.getElementById("boton-contraataque")
    btnContraataque.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)