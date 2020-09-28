import { buscarInfoEquipo } from "../api/api.js"
import { mapearEquipo } from "./mapper.js"

export async function obtenerInfoEquipo(id, action){
    const response = await buscarInfoEquipo(id, action)
    const equipo = mapearEquipo(response)
    
    return equipo
}