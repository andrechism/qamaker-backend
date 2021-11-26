import { Router } from "express";

import { createQAController } from "../modules/QA/useCases/createQA";
import { createQAItemController } from "../modules/QA/useCases/createQAItem";
import { listQAController } from "../modules/QA/useCases/listQA";

const QARoutes = Router();

QARoutes.post("/", (request, response) => {
    return createQAController.handle(request, response);
});

QARoutes.get("/", (request, response) => {
    return listQAController.handle(request, response);
});

QARoutes.post("/:id", (request, response) => {
    return createQAItemController.handle(request, response);
});

export { QARoutes };
