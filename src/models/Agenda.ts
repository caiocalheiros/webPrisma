import { Agenda, Prisma } from '@prisma/client';

export const Agendas: Prisma.Model<Agenda> = {
    name: 'Agenda',
    properties: {
        data: 'date',
        nomePcnt: 'string',
    },
};