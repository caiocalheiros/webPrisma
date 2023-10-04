import { ConsultaService } from '../services/Consulta';
import { Request, Response } from 'express';

const consultaService = new ConsultaService();

export class ConsultaController {
    async createConsulta(req: Request, res: Response) {
        try {
            const consulta = await consultaService.createConsulta(req.body);
            res.status(201).json(consulta);
        } catch (error) {
            res.status(500).json({ message: "Falha ao criar consulta" });
        }
    }

    async getConsulta(req: Request, res: Response) {
        try {
            const consulta = await consultaService.getConsulta(Number(req.params.id));
            if (!consulta) {
                res.status(404).json({ error: 'Consulta não encontrada' });
            } else {
                res.json(consulta);
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao pegar consulta." });
        }
    }

    async getAllConsultas(req: Request, res: Response) {
        try {
            const consultas = await consultaService.getAllConsultas();
            res.json(consultas);
        } catch (error) {
            res.status(500).json({ message: "Falha ao Consultar" });
        }
    }

    async updateConsulta(req: Request, res: Response) {
        try {
            const consulta = await consultaService.updateConsulta(Number(req.params.id), req.body);
            if (!consulta) {
                res.status(404).json({ error: 'Consulta não encontrada' });
            } else {
                res.json(consulta);
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao atualizar consulta." });
        }
    }

    async deleteConsulta(req: Request, res: Response) {
        try {
            const consulta = await consultaService.deleteConsulta(Number(req.params.id));
            if (!consulta) {
                res.status(404).json({ error: 'Consulta não encontrada' });
            } else {
                res.json(consulta);
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao deletar consulta." });
        }
    }
}
