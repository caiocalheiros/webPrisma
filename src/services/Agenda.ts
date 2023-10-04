import { PrismaClient } from '@prisma/client';

export class AgendaService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    async createAgenda(data: { data: Date; nomePaciente: string }) {
        const { data: agendaData, nomePaciente } = data;
        const agenda = await this.prisma.agenda.create({
            data: {
                data: agendaData,
                nomePaciente,
            },
        });
        return agenda;
    }

    async getAgendaById(id: number) {
        const agenda = await this.prisma.agenda.findUnique({
            where: {
                id,
            },
        });
        return agenda;
    }

    async getAllAgendas() {
        const agendas = await this.prisma.agenda.findMany();
        return agendas;
    }

    async updateAgenda(id: number, data: { data?: Date; nomePaciente?: string }) {
        const { data: agendaData, nomePaciente } = data;
        const agenda = await this.prisma.agenda.update({
            where: {
                id,
            },
            data: {
                data: agendaData,
                nomePaciente,
            },
        });
        return agenda;
    }

    async deleteAgenda(id: number) {
        const agenda = await this.prisma.agenda.delete({
            where: {
                id,
            },
        });
        return agenda;
    }
}
