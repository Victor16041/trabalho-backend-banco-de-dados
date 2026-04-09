import { Response } from "express";
import { Prisma } from "../../generated/prisma/client";

const prismaErros: Record<string, number> = {
  P2001: 404,
  P2002: 409,
  P2003: 409,
  P2025: 404,
};

export function handleErrors(e: any, response: Response) {
  console.error(e);
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    const status = prismaErros[e.code] || 500;
    return response.status(status).json(e.message);
  }
  return response.status(500).json("Erro desconhecido");
}
