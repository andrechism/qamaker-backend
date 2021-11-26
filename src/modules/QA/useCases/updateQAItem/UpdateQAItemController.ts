import { Request, Response } from "express";

import { UpdateQAItemUseCase } from "./UpdateQAItemUseCase";

class UpdateQAItemController {
    constructor(private updateQAItemUseCase: UpdateQAItemUseCase) {}

    handle(request: Request, response: Response): Response {
        const { qaItemId } = request.params;
        const { title, description, status } = request.body;

        this.updateQAItemUseCase.execute({
            qaItemId,
            title,
            description,
            status,
        });

        return response.status(201).send();
    }
}

export { UpdateQAItemController };
