import { Request, Response } from "express";
import { UpdateQAItemUseCase } from "./UpdateQAItemUseCase";
declare class UpdateQAItemController {
    private updateQAItemUseCase;
    constructor(updateQAItemUseCase: UpdateQAItemUseCase);
    handle(request: Request, response: Response): Response;
}
export { UpdateQAItemController };
