import { Request, Response } from "express";
import { CreateQAUseCase } from "./CreateQAUseCase";
declare class CreateQAController {
    private createCategoryUseCase;
    constructor(createCategoryUseCase: CreateQAUseCase);
    handle(request: Request, response: Response): Response;
}
export { CreateQAController };
