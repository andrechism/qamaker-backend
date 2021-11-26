import { Request, Response } from "express";
import { CreateQAItemUseCase } from "./CreateQAItemUseCase";
declare class CreateQAItemController {
    private createQAItemUseCase;
    constructor(createQAItemUseCase: CreateQAItemUseCase);
    handle(request: Request, response: Response): Response;
}
export { CreateQAItemController };
