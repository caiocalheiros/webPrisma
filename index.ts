// src/index.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import express from 'express';
import bodyParser from 'body-parser';

import pacienteRoutes from './src/routes/paciente';
import secretariaRoutes from './src/routes/secretaria';
import consultaRoutes from './src/routes/consulta';
import agendaRoutes from './src/routes/agenda';

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.use('/pacientes', pacienteRoutes);
app.use('/secretaria', secretariaRoutes);
app.use('/consulta', consultaRoutes);
app.use('/agenda', agendaRoutes);

app.listen(port, () => {
  console.log(`Server está rodando na ${port}`);
});