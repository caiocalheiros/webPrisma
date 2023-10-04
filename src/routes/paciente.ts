// src/routes/paciente.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Rota para criar um paciente
router.post('/', async (req, res) => {
    try {
        const { nomePcnte, senha, usuario } = req.body;

        const paciente = await prisma.paciente.create({
            data: {
                nomePcnte,
                senha,
                usuario,
            },
        });

        res.status(201).json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao criar o paciente' });
    }
});


// Rota para obter todos os pacientes
router.get('/', async (req, res) => {
    try {
        const pacientes = await prisma.paciente.findMany();
        res.json(pacientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar pacientes' });
    }
});


// Rota para obter um paciente por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await prisma.paciente.findUnique({
            where: { id: parseInt(id) },
        });

        if (!paciente) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }

        res.json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao buscar paciente' });
    }
});



// Rota para atualizar um paciente por ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nomePcnte, senha, usuario } = req.body;

        const paciente = await prisma.paciente.update({
            where: { id: parseInt(id) },
            data: {
                nomePcnte,
                senha,
                usuario,
            },
        });

        res.json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao atualizar paciente' });
    }
});



// Rota para excluir um paciente por ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.paciente.delete({
            where: { id: parseInt(id) },
        });

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao excluir paciente' });
    }
});



export default router;