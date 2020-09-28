import { buscarListaEquipos } from "./api/api.js"
import { crearCartasEquipos } from "./ui/ui.js"

async function inicializar(){
    const equipos = await buscarListaEquipos()
    crearCartasEquipos(equipos)
}

inicializar()





