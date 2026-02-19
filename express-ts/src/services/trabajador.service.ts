import { DBSimulation } from "../data/DBsimulation.js"
import { Trabajador } from "../models/trabajador.model.js";

export default class TrabajadorService {

    constructor(private db: DBSimulation){}

    // Returns true if the trabajador was created successfully, false otherwise
    createTrabajador(trabajador : Trabajador) : Promise<boolean>{
        this.db.trabajadores.push(trabajador);

        //Check if the trabajador was created successfully
        if(!this.db.trabajadores.includes(trabajador)){
            return Promise.resolve(false);
        }

        return Promise.resolve(true);
    }

    checkTrabajadorExists(nombre: string) : Promise<boolean>{
        const trabajadorExists = this.db.trabajadores.some(trabajador => trabajador.nombre === nombre);
        return Promise.resolve(trabajadorExists);
    }

    listTrabajadores() : Promise<Trabajador[]>{
        return Promise.resolve(this.db.trabajadores);
    }
}