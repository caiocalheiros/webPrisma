import express from 'express';

import PacienteRouter from './Paciente';
import { consultaRouter } from './Consulta';
import secretariasRouter from './Secretaria';
import { agendaRouter } from './Agenda';

const router = express.Router();

router.use('/pacientes', PacienteRouter);
router.use('/consultas', consultaRouter);
router.use('/agendas', agendaRouter);
router.use('/secretarias', secretariasRouter);

export default router