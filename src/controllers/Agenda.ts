
import { Request, Response } from 'express';
import { AgendaService } from '../services/Agenda';

const agendaService = new AgendaService();

export class AgendaController {
    async createAgenda(req: Request, res: Response) {
        try {
            const { data, nomePaciente } = req.body;
            const agenda = await agendaService.createAgenda({ data, nomePaciente });
            return res.status(201).json(agenda);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getAgendaById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const agenda = await agendaService.getAgendaById(Number(id));
            if (!agenda) {
                return res.status(404).json({ message: 'Agenda not found' });
            }
            return res.status(200).json(agenda);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getAllAgendas(req: Request, res: Response) {
        try {
            const agendas = await agendaService.getAllAgendas();
            return res.status(200).json(agendas);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async updateAgenda(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { data, nomePaciente } = req.body;
            const agenda = await agendaService.updateAgenda(Number(id), { data, nomePaciente });
            return res.status(200).json(agenda);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async deleteAgenda(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const agenda = await agendaService.deleteAgenda(Number(id));
            return res.status(200).json(agenda);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}