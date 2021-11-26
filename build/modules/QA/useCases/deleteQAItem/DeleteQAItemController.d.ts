import { Request, Response } from "express";
import { DeleteQAItemUseCase } from "./DeleteQAItemUseCase";
declare class DeleteQAItemController {
    private deleteQAItemUseCase;
    constructor(deleteQAItemUseCase: DeleteQAItemUseCase);
    handle(request: Request, response: Response): Response;
}
export { DeleteQAItemController };
