import { Router } from "express";
import PacienteController from "../controllers/Paciente";

const PacienteRouter = Router();

PacienteRouter.post("/create", PacienteController.createPaciente);
PacienteRouter.get("/", PacienteController.readPacientes);
PacienteRouter.get("/:id", PacienteController.readPacienteById);
PacienteRouter.put("/:id", PacienteController.updatePaciente);
PacienteRouter.delete("/:id", PacienteController.deletePaciente);

export default PacienteRouter