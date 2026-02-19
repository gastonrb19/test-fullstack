import { Trabajador } from "../models/trabajador.model.js";
import TrabajadorService from "../services/trabajador.service.js";
import { db } from "../data/DBsimulation.js";
import { Request, Response } from "express";

export default class TrabajadorController {
  constructor(private trabajadorService: TrabajadorService) {}

  async postTrabajador(req: Request, res: Response) {
    const newTrabajador: Trabajador = req.body;

    // Validate the new trabajador
    if (
      !newTrabajador.nombre ||
      !newTrabajador.rol ||
      !newTrabajador.seniority
    ) {
      res.status(400).json({ message: "Invalid trabajador data" });
      return;
    }

    const createTrabajador =
      await this.trabajadorService.createTrabajador(newTrabajador);

    if (!createTrabajador) {
      res.status(500).json({ message: "Error creando al trabajador" });
      return;
    }

    res.status(201).json({ message: "Trabajador creado exitosamente" });
  }

  async checkTrabajadorExists(req: Request, res: Response) {
    const { nombre } = req.params;

    if (!nombre) {
      res.status(400).json({ message: "Nombre del trabajador es requerido" });
      return;
    }

    const trabajadorExists = await this.trabajadorService.checkTrabajadorExists(
      String(nombre),
    );

    if (trabajadorExists) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  }

  async listTrabajadores(req: Request, res: Response) {
    const trabajadores = await this.trabajadorService.listTrabajadores();
    if (trabajadores.length === 0) {
      res
        .status(404)
        .json({ message: "No hay trabajadores registrados" });
      return;
    }

    res.status(200).json(trabajadores);
  }
}

const trabajadorService = new TrabajadorService(db);
const controller = new TrabajadorController(trabajadorService);

export const postTrabajador = controller.postTrabajador.bind(controller);
export const checkTrabajadorExists =
  controller.checkTrabajadorExists.bind(controller);
export const listTrabajadores = controller.listTrabajadores.bind(controller);
