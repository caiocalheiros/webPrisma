import { Request, Response } from 'express';
import SecretariaServices from '../services/Secretaria';

const secretariaServices = new SecretariaServices();

class SecretariaController {
    constructor() { }

    async create(req: Request, res: Response) {
        const { nome, RG } = req.body;
        if (!nome || !RG) {
            res.status(500).json({ message: "ERRO: Informações faltando!" })
        }

        try {
            const secretaria = await secretariaServices.createSecretaria(nome, RG);
            return res.status(200).json(secretaria);
        } catch (err) {
            res.status(501).json({ message: "Erro" })
            console.log("Deu ruim\n\n", err)
        }
    }

    async read(req: Request, res: Response) {
        try {
            const secretarias = await secretariaServices.readSecretaria();
            return res.status(200).json(secretarias);
        } catch (err) {
            res.status(501).json({
                message: "Erro"
            })
        }
    }

    async readById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const secretaria = await secretariaServices.readSecretariaById(Number(id));
            return res.status(200).json(secretaria);
        } catch (err) {
            res.status(501).json({
                message: "ERRO"
            })
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, RG } = req.body;
        if (!id || !nome || !RG) {
            res.status(500).json({
                message: "ERRO: Informação faltando!"
            })
        }

        try {
            const secretaria = await secretariaServices.updateSecretaria(Number(id), nome, RG);
            return res.status(200).json(secretaria);
        } catch (err) {
            res.status(501).json({
                message: "ERRO"
            })
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        if (!id) {
            res.status(500).json({
                message: "ERRO: Informação faltando!"
            })
        }

        try {
            const secretaria = await secretariaServices.deleteSecretaria(Number(id));
            return res.json(secretaria);
        } catch (err) {
            res.status(501).json({
                message: "ERRO"
            })
        }
    }
}

export default SecretariaController