import { DBSimulation } from "../data/DBsimulation.js";
import { Proyecto } from "../models/proyecto.model.js";
import TrabajadorService from "./trabajador.service.js";

export default class ProyectoService {
  constructor(private db: DBSimulation) {}

  createProyecto(proyecto: Proyecto): Promise<boolean> {
    this.db.proyectos.push(proyecto);

    // Check if the proyecto was created successfully
    if (!this.db.proyectos.includes(proyecto)) {
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

  displayProyectos(): Promise<Proyecto[]> {
    return Promise.resolve(this.db.proyectos);
  }

  checkProyectoExists(nombre: string): Promise<boolean> {
    const proyectoExists = this.db.proyectos.some(
      (proyecto) => proyecto.nombre === nombre,
    );
    return Promise.resolve(proyectoExists);
  }

  addTrabajadorToProyecto(
    proyectoNombre: string,
    trabajador: any,
  ): Promise<boolean> {

    const checkProyecto = this.checkProyectoExists(proyectoNombre);

    if (!checkProyecto) {
      console.log("error en check proyecto");
      return Promise.resolve(false);
    }

    const proyecto = this.db.proyectos.find(
      (proyecto) => proyecto.nombre === proyectoNombre,
    );

    if (!proyecto) {
      console.log("no existe proyecto");
      return Promise.resolve(false);
    }

    const trabajadorExistente = this.db.trabajadores.find(
      (t) => {
        console.log(t.nombre, trabajador.nombre);
        return t.nombre === trabajador.nombre
      }
    );

    if (!trabajadorExistente) {
      console.log("no existe trabajador");
      return Promise.resolve(false);
    }

    proyecto.trabajadores.push(trabajadorExistente);
    return Promise.resolve(true);
  }
}
