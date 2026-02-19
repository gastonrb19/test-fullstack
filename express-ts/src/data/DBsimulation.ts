import { Proyecto } from "../models/proyecto.model.js";
import { Trabajador } from "../models/trabajador.model.js";

export class DBSimulation {
     trabajadores : Trabajador[] = [];
     proyectos : Proyecto[] = [];
}


export const db = new DBSimulation();