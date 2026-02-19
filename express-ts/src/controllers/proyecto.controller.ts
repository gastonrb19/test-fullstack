import { Proyecto } from "../models/proyecto.model.js";
import ProyectoService from "../services/proyecto.service.js";
import { db } from "../data/DBsimulation.js";
import { Request, Response } from "express";

export default class ProyectoController {
  constructor(private proyectoService: ProyectoService) {}

  async postProyecto(req: Request, res: Response) {
    const newProyecto: Proyecto = req.body;

    if (
      !newProyecto.nombre ||
      !newProyecto.cliente ||
      !newProyecto.fecha_inicio ||
      !newProyecto.fecha_fin ||
      !newProyecto.trabajadores
    ) {
      res.status(400).json({ message: "Invalid proyecto data" });
      return;
    }

    const createProyecto =
      await this.proyectoService.createProyecto(newProyecto);

    if (!createProyecto) {
      res.status(500).json({ message: "Error creando el proyecto" });
      return;
    }

    res.status(201).json({ message: "Proyecto creado exitosamente" });
  }

  async displayProyectos(req: any, res: any) {
    const proyectos = await this.proyectoService.displayProyectos();
    res.status(200).json(proyectos);
  }

  async checkProyectoExists(req: any, res: any) {
    const { nombre } = req.params;

    if (!nombre) {
      res.status(400).json({ message: "Nombre del proyecto es requerido" });
      return;
    }

    const proyectoExists = await this.proyectoService.checkProyectoExists(
      String(nombre),
    );

    if (proyectoExists) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  }

  async addTrabajadorToProyecto(req: any, res: any) {
    const { nombre, trabajador } = req.body;

    if (!nombre || !trabajador) {
      res
        .status(400)
        .json({ message: "Nombre del proyecto y trabajador son requeridos" });
      return;
    }

    const addTrabajador = await this.proyectoService.addTrabajadorToProyecto(
      nombre,
      trabajador,
    );

    if (!addTrabajador) {
      res
        .status(500)
        .json({ message: "Error agregando el trabajador al proyecto" });
      return;
    }

    res
      .status(200)
      .json({ message: "Trabajador agregado al proyecto exitosamente" });
  }
}

export const proyectoService = new ProyectoService(db);
const controller = new ProyectoController(proyectoService);

export const postProyecto = controller.postProyecto.bind(controller);
export const displayProyectos = controller.displayProyectos.bind(controller);
export const checkProyectoExists =
  controller.checkProyectoExists.bind(controller);
export const addTrabajadorToProyecto =
  controller.addTrabajadorToProyecto.bind(controller);
