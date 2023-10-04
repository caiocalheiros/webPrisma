// src/routes/paciente.ts
import express from 'express';
const router = express.Router();

// Rotas para CRUD do Paciente
router.post('/', /* Adicione a lógica para criar um Paciente */);
router.get('/', /* Adicione a lógica para buscar todos os Pacientes */);
router.get('/:id', /* Adicione a lógica para buscar um Paciente por ID */);
router.put('/:id', /* Adicione a lógica para atualizar um Paciente por ID */);
router.delete('/:id', /* Adicione a lógica para excluir um Paciente por ID */);

export default router;