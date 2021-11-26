import { Request, Response } from "express";

import { ListQAUseCase } from "./ListQAUseCase";

class ListQAController {
    constructor(private listQAUseCase: ListQAUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listQAUseCase.execute();
        return response.json(all);
    }
}

export { ListQAController };
