import { Request, Response } from "express";
import { Paciente } from "@prisma/client";
import PacienteServices from "../services/Paciente"

const paciente = new PacienteServices()

class PacienteController {
    constructor() { }

    async createPaciente(req: Request, res: Response) {
        const data = req.body
        if (!data) {
            res.status(500)
            res.json("Erro")
        }
        try {
            const novoPaciente = await paciente.createPaciente(data);

            res.status(200)
            res.json(novoPaciente)

            return novoPaciente;

        } catch (err) {
            res.status(501)
            res.json({ message: 'Erro ao criar paciente' })
            console.log(err)
        }
    }

    async readPacientes(req: Request, res: Response) {
        try {
            const pacientes = await paciente.readPacientes();

            res.status(200)
            res.json(pacientes)
        } catch (err) {
            console.log(err)
            res.status(501)
            res.json({ message: "Erro na leitura de pacientes" })
        }

    }

    async readPacienteById(req: Request, res: Response) {
        try {
            const getPaciente = await paciente.readPacienteById(Number(req.params.id));

            if (!getPaciente) {
                return res.status(404).json({ message: 'Paciente não encontrado' });
            }

            return res.status(200).json(getPaciente);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }

    async updatePaciente(req: Request, res: Response) {
        const data = req.body.data;

        try {
            const pacienteAtualizado = await paciente.updatePaciente(Number(req.params.id), data);

            res.status(200);
            res.json(pacienteAtualizado);
        } catch (err) {
            console.log(err)
            res.status(500);
            res.json({ message: 'Erro na atualização do paciente' });
        }
    }

    async deletePaciente(req: Request, res: Response) {

        try {
            const pacienteDelete = await paciente.deletePaciente(Number(req.params.id));

            res.status(200);
            res.json({ message: 'Paciente excluído com sucesso', pacienteDelete });
        } catch (err) {
            console.log(err)
            res.status(500);
            res.json({ message: 'Erro na exclusão do paciente' });
        }
    }

}

export default new PacienteController()

