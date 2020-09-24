import { buscarListaEquipos } from "./api.js"
import { crearCartasEquipos } from "./ui.js"

async function inicializar(){
    const equipos = await buscarListaEquipos()
    crearCartasEquipos(equipos)
}

inicializar()





