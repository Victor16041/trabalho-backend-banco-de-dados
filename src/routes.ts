import { Router } from "express";

import personagensController from "./controllers/personagens";

const routes = Router();

routes.get("/", (request, response) =>
  response.status(200).json({ sucess: true }),
);

// Rotas de personagens
routes.get("/personagens", personagensController.list);
routes.get("/personagens/:id", personagensController.getById);
routes.post("/personagens", personagensController.create);
routes.put("/personagens/:id", personagensController.update);
routes.delete("/personagens/:id", personagensController.delete);

export default routes;
