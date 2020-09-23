import { obtenerListaEquipos } from "./api.js"
import { crearCartasEquipos } from "./ui.js"

async function inicializar(){
    const equipos = await obtenerListaEquipos()
    crearCartasEquipos(equipos)
}




inicializar()





