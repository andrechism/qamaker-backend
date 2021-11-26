import { Router } from "express";

import { createQAItemController } from "../modules/QA/useCases/createQAItem";
import { deleteQAItemController } from "../modules/QA/useCases/deleteQAItem";
import { listQAItemController } from "../modules/QA/useCases/listQAItem";
import { updateQAItemController } from "../modules/QA/useCases/updateQAItem";

const QAItemRoutes = Router();

QAItemRoutes.post("/", (request, response) => {
    return createQAItemController.handle(request, response);
});

QAItemRoutes.get("/:qaId", (request, response) => {
    return listQAItemController.handle(request, response);
});

QAItemRoutes.put("/:qaItemId", (request, response) => {
    return updateQAItemController.handle(request, response);
});

QAItemRoutes.delete("/:qaItemId", (request, response) => {
    return deleteQAItemController.handle(request, response);
});

export { QAItemRoutes };
