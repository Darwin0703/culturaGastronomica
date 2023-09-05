import { Producto } from "./producto";

export interface Gastronomia{
    id:number,
    img:string,
    cultura:string,
    region:string,
    descripcion:string,
    platosPrincipales:string[],
    ingredientes:Producto[],
    restaurantes:string[]
}