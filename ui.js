import { obtenerInfoEquipo } from "./api.js"

export function crearCartasEquipos(equipos){
    const container = document.querySelector("#container")
    equipos.forEach( equipo => {
        
        const $carta = document.createElement("div")
        $carta.className = "card carta"

        const $fotoEscudo = document.createElement("img")
        $fotoEscudo.src = equipo.fotoEscudo
        $fotoEscudo.className = "card-img-top escudoCarta"
        $carta.append($fotoEscudo)
        
        const $cartaBody = document.createElement("div")
        $carta.append($cartaBody)
        $cartaBody.className = "card-body"

        const nombreEquipo = document.createElement("h5")
        nombreEquipo.textContent = equipo.nombre
        nombreEquipo.className = "card-title"
        $cartaBody.append(nombreEquipo)

        const $verEquipo = document.createElement("a")
        $verEquipo.className = "btn btn-primary"
        $verEquipo.textContent = "Ver"
        $cartaBody.append($verEquipo)

        const $editarEquipo = document.createElement("a")
        $editarEquipo.className = "btn btn-warning"
        $editarEquipo.textContent = "Editar"
        $cartaBody.append($editarEquipo)

        const $borrarEquipo = document.createElement("a")
        $borrarEquipo.className = "btn btn-danger"
        $borrarEquipo.textContent = "Borrar"
        $cartaBody.append($borrarEquipo)

        container.append($carta)
    })
}