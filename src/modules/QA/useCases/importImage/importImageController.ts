import { Request, Response } from "express";

import { ImportImageUseCase } from "./ImportImageUseCase";

class ImportQAItemImageController {
    constructor(private importQAItemImageUseCase: ImportImageUseCase) {}
    handle(request: Request, response: Response): Response {
        const { qaItemId } = request.params;
        const { files } = request;

        this.importQAItemImageUseCase.execute(qaItemId, files);
        return response.send();
    }
}

export { ImportQAItemImageController };
