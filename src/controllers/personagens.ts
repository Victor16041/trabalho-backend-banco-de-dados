import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErrors";

export default {
  list: async (request: Request, response: Response) => {
    try {
      const personagens = await prisma.personagens.findMany();
      return response.status(200).json(personagens);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  create: async (request: Request, response: Response) => {
    try {
      const { nome, ki, maxKi, race, gender } = request.body;

      if (!nome || !ki || !maxKi || !race || !gender) {
        return response.status(400).json("dados do personagem incompletos");
      }

      const personagem = await prisma.personagens.create({
        data: {
          nome,
          ki,
          maxKi,
          race,
          gender,
        },
      });
      return response.status(201).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  getById: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const personagem = await prisma.personagens.findUnique({
        where: {
          id: +id,
        },
      });

      if (!personagem) {
        return response.status(404).json("personagem nao encontrado");
      }

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { nome, ki, maxKi, race, gender } = request.body;

      const personagem = await prisma.personagens.update({
        data: {
          nome,
          ki,
          maxKi,
          race,
          gender,
        },
        where: { id: +id },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  delete: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const personagem = await prisma.personagens.delete({
        where: {
          id: +id,
        },
      });

      return response.status(200).json(personagem);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
};
