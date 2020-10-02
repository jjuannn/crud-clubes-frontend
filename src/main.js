import { buscarListaEquipos, enviarEdicionDeEquipo, enviarAgregarEquipo } from "./api/api.js"
import { obtenerInfoEquipo } from "./teamManager/manager.js"
import { 
    crearCartasEquipos, 
    mostrarInformacionEquipo, 
    mostrarEditarEquipo, 
    borrarEquipoDeLista, 
    manejarEdicionDeEquipo ,
    manejarAgregadoEquipo
} from "./ui/ui.js"


async function inicializar(){
    const equipos = await buscarListaEquipos()
    crearCartasEquipos(equipos, mostrarInformacionEquipo, mostrarEditarEquipo, borrarEquipoDeLista, obtenerInfoEquipo)
}


const $botonEnviarCambios = document.querySelector("#enviar-cambios")

$botonEnviarCambios.onclick = () => {
    manejarEdicionDeEquipo(enviarEdicionDeEquipo)
}


const $botonAgregarEquipo = document.querySelector("#boton-agregar-equipo")

$botonAgregarEquipo.onclick = () => {
    manejarAgregadoEquipo(enviarAgregarEquipo)
}



inicializar()





