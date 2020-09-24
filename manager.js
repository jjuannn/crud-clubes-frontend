import { buscarInfoEquipo } from "./api.js"
import { mapearEquipo } from "./mapper.js"

export async function obtenerInfoEquipo(id){
    const response = await buscarInfoEquipo(id)
    const equipo = mapearEquipo(response)
    
    return equipo
}