import {OptionalId} from "mongodb"

export type RestauranteModel = OptionalId<{
    nombre: string,
    direccion: string,
    ciudad: string,
    latitud: number,
    longitud: number,
    pais: string,
    telefono: string,
}>

export type APIPhone = {
    country: string
    is_valid: boolean
}

export type APICity = {
    latitude: number,
    longitude: number,
}

export type APIWeather = {
    temp: number
}

export type APIWorldTime = {
    hour: string,
    minute: string,
}
