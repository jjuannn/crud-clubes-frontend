import { obtenerInfoEquipo } from "../teamManager/manager.js"
import { borrarEquipo, enviarEdicionDeEquipo, enviarAgregarEquipo } from "../api/api.js"

export function crearCartasEquipos(equipos){
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
            mostrarInformacionEquipo(await obtenerInfoEquipo(numeroId, "ver"))
        })
        $cartaBody.append($verEquipo)

        const $editarEquipo = document.createElement("a")
        $editarEquipo.className = "btn btn-warning button"
        $editarEquipo.textContent = "Editar"
        $editarEquipo.setAttribute("data-target", "#modal-editar-equipo")
        $editarEquipo.setAttribute("data-toggle", "modal")
        $editarEquipo.addEventListener( "click", async (e) => {
            mostrarEditarEquipo(await obtenerInfoEquipo(numeroId, "editar"))
        })
        $cartaBody.append($editarEquipo)


        const $borrarEquipo = document.createElement("a")
        $borrarEquipo.className = "btn btn-danger button"
        $borrarEquipo.textContent = "Borrar"
        $borrarEquipo.addEventListener( "click", async () => {
            borrarEquipoDeLista(numeroId)
        })
        $cartaBody.append($borrarEquipo)

        container.append($carta)
    })
}

const $formEditarEquipo = document.querySelector("#form-editar-equipo")

$formEditarEquipo.addEventListener( "submit", (e) => {
    const id = document.querySelector("#numeroId-editar").value

    var formElement = document.getElementById("form-editar-equipo")
    var fileInput = document.querySelector("#imagen-editar");
    var formData = new FormData(formElement)
    
    var file = fileInput.files[0];
    const foto = URL.createObjectURL(file)
    formData.append('escudo', foto);

    enviarEdicionDeEquipo(id , formData)
})

const $formAgregarEquipo = document.querySelector("#form-agregar-equipo")

$formAgregarEquipo.addEventListener( "submit", (e) => {

    var formElement = document.getElementById("form-agregar-equipo")
    var fileInput = document.querySelector("#imagen-agregar")
    var formData = new FormData(formElement)

    var file = fileInput.files[0]
    const foto = URL.createObjectURL(file)
    formData.append('escudo', foto)

    enviarAgregarEquipo(formData)
})




function mostrarEditarEquipo(equipo){
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

function obtenerValoresDeForm(){
    const nombre = document.querySelector("[name='nombre']").value
    const abreviatura = document.querySelector("[name='abreviatura']").value
    const estadio = document.querySelector("[name='estadio']").value
    const direccion = document.querySelector("[name='direccion']").value
    const anoFundacion = document.querySelector("[name='anoFundacion']").value
    const numeroId = document.querySelector("[name='numeroId']").value
    const telefono = document.querySelector("[name='telefono']").value
    const website = document.querySelector("[name='website']").value
    const pais = document.querySelector("[name='pais']").value
    const escudo = document.querySelector("[name='escudo']").value
    
    return {
        nombre, abreviatura, estadio, direccion, anoFundacion, numeroId, telefono, website, pais, escudo
    }
}

function mostrarInformacionEquipo(equipo){
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

function borrarEquipoDeLista(id){
    borrarEquipo(id)
    document.location.reload(true)
}