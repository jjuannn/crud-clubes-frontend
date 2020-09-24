import { Equipo } from "./equipo.js"

export function mapearEquipo(equipo){
    const {
        abreviatura: abreviatura,
        anoFundacion: anoFundacion,
        direccion: direccion,
        estadio: estadio,
        fotoEscudo: fotoEscudo,
        nombre: nombre,
        numeroId: numeroId,
        pais: pais,
        telefono: telefono,
        website: website
    } = equipo

    return new Equipo(
        abreviatura,
        anoFundacion,
        direccion,
        estadio,
        fotoEscudo,
        nombre,
        numeroId,
        pais,
        telefono,
        website
    )
}
