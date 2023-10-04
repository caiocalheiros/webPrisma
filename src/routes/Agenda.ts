import express from 'express';
import { AgendaController } from '../controllers/Agenda';

const agendaRouter = express.Router();
const agendaController = new AgendaController();

agendaRouter.post('/create', agendaController.createAgenda);
agendaRouter.get('/:id', agendaController.getAgendaById);
agendaRouter.get('/', agendaController.getAllAgendas);
agendaRouter.put('/:id', agendaController.updateAgenda);
agendaRouter.delete('/:id', agendaController.deleteAgenda);

export { agendaRouter };
