document.addEventListener("DOMContentLoaded", function () {   
    const btnIniciar = document.getElementById("iniciar-juego")  //Todas las variables al inicio para no repetir lineas de codigo
    const pantallaTitulo = document.getElementById("pantalla-titulo")

    const intro = document.getElementById("intro")
    const btnContinuar = document.getElementById("continuar")

    const nombrarPersonaje = document.getElementById("nombrar-personaje")

    const pantallaPersonaje = document.getElementById("escoger-personajes")
    const personajeTitulo = document.getElementById("escoger-titulo")
    const btnPersonaje = document.getElementById("boton-personaje")

    const inputMichiGuts = document.getElementById("michiGuts")
    const inputMichiSekiro = document.getElementById("michiSekiro")
    const inputMichiGandalf = document.getElementById("michiGandalf")

    const nivelUno = document.getElementById("nivel-1")
    const btnContinuarUno = document.getElementById("continuar-1")
    const combateUno = document.getElementById("combate-1") 

    const spanEscogerPersonaje = document.getElementById("personaje-gen")
    const spanCorazones = document.getElementById("corazones")

    const spanEnemigoUno = document.getElementById("enemigo-gen1")
    const spanCoraEnemigoUno = document.getElementById("corazones-enemigo1")

    const btnsAtaque = document.getElementById("botones-combate")
    const parrafoAtaque = document.getElementById("parrafo-ataque")
    const parrafoEnemigoUno = document.getElementById("parrafo-ataque-enemigo1")
    const btnConNivUno = document.getElementById("siguiente-nivel1")

    const nivelDos =  document.getElementById("nivel-2")
    const btnContinuarDos = document.getElementById("continuar-2")
    const combateDos = document.getElementById("combate-2")
    const btnConNivDos = document.getElementById("siguiente-nivel2") 

    const nivelTres =  document.getElementById("nivel-3")
    const btnContinuarTres = document.getElementById("continuar-3")
    const combateTres = document.getElementById("combate-2")
    const btnConNivTres = document.getElementById("siguiente-nivel3")

    const nivelCuatro =  document.getElementById("nivel-4")
    const btnContinuarCuatro = document.getElementById("continuar-4")
    const combateCuatro = document.getElementById("combate-final")

    const btnFinal = document.getElementById("final-juego")
    
    let nombrePersonaje
    let personajes = []
    let enemigos = []
    let inputNombre
    let btnNombre
    let personajeEscogido
    let ataquesPersonaje
    let ataques
    let btnAtaqueUno 
    let btnAtaqueDos
    let btnAtaqueTres
    let corazonesPersonaje
    let corazonesEnemigo
    let dañoPersonaje
    let dañoEnemigo
    let personajeEnemigo
    
    //constructor para generar personajes
    class Personaje {
        constructor(nombre, corazones, daño) {
            this.nombre = nombre
            this.corazones = corazones
            this.daño = daño
            this.ataques = []
        }
    }
    //constructor para enemigos aparte, porque se van a usar de manera distinta
    class Enemigo {
        constructor(nombre, corazones, daño) {
            this.nombre = nombre
            this.corazones = corazones
            this.daño = daño
            this.ataques = []
        }
    }

    let michiGuts = new Personaje("Michi Guts", 5, 2)

    let michiSekiro = new Personaje("Michi Sekiro", 6, 1)

    let michiGandalf = new Personaje("Michi Gandalf", 3, 3)

    let michiGarrasSalvajes = new Enemigo("Michi Garras Salvajes", 3, 1)

    let michiMagoOscuro = new Enemigo("Michi Mago Oscuro", 3, 2)

    let michiAlientoVenenoso = new Enemigo("Michi Aliento Venenoso", 5, 2)

    let jefeMichiColosal = new Enemigo("Jefe Michi Colosal", 5, 3)

    //Se añaden los ataques con el metodo push
    michiGuts.ataques.push(
        {nombre: "Espadaso en Salto", id: "ataque-uno"},
        {nombre: "Dardo Explosivo", id:"ataque-dos"},
        {nombre: "Espadaso Giratorio", id: "ataque-tres"},
    )

    michiSekiro.ataques.push(
        {nombre: "Danza de Aves Acuaticas", id: "ataque-uno"},
        {nombre: "Ichimonji", id:"ataque-dos"},
        {nombre: "Corte de Desenvaine", id: "ataque-tres"},
    )

    michiGandalf.ataques.push(
        {nombre: "Bolido Oscuro", id: "ataque-uno"},
        {nombre: "Lluvia de Estrellas", id:"ataque-dos"},
        {nombre: "Cometa Azul", id: "ataque-tres"},
    )

    michiGarrasSalvajes.ataques.push(
        {nombre: "Garraso Sangriento", id: "ataque-enemigo-uno"},
        {nombre: "Cuchillo Rapido", id:"ataque-enemigo-dos"},
        {nombre: "Patada Giratoria", id: "ataque-enemigo-tres"},
    )

    michiMagoOscuro.ataques.push(
        {nombre: "Vortice de Almas", id: "ataque-enemigo-uno"},
        {nombre: "Espadaso oscuro", id:"ataque-enemigo-dos"},
        {nombre: "Rayo de Muerte", id: "ataque-enemigo-tres"},
    )

    michiAlientoVenenoso.ataques.push(
        {nombre: "Mordida Putrida", id: "ataque-enemigo-uno"},
        {nombre: "Escupitajo Acido", id:"ataque-enemigo-dos"},
        {nombre: "Aliento malhechor", id: "ataque-enemigo-tres"},
    )

    jefeMichiColosal.ataques.push(
        {nombre: "Gran Pisada", id: "ataque-enemigo-uno"},
        {nombre: "Garra destructora", id:"ataque-enemigo-dos"},
        {nombre: "Colmillo Descomunal", id: "ataque-enemigo-tres"},
    )
    personajes.push(michiGuts, michiSekiro, michiGandalf)
    enemigos.push(michiGarrasSalvajes, michiMagoOscuro, michiAlientoVenenoso, jefeMichiColosal)
    
    btnIniciar.addEventListener("click", function () { //Funsión para cambiar de pantalla
        pantallaTitulo.style.display = "none"
        intro.style.display = "flex"
    })

    btnContinuar.addEventListener("click", function () {
        intro.style.display = "none"
        nombrarPersonaje.style.display = "flex"
    })
        inputNombre = document.getElementById("nombre-personaje")
        inputNombre.addEventListener("submit", (e) => {
            nombrePersonaje = inputNombre.value.text.trim() //funsión para obtener nombre del personaje haciendo submit en el input
            e.preventDefault()
        
            nombrarPersonaje.style.display = "none"
            pantallaPersonaje.style.display = "flex"
            personajeTitulo.style.display = "block"
            btnPersonaje.style.display = "flex"
    })

        btnNombre = document.getElementById("boton-nombre")
        btnNombre.addEventListener("click", (e) => {
            nombrePersonaje = btnNombre.value.trim()  //funsión para obtener nombre del personaje haciendo click en el boton
            e.preventDefault()
            
            nombrarPersonaje.style.display = "none"
            pantallaPersonaje.style.display = "flex"
            personajeTitulo.style.display = "block"
            btnPersonaje.style.display = "flex"
    })

    btnPersonaje.addEventListener("click", function() {
        pantallaPersonaje.style.display = "none"
        personajeTitulo.style.display = "none"
        btnPersonaje.style.display = "none"
        nivelUno.style.display = "flex"

        // Funsión para definir el personaje escogido
        if (inputMichiGuts.checked) {
            spanEscogerPersonaje.innerHTML = michiGuts.nombre
            personajeEscogido = michiGuts.nombre
            corazonesPersonaje = michiGuts.corazones
            spanCorazones.innerHTML = corazonesPersonaje
            dañoPersonaje = michiGuts.daño
        } else if (inputMichiSekiro.checked) {
            spanEscogerPersonaje.innerHTML = michiSekiro.nombre
            personajeEscogido = michiSekiro.nombre
            corazonesPersonaje = michiSekiro.corazones
            spanCorazones.innerHTML = corazonesPersonaje
            dañoPersonaje = michiSekiro.daño
        } else if (inputMichiGandalf.checked) {
            spanEscogerPersonaje.innerHTML = michiGandalf.nombre
            personajeEscogido = michiGandalf.nombre
            corazonesPersonaje = michiGandalf.corazones
            spanCorazones.innerHTML = corazonesPersonaje
            dañoPersonaje = michiGandalf.daño
        }

        obtenerAtaques(personajeEscogido)
    })

    btnContinuarUno.addEventListener("click", function() {
        nivelUno.style.display = "none"
        combateUno.style.display = "flex"
        corazonesEnemigo = michiGarrasSalvajes.corazones
        dañoEnemigo = michiGarrasSalvajes.daño
        spanEnemigoUno.innerHTML = michiGarrasSalvajes.nombre
        spanCoraEnemigoUno.innerHTML = corazonesEnemigo
        personajeEnemigo = michiGarrasSalvajes.nombre
    })

    function obtenerAtaques(personajeEscogido){  //Funsión para obtener los ataques del personaje seleccionado
        ataques
        for (let i = 0; i < personajes.length; i++) {
            if (personajeEscogido === personajes[i].nombre) {
                ataques = personajes[i].ataques
            }
        }
        mostrarAtaques(ataques)     //Funsión para generar botones de ataque personalizados
    }

    function mostrarAtaques () {
        ataques.forEach((ataque) => {
            ataquesPersonaje = `
            <button class="btnAtaque" id=${ataque.id}>${ataque.nombre}</button>
            `
            btnsAtaque.innerHTML += ataquesPersonaje
        })
    }

    btnAtaqueUno = document.getElementById("ataque-uno")
    btnAtaqueDos = document.getElementById("ataque-dos")
    btnAtaqueTres = document.getElementById("ataque-tres")

    btnAtaqueUno.addEventListener("click", probabilidadPersonaje())
    
    btnAtaqueDos.addEventListener("click", probabilidadPersonaje())

    btnAtaqueTres.addEventListener("click", probabilidadPersonaje())

    function crearMensajePersonaje (resultado) {
        let parrafo = document.createElement("p")
        parrafo.innerHTML = nombrePersonaje + resultado
    
        parrafoAtaque.appendChild(parrafo)
    }

    function crearMensajeEnemigo (resultado) {
        let parrafo = document.createElement("p")
        parrafo.innerHTML = personajeEnemigo + resultado
    
        parrafoAtaque.appendChild(parrafo)
    }

    function probabilidadPersonaje () {
        let ataqueAcertado = aleatorio(1,3)
            if(ataqueAcertado == 1) {
                crearMensajePersonaje(" Falló el ataque")
            } else { 
                crearMensajePersonaje( " Acertó el ataque");
                (corazonesEnemigo) - (dañoPersonaje)
            } 
                ProbabilidadEnemigo ()
        }

    function ProbabilidadEnemigo () {
        let ataqueAcertado = aleatorio(1,2)

        if (ataqueAcertado == 1) {
            crearMensajeEnemigo(" Acertó el ataque");
            (corazonesPersonaje) - (dañoEnemigo)
        } else {
            crearMensajeEnemigo(" falló el ataque")
        }
    }

    function aleatorio (min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function finCombateUno () {
        if(corazonesPersonaje <= 0) {
            parrafoAtaque.innerHTML ="HAS MUERTO"
            btnFinal.style.flex
        } else if (corazonesEnemigo <= 0) {
            parrafoAtaque.innerHTML = "HAS GANADO"
            btnConNivUno.style.flex
        }
    }
    btnConNivUno.addEventListener("click", function(){
        combateUno.style.display = "none"
        nivelDos.style.display = "flex"
    })

    btnContinuarDos.addEventListener("click", function(){
        nivelDos.style.display = "none"
        combateDos.style.display = "flex"
        corazonesEnemigo = michiMagoOscuro.corazones
        dañoEnemigo = michiMagoOscuro.daño
        spanEnemigoUno.innerHTML = michiMagoOscuro.nombre
        spanCoraEnemigoUno.innerHTML = corazonesEnemigo
    })


   // btnFinal.addEventListener("click", reiniciarJuego())

    function reiniciarJuego(){
        location.reload()
    }
})





/*function iniciarJuego () {

    let name = document.getElementById("nombre-personaje")
    name.addEventListener("click", (e) => {
        e.preventDefault()
        nombrePersonaje = name.value
    })
    let btnNombrarPersonaje = document.getElementById("boton-nombre")
    btnNombrarPersonaje.addEventListener("click", (e) => {
        e.preventDefault()
        nombrePersonaje = name.value
        nombrarPersonaje()
    })

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

function ataqueEspada () {
    ataqueJugador = ataques[0]
    ataqueEnemigoAleatorio ()
}

function ataqueMagia () {
    ataqueJugador = ataques[1]
    ataqueEnemigoAleatorio ()
}

function ataqueContraataque () {
    ataqueJugador = ataques[2]
    ataqueEnemigoAleatorio ()
}

function ataqueEnemigoAleatorio () {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = ataques[0]
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = ataques[1]
    } else {
        ataqueEnemigo = ataques[2]
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

window.addEventListener("load", iniciarJuego)*/