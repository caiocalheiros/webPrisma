import { PrismaClient } from '@prisma/client';

interface IcreatePaciente {
  nome: string,
  senha: string,
  user: string,
}

interface IupdatePaciente {
  nome?: string,
  senha?: string,
  user?: string,
}

class PacienteServices {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }

  async createPaciente(data: IcreatePaciente) {
    const paciente = await this.prisma.paciente.create({ data });

    return paciente;
  }

  async readPacientes() {
    const pacientes = await this.prisma.paciente.findMany({      
      select: {
        id: true,
        nome: true,
      },
    });

    return pacientes;
  }

  async readPacienteById(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },   
      select: {
        id: true,
        nome: true,
      },
    });

    return paciente;
  }

  async updatePaciente(id: number, data: IupdatePaciente) {
    const paciente = await this.prisma.paciente.update({
      where: { id },
      data
    });

    return paciente;
  }

  async deletePaciente(id: number) {
    await this.prisma.consulta.deleteMany({
      where: { pacienteId: id },
    });
    await this.prisma.paciente.delete({
      where: { id },   
      select: {
        id: true,
        nome: true,
      },
    });
  }



}

export default PacienteServices