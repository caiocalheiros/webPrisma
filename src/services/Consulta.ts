import { PrismaClient, Consulta } from '@prisma/client';
import { AgendaService } from './Agenda';

interface createConsulta {
    data: Date,
    nomePaciente: string,
    nomeDentista: string,
    pacienteId: number,
    secretariaId: number
}

interface updateConsulta {
    data?: Date,
    nomePaciente?: string,
    nomeDentista?: string,
    pacienteId?: number,
    secretariaId?: number
}

export class ConsultaService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async createConsulta(data: createConsulta) {
        const consulta = await this.prisma.consulta.create({ data });

        return consulta;
    }

    async getConsulta(id: number) {
        const consulta = await this.prisma.consulta.findUnique({
            where: {
                id,
            },
        });
        return consulta;
    }

    async getAllConsultas() {
        const consultas = await this.prisma.consulta.findMany();
        return consultas;
    }

    async updateConsulta(id: number, data: updateConsulta) {
        const consulta = await this.prisma.consulta.update({
            where: {
                id,
            },
            data,
        });
        return consulta;
    }

    async deleteConsulta(id: number) {
        const consulta = await this.prisma.consulta.delete({
            where: {
                id,
            },
        });
        return consulta;
    }
}
