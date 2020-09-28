const BASE_URL = "http://localhost:3030/"

export function buscarListaEquipos(){
    return fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON
    })
}

export function buscarInfoEquipo(numeroId, action){
    return fetch(`${BASE_URL}${action}-equipo?id=${numeroId}`)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON
    })
}

export function borrarEquipo(numeroId){
    return fetch(`${BASE_URL}borrar-equipo?id=${numeroId}`)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON
    })
}
export function enviarEdicionDeEquipo(id, formData){
    fetch(`${BASE_URL}editar-equipo?id=${id}`, {
        method:"POST",
        body: formData
    }
)}
export function enviarAgregarEquipo(formData){
    fetch(`${BASE_URL}agregar-equipo`, {
        method:"POST",
        body: formData
    }
)}
