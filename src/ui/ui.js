import { borrarEquipo } from "../api/api.js"

export function crearCartasEquipos(
    equipos,
    callbackParaVerEquipo,
    callbackParaEditarEquipo, 
    callbackParaEliminarEquipo, 
    callbackParaObtenerInformacion
    ){
    const container = document.querySelector("#container")
    equipos.forEach( equipo => {
        const { nombre, fotoEscudo, numeroId } = equipo

        const $carta = document.createElement("div")
        $carta.className = "card carta"

        const $fotoEscudo = document.createElement("img")
        $fotoEscudo.src = fotoEscudo
        $fotoEscudo.className = "card-img-top escudoCarta"
        $carta.append($fotoEscudo)
        
        const $cartaBody = document.createElement("div")
        $carta.append($cartaBody)
        $cartaBody.className = "card-body"

        const nombreEquipo = document.createElement("h5")
        nombreEquipo.textContent = nombre
        nombreEquipo.className = "card-title"
        $cartaBody.append(nombreEquipo)

        const $verEquipo = document.createElement("a")

        $verEquipo.className = "btn btn-primary button"
        $verEquipo.textContent = "Ver"
        $verEquipo.setAttribute("data-target", "#modal-informacion")
        $verEquipo.setAttribute("data-toggle", "modal")
        $verEquipo.addEventListener( "click", async () => {
            callbackParaVerEquipo(await callbackParaObtenerInformacion(numeroId, "ver")) // obtenerInfoEquipo
        })
        $cartaBody.append($verEquipo)

        const $editarEquipo = document.createElement("a")
        $editarEquipo.className = "btn btn-warning button"
        $editarEquipo.textContent = "Editar"
        $editarEquipo.setAttribute("data-target", "#modal-editar-equipo")
        $editarEquipo.setAttribute("data-toggle", "modal")
        $editarEquipo.addEventListener( "click", async (e) => {
            callbackParaEditarEquipo(await callbackParaObtenerInformacion(numeroId, "editar"))
        })                                 // obtenerInfoEquipo
        $cartaBody.append($editarEquipo)


        const $borrarEquipo = document.createElement("a")
        $borrarEquipo.className = "btn btn-danger button"
        $borrarEquipo.textContent = "Borrar"
        $borrarEquipo.addEventListener( "click", () => {
            callbackParaEliminarEquipo(numeroId)
        })
        $cartaBody.append($borrarEquipo)

        container.append($carta)
    })
}

export function manejarEdicionDeEquipo(callbackParaEnviarData){

    const $formEditarEquipo = document.querySelector("#form-editar-equipo")

    $formEditarEquipo.addEventListener( "submit", (e) => {

    e.preventDefault()

    const id = document.querySelector("#numeroId-editar").value

    var formElement = document.getElementById("form-editar-equipo")
    var fileInput = document.querySelector("#imagen-editar");
    var formData = new FormData(formElement)
    
    var file = fileInput.files[0];
    if(file){
        const foto = URL.createObjectURL(file)
        formData.append('escudo', foto);
    }
    

    callbackParaEnviarData(id , formData)

    window.location.href = "/"

    })
}   
export function manejarAgregadoEquipo(callbackParaAgregarEquipo){

    const $formAgregarEquipo = document.querySelector("#form-agregar-equipo")

    $formAgregarEquipo.addEventListener( "submit", (e) => {

    e.preventDefault()

    var formElement = document.getElementById("form-agregar-equipo")
    var fileInput = document.querySelector("#imagen-agregar")
    var formData = new FormData(formElement)

    var file = fileInput.files[0]
    const foto = URL.createObjectURL(file)
    formData.append('escudo', foto)

    callbackParaAgregarEquipo(formData)

    window.location.href = "/"
    })
}

export function mostrarEditarEquipo(equipo){
    document.querySelector("#nombre-editar").value = equipo.nombre
    document.querySelector("#tla-editar").value = equipo.abreviatura
    document.querySelector("#anoFundacion-editar").value = equipo.anoFundacion
    document.querySelector("#direccion-editar").value = equipo.direccion
    document.querySelector("#estadio-editar").value = equipo.estadio
    document.querySelector("#numeroId-editar").value = equipo.numeroId
    document.querySelector("#pais-editar").value = equipo.pais
    document.querySelector("#telefono-editar").value = equipo.telefono
    document.querySelector("#website-editar").value = equipo.website
}   

export function mostrarInformacionEquipo(equipo){
    document.querySelector("#nombre-ver").textContent = equipo.nombre
    document.querySelector("#escudo-ver").src = equipo.fotoEscudo
    document.querySelector("#tla-ver").textContent = equipo.abreviatura
    document.querySelector("#fundacion-ver").textContent = equipo.anoFundacion
    document.querySelector("#direccion-ver").textContent = equipo.direccion
    document.querySelector("#estadio-ver").textContent = equipo.estadio
    document.querySelector("#id-ver").textContent = equipo.numeroId
    document.querySelector("#pais-ver").textContent = equipo.pais
    document.querySelector("#telefono-ver").textContent = equipo.telefono
    document.querySelector("#website-ver").textContent = equipo.website
}   

export function borrarEquipoDeLista(id){
    borrarEquipo(id)
    window.location.href = "/"
}
