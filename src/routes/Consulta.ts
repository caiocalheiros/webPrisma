import express from 'express';
import { ConsultaController } from '../controllers/Consulta';

const consultaRouter = express.Router();
const consultaController = new ConsultaController();

consultaRouter.post('/create', consultaController.createConsulta);
consultaRouter.get('/:id', consultaController.getConsulta);
consultaRouter.get('/', consultaController.getAllConsultas);
consultaRouter.put('/:id', consultaController.updateConsulta);
consultaRouter.delete('/:id', consultaController.deleteConsulta);

export { consultaRouter };