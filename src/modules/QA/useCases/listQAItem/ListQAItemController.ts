import { Request, Response } from "express";

import { ListQAItemUseCase } from "./ListQAItemUseCase";

class ListQAItemController {
    constructor(private listQAItemUseCase: ListQAItemUseCase) {}

    handle(request: Request, response: Response): Response {
        const { qaId } = request.params;
        const all = this.listQAItemUseCase.execute(qaId);
        return response.json(all);
    }
}

export { ListQAItemController };
