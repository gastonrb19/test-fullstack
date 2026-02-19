import { Router } from "express";
import {
  checkTrabajadorExists,
  listTrabajadores,
  postTrabajador,
} from "../controllers/trabajador.controller.js";

import {
  postProyecto,
  displayProyectos,
  addTrabajadorToProyecto,
} from "../controllers/proyecto.controller.js";

const router = Router();

router.post("/trabajador", postTrabajador);
router.get("/trabajadores", listTrabajadores);
router.get("/trabajador/:nombre", checkTrabajadorExists);

router.route("/proyecto").post(postProyecto).get(displayProyectos);
router.post("/proyecto/addTrabajador", addTrabajadorToProyecto);

export default router;
