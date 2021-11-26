import { Request, Response } from "express";

import { DeleteQAItemUseCase } from "./DeleteQAItemUseCase";

class DeleteQAItemController {
    constructor(private deleteQAItemUseCase: DeleteQAItemUseCase) {}

    handle(request: Request, response: Response): Response {
        const { qaItemId } = request.params;

        this.deleteQAItemUseCase.execute({
            qaItemId,
        });

        return response.status(204).send();
    }
}

export { DeleteQAItemController };
