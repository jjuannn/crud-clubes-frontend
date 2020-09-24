import { obtenerInfoEquipo } from "./manager.js"
import { borrarEquipo } from "./api.js"


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
        $verEquipo.setAttribute("data-target", "#label-informacion")
        $verEquipo.setAttribute("data-toggle", "modal")
        $verEquipo.addEventListener( "click", async () => {
            mostrarInformacionEquipo(await obtenerInfoEquipo(numeroId))
        })
        $cartaBody.append($verEquipo)

        const $editarEquipo = document.createElement("a")
        $editarEquipo.className = "btn btn-warning button"
        $editarEquipo.textContent = "Editar"
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
function mostrarInformacionEquipo(equipo){
    document.querySelector("#nombre").textContent = equipo.nombre
    document.querySelector("#escudo").src = equipo.fotoEscudo
    document.querySelector("#tla").textContent = equipo.abreviatura
    document.querySelector("#fundacion").textContent = equipo.anoFundacion
    document.querySelector("#direccion").textContent = equipo.direccion
    document.querySelector("#estadio").textContent = equipo.estadio
    document.querySelector("#id").textContent = equipo.numeroId
    document.querySelector("#pais").textContent = equipo.pais
    document.querySelector("#telefono").textContent = equipo.telefono
    document.querySelector("#website").textContent = equipo.website
}   


// document.location.reload(true)

function borrarEquipoDeLista(id){
    borrarEquipo(id)
    document.location.reload(true)
}