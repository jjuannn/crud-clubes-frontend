const BASE_URL = "http://localhost:3030/"

export function buscarListaEquipos(){
    return fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON
    })
}

export function buscarInfoEquipo(numeroId){
    return fetch(`${BASE_URL}ver-equipo?id=${numeroId}`)
    .then(response => response.json())
    .then(responseJSON => {
        return responseJSON
    })
}