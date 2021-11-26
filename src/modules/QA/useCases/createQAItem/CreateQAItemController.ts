import { Request, Response } from "express";

import { CreateQAItemUseCase } from "./CreateQAItemUseCase";

class CreateQAItemController {
    constructor(private createQAItemUseCase: CreateQAItemUseCase) {}

    handle(request: Request, response: Response): Response {
        const { qaId, title, description } = request.body;

        this.createQAItemUseCase.execute({ qaId, title, description });

        return response.status(201).send();
    }
}

export { CreateQAItemController };
