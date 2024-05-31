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
    const conBtnUno = document.getElementById("cont-btn-uno")
    const btnConNivUno = document.getElementById("siguiente-nivel1")
    const contFinUno = document.getElementById("cont-fin-uno")
    const btnFinUno = document.getElementById("final-juego-uno")

    const spanEscogerPersonaje = document.getElementById("personaje-gen")
    const spanCorazones = document.getElementById("corazones")
    const spanEscogerPersonajeDos = document.getElementById("personaje-gen-dos")
    const spanCorazonesDos = document.getElementById("corazones-dos")
    const spanEscogerPersonajeTres = document.getElementById("personaje-gen-tres")
    const spanCorazonesTres = document.getElementById("corazones-tres")
    const spanEscogerPersonajeCuatro = document.getElementById("personaje-gen-cuatro")
    const spanCorazonesCuatro = document.getElementById("corazones-cuatro")

    const spanEnemigoUno = document.getElementById("enemigo-gen1")
    const spanCoraEnemigoUno = document.getElementById("corazones-enemigo1")

    const btnsAtaque = document.getElementById("botones-combate")
    const btnsAtaqueDos = document.getElementById("botones-combate-dos")
    const btnsAtaqueTres = document.getElementById("botones-combate-tres")
    const btnsAtaqueCuatro = document.getElementById("botones-combate-cuatro")
    const parrafoAtaque = document.getElementById("parrafo-ataque")
    const parrafoAtaqueDos = document.getElementById("parrafo-ataque-dos")
    const parrafoAtaqueTres = document.getElementById("parrafo-ataque-tres")
    const parrafoAtaqueCuatro = document.getElementById("parrafo-ataque-cuatro")
    const parrafoEnemigoUno = document.getElementById("parrafo-ataque-enemigo1")
    const parrafoEnemigoDos = document.getElementById("parrafo-ataque-enemigo2")
    const parrafoEnemigoTres = document.getElementById("parrafo-ataque-enemigo3")
    const parrafoEnemigoCuatro = document.getElementById("parrafo-ataque-enemigo4")

    const nivelDos =  document.getElementById("nivel-2")
    const btnContinuarDos = document.getElementById("continuar-2")
    const spanEnemigoDos = document.getElementById("enemigo-gen2")
    const spanCoraEnemigoDos = document.getElementById("corazones-enemigo2")
    const combateDos = document.getElementById("combate-2")
    const conBtnDos = document.getElementById("cont-btn-dos")
    const btnConNivDos = document.getElementById("siguiente-nivel2") 
    const contFinDos = document.getElementById("cont-fin-Dos")
    const btnFinDos = document.getElementById("final-juego-dos")

    const nivelTres =  document.getElementById("nivel-3")
    const btnContinuarTres = document.getElementById("continuar-3")
    const spanEnemigoTres = document.getElementById("enemigo-gen3")
    const spanCoraEnemigoTres = document.getElementById("corazones-enemigo3")
    const combateTres = document.getElementById("combate-3")
    const conBtnTres = document.getElementById("cont-btn-tres")
    const btnConNivTres = document.getElementById("siguiente-nivel3")
    const contFinTres = document.getElementById("cont-fin-tres")
    const btnFinTres = document.getElementById("final-juego-tres")

    const nivelCuatro =  document.getElementById("nivel-4")
    const btnContinuarCuatro = document.getElementById("continuar-4")
    const spanEnemigoCuatro = document.getElementById("enemigo-gen4")
    const spanCoraEnemigoCuatro = document.getElementById("corazones-enemigo4")
    const combateCuatro = document.getElementById("combate-final")
    const btnConNivCuatro = document.getElementById("cont-btn-cuatro")

    const btnFinal = document.getElementById("final-juego")
    
    let nombrePersonaje
    let personajes = []
    let personajesB = []
    let personajesC = []
    let personajesD = []
    let enemigos = []
    let inputNombre
    let btnNombre
    let personajeEscogido
    let corazonesPersonaje
    let personajeEscogidoDos
    let corazonesPersonajeDos
    let personajeEscogidoTres
    let corazonesPersonajeTres
    let personajeEscogidoCuatro
    let corazonesPersonajeCuatro

    let ataquesPersonaje
    let ataques
    let ataquesPersonajeB
    let ataquesB
    let ataquesPersonajeC
    let ataquesC
    let ataquesPersonajeD
    let ataquesD
    
    let btnAtaqueUno 
    let btnAtaqueDos
    let btnAtaqueTres
    let btnAtaqueUnoB 
    let btnAtaqueDosB
    let btnAtaqueTresB
    let btnAtaqueUnoC
    let btnAtaqueDosC
    let btnAtaqueTresC
    let btnAtaqueUnoD 
    let btnAtaqueDosD
    let btnAtaqueTresD

    let corazonesEnemigo
    let personajeEnemigo
    
    //constructor para generar personajes
    class Personaje {
        constructor(nombre, corazones) {
            this.nombre = nombre
            this.corazones = corazones
            this.ataques = []
        }
    }

    class PersonajeB {
        constructor(nombre, corazones) {
            this.nombre = nombre
            this.corazones = corazones
            this.ataques = []
        }
    }

    class PersonajeC {
        constructor(nombre, corazones) {
            this.nombre = nombre
            this.corazones = corazones
            this.ataques = []
        }
    }

    class PersonajeD {
        constructor(nombre, corazones) {
            this.nombre = nombre
            this.corazones = corazones
            this.ataques = []
        }
    }
    

    //constructor para enemigos aparte, porque se van a usar de manera distinta
    class Enemigo {
        constructor(nombre, corazones) {
            this.nombre = nombre
            this.corazones = corazones
            this.ataques = []
        }
    }

    let michiGuts = new Personaje("Michi Guts", 5)

    let michiGutsB = new PersonajeB("Michi Guts",5)

    let michiGutsC = new PersonajeC("Michi Guts",5)

    let michiGutsD = new PersonajeD("Michi Guts",5)

    let michiSekiro = new Personaje("Michi Sekiro", 6)

    let michiSekiroB = new PersonajeB("Michi Sekiro", 6)

    let michiSekiroC = new PersonajeC("Michi Sekiro", 6)

    let michiSekiroD = new PersonajeD("Michi Sekiro", 6)

    let michiGandalf = new Personaje("Michi Gandalf", 3)

    let michiGandalfB = new PersonajeB("Michi Gandalf", 3)

    let michiGandalfC = new PersonajeC("Michi Gandalf", 3)

    let michiGandalfD = new PersonajeD("Michi Gandalf", 3)

    let michiGarrasSalvajes = new Enemigo("Michi Garras Salvajes", 3)

    let michiMagoOscuro = new Enemigo("Michi Mago Oscuro", 3)

    let michiAlientoVenenoso = new Enemigo("Michi Aliento Venenoso", 5)

    let jefeMichiColosal = new Enemigo("Jefe Michi Colosal", 5)

    //Se añaden los ataques con el metodo push
    michiGuts.ataques.push(
        {nombre: "Espadaso en Salto", id: "ataque-uno"},
        {nombre: "Dardo Explosivo", id:"ataque-dos"},
        {nombre: "Espadaso Giratorio", id: "ataque-tres"},
    )

    michiGutsB.ataques.push(
        {nombre: "Espadaso en Salto", id: "ataque-uno-b"},
        {nombre: "Dardo Explosivo", id:"ataque-dos-b"},
        {nombre: "Espadaso Giratorio", id: "ataque-tres-b"},
    )

    michiGutsC.ataques.push(
        {nombre: "Espadaso en Salto", id: "ataque-uno-c"},
        {nombre: "Dardo Explosivo", id:"ataque-dos-c"},
        {nombre: "Espadaso Giratorio", id: "ataque-tres-c"},
    )

    michiGutsD.ataques.push(
        {nombre: "Espadaso en Salto", id: "ataque-uno-d"},
        {nombre: "Dardo Explosivo", id:"ataque-dos-d"},
        {nombre: "Espadaso Giratorio", id: "ataque-tres-d"},
    )

    michiSekiro.ataques.push(
        {nombre: "Danza de Aves Acuaticas", id: "ataque-uno"},
        {nombre: "Ichimonji", id:"ataque-dos"},
        {nombre: "Corte de Desenvaine", id: "ataque-tres"},
    )

    michiSekiroB.ataques.push(
        {nombre: "Danza de Aves Acuaticas", id: "ataque-uno-b"},
        {nombre: "Ichimonji", id:"ataque-dos-b"},
        {nombre: "Corte de Desenvaine", id: "ataque-tres-b"},
    )

    michiSekiroC.ataques.push(
        {nombre: "Danza de Aves Acuaticas", id: "ataque-uno-c"},
        {nombre: "Ichimonji", id:"ataque-dos-c"},
        {nombre: "Corte de Desenvaine", id: "ataque-tres-c"},
    )

    michiSekiroD.ataques.push(
        {nombre: "Danza de Aves Acuaticas", id: "ataque-uno-d"},
        {nombre: "Ichimonji", id:"ataque-dos-d"},
        {nombre: "Corte de Desenvaine", id: "ataque-tres-d"},
    )

    michiGandalf.ataques.push(
        {nombre: "Bolido Oscuro", id: "ataque-uno"},
        {nombre: "Lluvia de Estrellas", id:"ataque-dos"},
        {nombre: "Cometa Azul", id: "ataque-tres"},
    )

    michiGandalfB.ataques.push(
        {nombre: "Bolido Oscuro", id: "ataque-uno-b"},
        {nombre: "Lluvia de Estrellas", id:"ataque-dos-b"},
        {nombre: "Cometa Azul", id: "ataque-tres-b"},
    )

    michiGandalfC.ataques.push(
        {nombre: "Bolido Oscuro", id: "ataque-uno-c"},
        {nombre: "Lluvia de Estrellas", id:"ataque-dos-c"},
        {nombre: "Cometa Azul", id: "ataque-tres-c"},
    )

    michiGandalfD.ataques.push(
        {nombre: "Bolido Oscuro", id: "ataque-uno-d"},
        {nombre: "Lluvia de Estrellas", id:"ataque-dos-d"},
        {nombre: "Cometa Azul", id: "ataque-tres-d"},
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
    personajesB.push(michiGutsB, michiSekiroB, michiGandalfB)
    personajesC.push(michiGutsC, michiSekiroC, michiGandalfC)
    personajesD.push(michiGutsD, michiSekiroD, michiGandalfD)
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
            nombrePersonaje = inputNombre.value.text //funsión para obtener nombre del personaje haciendo submit en el input
            e.preventDefault()
        
            nombrarPersonaje.style.display = "none"
            pantallaPersonaje.style.display = "flex"
            personajeTitulo.style.display = "block"
            btnPersonaje.style.display = "flex"
    })

        btnNombre = document.getElementById("boton-nombre")
        btnNombre.addEventListener("click", (e) => {
            nombrePersonaje = btnNombre.value.text  //funsión para obtener nombre del personaje haciendo click en el boton
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

        escogerPersonaje ()
        escogerPersonajeDos()
        escogerPersonajeTres()
        escogerPersonajeCuatro()
    })

    function escogerPersonaje () {
        // Funsión para definir el personaje escogido
        if (inputMichiGuts.checked) {
            personajeEscogido = michiGuts.nombre
            spanEscogerPersonaje.innerHTML = michiGuts.nombre
            corazonesPersonaje = michiGuts.corazones
            spanCorazones.innerHTML = corazonesPersonaje

        } else if (inputMichiSekiro.checked) {
            personajeEscogido = michiSekiro.nombre
            spanEscogerPersonaje.innerHTML = michiSekiro.nombre
            corazonesPersonaje = michiSekiro.corazones
            spanCorazones.innerHTML = corazonesPersonaje

        } else if (inputMichiGandalf.checked) {
            personajeEscogido = michiGandalf.nombre
            spanEscogerPersonaje.innerHTML = michiGandalf.nombre
            corazonesPersonaje = michiGandalf.corazones
            spanCorazones.innerHTML = corazonesPersonaje
        }
        obtenerAtaques(personajeEscogido)
    }

        function escogerPersonajeDos () {
            // Funsión para definir el personaje escogido
            if (inputMichiGuts.checked) {
                personajeEscogidoDos = michiGutsB.nombre
                corazonesPersonajeDos= michiGutsB.corazones
                spanEscogerPersonajeDos.innerHTML = michiGutsB.nombre
                spanCorazonesDos.innerHTML = corazonesPersonaje
    
            } else if (inputMichiSekiro.checked) {
                personajeEscogidoDos = michiSekiroB.nombre
                corazonesPersonajeDos = michiSekiroB.corazones
                spanEscogerPersonajeDos.innerHTML = michiSekiroB.nombre
                spanCorazonesDos.innerHTML = corazonesPersonaje
    
            } else if (inputMichiGandalf.checked) {
                personajeEscogidoDos = michiGandalfB.nombre
                corazonesPersonajeDos = michiGandalfB.corazones
                spanEscogerPersonajeDos.innerHTML = michiGandalfB.nombre
                spanCorazonesDos.innerHTML = corazonesPersonaje
            }

        obtenerAtaquesB(personajeEscogidoDos)
    }

    function escogerPersonajeTres () {
        // Funsión para definir el personaje escogido
        if (inputMichiGuts.checked) {
            personajeEscogidoTres = michiGutsC.nombre
            corazonesPersonajeTres= michiGutsC.corazones
            spanEscogerPersonajeTres.innerHTML = michiGutsC.nombre
            spanCorazonesTres.innerHTML = corazonesPersonaje

        } else if (inputMichiSekiro.checked) {
            personajeEscogidoTres = michiSekiroC.nombre
            corazonesPersonajeTres = michiSekiroC.corazones
            spanEscogerPersonajeTres.innerHTML = michiSekiroC.nombre
            spanCorazonesTres.innerHTML = corazonesPersonaje

        } else if (inputMichiGandalf.checked) {
            personajeEscogidoTres = michiGandalfC.nombre
            corazonesPersonajeTres = michiGandalfC.corazones
            spanEscogerPersonajeTres.innerHTML = michiGandalfC.nombre
            spanCorazonesTres.innerHTML = corazonesPersonaje
        }

        obtenerAtaquesC(personajeEscogidoTres)
    }

    function escogerPersonajeCuatro () {
        // Funsión para definir el personaje escogido
        if (inputMichiGuts.checked) {
            personajeEscogidoCuatro = michiGutsD.nombre
            corazonesPersonajeCuatro= michiGutsD.corazones
            spanEscogerPersonajeCuatro.innerHTML = michiGutsD.nombre
            spanCorazonesCuatro.innerHTML = corazonesPersonaje

        } else if (inputMichiSekiro.checked) {
            personajeEscogidoCuatro = michiSekiroD.nombre
            corazonesPersonajeCuatro = michiSekiroD.corazones
            spanEscogerPersonajeCuatro.innerHTML = michiSekiroD.nombre
            spanCorazonesCuatro.innerHTML = corazonesPersonaje

        } else if (inputMichiGandalf.checked) {
            personajeEscogidoCuatro = michiGandalfD.nombre
            corazonesPersonajeCuatro = michiGandalfD.corazones
            spanEscogerPersonajeCuatro.innerHTML = michiGandalfD.nombre
            spanCorazonesCuatro.innerHTML = corazonesPersonaje
        }

        obtenerAtaquesD(personajeEscogidoCuatro)
    }

    function obtenerAtaques(personajeEscogido){  //Funsión para obtener los ataques del personaje seleccionado
        ataques
        for (let i = 0; i < personajes.length; i++) {
            if (personajeEscogido === personajes[i].nombre) {
                ataques = personajes[i].ataques
            }
        }
        mostrarAtaques(ataques)     //Funsión para generar botones de ataque personalizados, para cada pantalla de combate
    }

    function mostrarAtaques () {
        ataques.forEach((ataque) => {
            ataquesPersonaje = `
            <button class="btnAtaque" id=${ataque.id}>${ataque.nombre}</button>
            `
            btnsAtaque.innerHTML += ataquesPersonaje
        })

        btnAtaqueUno = document.getElementById("ataque-uno")
        btnAtaqueDos = document.getElementById("ataque-dos")
        btnAtaqueTres = document.getElementById("ataque-tres")
    
        btnAtaqueUno.addEventListener("click", probabilidadPersonaje)
    
        btnAtaqueDos.addEventListener("click", probabilidadPersonaje)
    
        btnAtaqueTres.addEventListener("click", probabilidadPersonaje)
    }

    function obtenerAtaquesB(personajeEscogidoDos){  
        ataquesB
        for (let i = 0; i < personajesB.length; i++) {
            if (personajeEscogidoDos === personajesB[i].nombre) {
                ataquesB = personajesB[i].ataques
            }
        }
        mostrarAtaquesDos(ataquesB)  
    }

    function mostrarAtaquesDos () {
        ataquesB.forEach((ataque) => {
            ataquesPersonajeB = `
            <button class="btnAtaque" id=${ataque.id}>${ataque.nombre}</button>
            `
            btnsAtaqueDos.innerHTML += ataquesPersonajeB
        })

        btnAtaqueUnoB = document.getElementById("ataque-uno-b")
        btnAtaqueDosB = document.getElementById("ataque-dos-b")
        btnAtaqueTresB = document.getElementById("ataque-tres-b")
    
        btnAtaqueUnoB.addEventListener("click", probabilidadPersonajeB)
    
        btnAtaqueDosB.addEventListener("click", probabilidadPersonajeB)
    
        btnAtaqueTresB.addEventListener("click", probabilidadPersonajeB)
    }

    function obtenerAtaquesC(personajeEscogidoTres){  
        ataquesC
        for (let i = 0; i < personajesC.length; i++) {
            if (personajeEscogidoTres === personajesC[i].nombre) {
                ataquesC = personajesC[i].ataques
            }
        }
        mostrarAtaquesTres(ataquesC)  
    }

    function mostrarAtaquesTres () {
        ataquesC.forEach((ataque) => {
            ataquesPersonajeC = `
            <button class="btnAtaque" id=${ataque.id}>${ataque.nombre}</button>
            `
            btnsAtaqueTres.innerHTML += ataquesPersonajeC
        })

        btnAtaqueUnoC = document.getElementById("ataque-uno-c")
        btnAtaqueDosC = document.getElementById("ataque-dos-c")
        btnAtaqueTresC = document.getElementById("ataque-tres-c")
    
        btnAtaqueUnoC.addEventListener("click", probabilidadPersonajeC)
    
        btnAtaqueDosC.addEventListener("click", probabilidadPersonajeC)
    
        btnAtaqueTresC.addEventListener("click", probabilidadPersonajeC)
    }

    function obtenerAtaquesD(personajeEscogidoCuatro){  
        ataquesD
        for (let i = 0; i < personajesD.length; i++) {
            if (personajeEscogidoCuatro === personajesD[i].nombre) {
                ataquesD = personajesD[i].ataques
            }
        }
        mostrarAtaquesCuatro(ataquesD) 
    }

    function mostrarAtaquesCuatro () {
        ataquesD.forEach((ataque) => {
            ataquesPersonajeD = `
            <button class="btnAtaque" id=${ataque.id}>${ataque.nombre}</button>
            `
            btnsAtaqueCuatro.innerHTML += ataquesPersonajeD
        })

        btnAtaqueUnoD = document.getElementById("ataque-uno-d")
        btnAtaqueDosD = document.getElementById("ataque-dos-d")
        btnAtaqueTresD = document.getElementById("ataque-tres-d")
    
        btnAtaqueUnoD.addEventListener("click", probabilidadPersonajeD)
    
        btnAtaqueDosD.addEventListener("click", probabilidadPersonajeD)
    
        btnAtaqueTresD.addEventListener("click", probabilidadPersonajeD)
    }

    btnContinuarUno.addEventListener("click", function() {
        nivelUno.style.display = "none"
        combateUno.style.display = "flex"
        personajeEnemigo = michiGarrasSalvajes.nombre
        corazonesEnemigo = michiGarrasSalvajes.corazones
        spanEnemigoUno.innerHTML = personajeEnemigo
        spanCoraEnemigoUno.innerHTML = corazonesEnemigo
    })

    function crearMensajePersonaje (resultado) {
        parrafoAtaque.innerHTML = nombrePersonaje + resultado
    }

    
    function crearMensajePersonajeB (resultado) {
        parrafoAtaqueDos.innerHTML = nombrePersonaje + resultado
    }

    
    function crearMensajePersonajeC (resultado) {
        parrafoAtaqueTres.innerHTML = nombrePersonaje + resultado
    }

    
    function crearMensajePersonajeD (resultado) {
        parrafoAtaqueCuatro.innerHTML = nombrePersonaje + resultado
    }

    function crearMensajeEnemigo (resultado) {
        parrafoEnemigoUno.innerHTML = personajeEnemigo + resultado
    }

    function crearMensajeEnemigoB (resultado) {
        parrafoEnemigoDos.innerHTML = personajeEnemigo + resultado
    }

    function crearMensajeEnemigoC (resultado) {
        parrafoEnemigoTres.innerHTML = personajeEnemigo + resultado
    }

    function crearMensajeEnemigoD (resultado) {
        parrafoEnemigoCuatro.innerHTML = personajeEnemigo + resultado
    }


    function probabilidadPersonaje () {
        let ataqueAcertado = aleatorio(1,3)
            if(ataqueAcertado === 1) {
                crearMensajePersonaje(" Falló el ataque")
            } else { 
                crearMensajePersonaje( " Acertó el ataque")
                corazonesEnemigo--
                spanCoraEnemigoUno.innerHTML = corazonesEnemigo
            } 
                ProbabilidadEnemigo ()
        }

        function probabilidadPersonajeB () {
            let ataqueAcertado = aleatorio(1,3)
                if(ataqueAcertado === 1) {
                    crearMensajePersonajeB(" Falló el ataque")
                } else { 
                    crearMensajePersonajeB( " Acertó el ataque")
                    corazonesEnemigo--
                    spanCoraEnemigoDos.innerHTML = corazonesEnemigo
                } 
                    ProbabilidadEnemigoB ()
            }

            function probabilidadPersonajeC () {
                let ataqueAcertado = aleatorio(1,3)
                    if(ataqueAcertado === 1) {
                        crearMensajePersonajeC(" Falló el ataque")
                    } else { 
                        crearMensajePersonajeC( " Acertó el ataque")
                        corazonesEnemigo--
                        spanCoraEnemigoTres.innerHTML = corazonesEnemigo
                    } 
                        ProbabilidadEnemigoC ()
                }

                function probabilidadPersonajeD () {
                    let ataqueAcertado = aleatorio(1,3)
                        if(ataqueAcertado === 1) {
                            crearMensajePersonajeD(" Falló el ataque")
                        } else { 
                            crearMensajePersonajeD( " Acertó el ataque")
                            corazonesEnemigo--
                            spanCoraEnemigoCuatro.innerHTML = corazonesEnemigo
                        } 
                            ProbabilidadEnemigoD ()
                    }

    function ProbabilidadEnemigo () {
        let ataqueAcertado = aleatorio(1,2)

        if (ataqueAcertado === 1) {
            crearMensajeEnemigo(" Acertó el ataque")
            corazonesPersonaje--
            spanCorazones.innerHTML = corazonesPersonaje
        } else {
            crearMensajeEnemigo(" falló el ataque")
        }
        comprobarCorazonesUno()
    }

    function ProbabilidadEnemigoB () {
        let ataqueAcertado = aleatorio(1,3)

        if (ataqueAcertado === 1) {
            crearMensajeEnemigoB(" falló el ataque")
        } else {
            crearMensajeEnemigoB(" Acertó el ataque")
            corazonesPersonajeDos--
            spanCorazonesDos.innerHTML = corazonesPersonaje
        }
        comprobarCorazonesDos()
    }

    function ProbabilidadEnemigoC () {
        let ataqueAcertado = aleatorio(1,5)

        if (ataqueAcertado === 1) {
            crearMensajeEnemigoC(" falló el ataque")
        } else {
            crearMensajeEnemigoC(" Acertó el ataque")
            corazonesPersonajeTres--
            spanCorazonesTres.innerHTML = corazonesPersonaje
        }
        comprobarCorazonesTres()
    }

    function ProbabilidadEnemigoD () {
        let ataqueAcertado = aleatorio(1,7)

        if (ataqueAcertado === 1) {
            crearMensajeEnemigoD(" falló el ataque")
            
        } else {
            crearMensajeEnemigoD(" Acertó el ataque")
            corazonesPersonajeCuatro--
            spanCorazonesCuatro.innerHTML = corazonesPersonaje
        }
        comprobarCorazonesCuatro()
    }

    function aleatorio (min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function comprobarCorazonesUno() {
        if(corazonesEnemigo == 0){
            crearFinal("¡HAS GANADO!")
            abilitarBtnContinuarUno ()
        } else if (corazonesPersonaje == 0){
            crearFinal("¡HAS MUERTO!")
            abilitarBtnFinalUno ()
        }
    }

    function comprobarCorazonesDos() {
        if(corazonesEnemigo == 0){
            crearFinalB("¡HAS GANADO!")
            abilitarBtnContinuarDos ()
        } else if (corazonesPersonajeDos == 0){
            crearFinalB("¡HAS MUERTO!")
            abilitarBtnFinalDos ()
        }
    }

    function comprobarCorazonesTres() {
        if(corazonesEnemigo == 0){
            crearFinalC("¡HAS GANADO!")
            abilitarBtnContinuarTres ()
        } else if (corazonesPersonajeTres == 0){
            crearFinalC("¡HAS MUERTO!")
            abilitarBtnFinalTres ()
        }
    }

    function comprobarCorazonesCuatro() {
        if(corazonesEnemigo == 0){
            crearFinalD("¡HAS GANADO!")
            abilitarBtnContinuarCuatro ()
        } else if (corazonesPersonajeCuatro == 0){
            crearFinalD("¡HAS MUERTO!")
            abilitarBtnContinuarCuatro ()
        }
    }

    function abilitarBtnContinuarUno () {
        conBtnUno.style.display = "flex"
    }

    function abilitarBtnContinuarDos () {
        conBtnDos.style.display = "flex"
    }

    function abilitarBtnContinuarTres () {
        conBtnTres.style.display = "flex"
    }

    function abilitarBtnContinuarCuatro () {
        btnConNivCuatro.style.display = "flex"
    }

    function abilitarBtnFinalUno() {
        contFinUno.style.display = "flex"
    }

    function abilitarBtnFinalDos() {
        contFinDos.style.display = "flex"
    }

    function abilitarBtnFinalTres() {
        contFinTres.style.display = "flex"
    }


    function crearFinal (resultadoFinal) {
        parrafoAtaque.innerHTML = resultadoFinal

            btnAtaqueUno.disable = true
            btnAtaqueDos.disable = true
            btnAtaqueTres.disable = true
    }

    function crearFinalB (resultadoFinal) {
        parrafoAtaqueDos.innerHTML = resultadoFinal

            btnAtaqueUnoB.disable = true
            btnAtaqueDosB.disable = true
            btnAtaqueTresB.disable = true
    }

    function crearFinalC (resultadoFinal) {
        parrafoAtaqueTres.innerHTML = resultadoFinal

            btnAtaqueUnoC.disable = true
            btnAtaqueDosC.disable = true
            btnAtaqueTresC.disable = true
    }

    function crearFinalD (resultadoFinal) {
        parrafoAtaqueCuatro.innerHTML = resultadoFinal

            btnAtaqueUnoD.disable = true
            btnAtaqueDosD.disable = true
            btnAtaqueTresD.disable = true
    }


    btnConNivUno.addEventListener("click", function(){
        combateUno.style.display = "none"
        nivelDos.style.display = "flex"
    })

    btnContinuarDos.addEventListener("click", function(){
        nivelDos.style.display = "none"
        combateDos.style.display = "flex"
        personajeEnemigo = michiMagoOscuro.nombre
        corazonesEnemigo = michiMagoOscuro.corazones
        spanEnemigoDos.innerHTML = personajeEnemigo
        spanCoraEnemigoDos.innerHTML = corazonesEnemigo
    })

    btnConNivDos.addEventListener("click", function(){
        combateDos.style.display = "none"
        nivelTres.style.display = "flex"
    })

    btnContinuarTres.addEventListener("click", function(){
        nivelTres.style.display = "none"
        combateTres.style.display = "flex"
        personajeEnemigo = michiAlientoVenenoso.nombre
        corazonesEnemigo = michiAlientoVenenoso.corazones
        spanEnemigoTres.innerHTML = personajeEnemigo
        spanCoraEnemigoTres.innerHTML = corazonesEnemigo
    })

    btnConNivTres.addEventListener("click", function(){
        combateTres.style.display = "none"
        nivelCuatro.style.display = "flex"
    })

    btnContinuarCuatro.addEventListener("click", function(){
        nivelCuatro.style.display = "none"
        combateCuatro.style.display = "flex"
        personajeEnemigo = jefeMichiColosal.nombre
        corazonesEnemigo = jefeMichiColosal.corazones
        spanEnemigoCuatro.innerHTML = personajeEnemigo
        spanCoraEnemigoCuatro.innerHTML = corazonesEnemigo
    })

    btnFinUno.addEventListener("click", reiniciarJuego)
    btnFinDos.addEventListener("click", reiniciarJuego)
    btnFinTres.addEventListener("click", reiniciarJuego)
    btnFinal.addEventListener("click", reiniciarJuego)

    function reiniciarJuego() {
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