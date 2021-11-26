import { Request, Response } from "express";
import { ImportImageUseCase } from "./ImportImageUseCase";
declare class ImportQAItemImageController {
    private importQAItemImageUseCase;
    constructor(importQAItemImageUseCase: ImportImageUseCase);
    handle(request: Request, response: Response): Response;
}
export { ImportQAItemImageController };
