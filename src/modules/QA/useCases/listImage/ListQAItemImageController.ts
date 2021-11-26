import { Request, Response } from "express";

import { ListQAItemImageUseCase } from "./ListQAItemImageUseCase";

class ListQAItemImageController {
    constructor(private listQAItemUseCase: ListQAItemImageUseCase) {}

    handle(request: Request, response: Response): Response {
        const { qaItemId } = request.params;
        const all = this.listQAItemUseCase.execute(qaItemId);
        return response.json(all);
    }
}

export { ListQAItemImageController };
