import { Request, Response } from "express";

import { CreateQAUseCase } from "./CreateQAUseCase";

class CreateQAController {
    constructor(private createCategoryUseCase: CreateQAUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateQAController };
