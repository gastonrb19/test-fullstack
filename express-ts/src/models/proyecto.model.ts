import { Trabajador } from "./trabajador.model.js";

export interface Proyecto {
    nombre : string;
    cliente : string;
    fecha_inicio : Date; 
    fecha_fin : Date;
    trabajadores : Trabajador[];
}